/**
 * Remove every answer-bearing field from a test document before it is sent to a candidate.
 *
 * A `.select("-sections.questions.correctAnswer …")` projection is not enough: reading tests keep
 * answers in several nested shapes as well — `questionGroups[].questions[]`, `summarySegments[]`,
 * `statements[]`, `mcQuestions[]`, `questionSets[]` … — none of which the projection reaches. The
 * public exam endpoint was therefore shipping the answer key to the browser, where any candidate
 * could read it from the network tab.
 *
 * This walks the whole document and drops the answer keys wherever they appear, so a new question
 * shape can never silently start leaking again. Only plain objects and arrays are traversed, so
 * ObjectIds and Dates from a `.lean()` query are passed through untouched.
 */
const ANSWER_KEYS = new Set(["correctAnswer", "correctAnswers", "acceptableAnswers", "explanation"]);

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
    typeof value === "object" &&
    value !== null &&
    (value.constructor === Object || value.constructor === undefined);

export const stripAnswers = <T>(node: T): T => {
    if (Array.isArray(node)) {
        return node.map((item) => stripAnswers(item)) as unknown as T;
    }

    if (isPlainObject(node)) {
        const out: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(node)) {
            if (ANSWER_KEYS.has(key)) continue;
            out[key] = stripAnswers(value);
        }
        return out as unknown as T;
    }

    return node;
};

export default stripAnswers;

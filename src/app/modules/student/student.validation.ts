import { z } from "zod";

// Create student validation
const createStudentSchema = z.object({
    body: z.object({
        nameEnglish: z
            .string({ message: "Name in English is required" })
            .min(2, "Name must be at least 2 characters")
            .max(100, "Name must not exceed 100 characters"),
        email: z
            .string({ message: "Email is required" })
            .email("Invalid email format"),
        phone: z
            .string({ message: "Phone number is required" })
            .regex(/^01[3-9]\d{8}$/, "Invalid Bangladesh phone number (e.g., 01712345678)"),
        nidNumber: z
            .string()
            .regex(/^\d{10}$|^\d{17}$/, "NID must be 10 or 17 digits")
            .optional(),
        passportNumber: z
            .string()
            .regex(/^[A-Za-z0-9]{6,12}$/, "Passport must be 6-12 letters/numbers")
            .optional(),
        photo: z.string().url("Photo must be a valid URL").optional(),
        // Full Sets (new grouped L+R+W)
        fullSets: z.array(z.object({
            label: z.string().optional(),
            listeningSetNumber: z.number().int().min(1).max(10000).optional(),
            readingSetNumber: z.number().int().min(1).max(10000).optional(),
            writingSetNumber: z.number().int().min(1).max(10000).optional(),
        })).optional(),
        extraSets: z.array(z.object({
            module: z.string(),
            setNumber: z.number().int().min(1).max(10000),
        })).optional(),
        // Legacy fields
        listeningSetNumber: z.number().int().min(1).max(10000).optional(),
        listeningSetNumbers: z.array(z.number().int().min(1).max(10000)).optional(),
        readingSetNumber: z.number().int().min(1).max(10000).optional(),
        readingSetNumbers: z.array(z.number().int().min(1).max(10000)).optional(),
        writingSetNumber: z.number().int().min(1).max(10000).optional(),
        writingSetNumbers: z.array(z.number().int().min(1).max(10000)).optional(),
        speakingSetNumber: z.number().int().min(1).max(10000).optional(),
        speakingSetNumbers: z.array(z.number().int().min(1).max(10000)).optional(),
        // Speaking exam schedule
        speakingExamDate: z.string().datetime().optional(),
        speakingExamTime: z.string().max(20).optional(),
        speakingMeetingLink: z.string().url("Meeting link must be a valid URL").optional(),
    }).refine(
        (d) => Boolean(d.nidNumber && d.nidNumber.trim()) || Boolean(d.passportNumber && d.passportNumber.trim()),
        { message: "Provide at least one: NID or Passport number", path: ["nidNumber"] }
    ),
});

// Update student validation
const updateStudentSchema = z.object({
    body: z.object({
        nameEnglish: z
            .string()
            .min(2, "Name must be at least 2 characters")
            .max(100, "Name must not exceed 100 characters")
            .optional(),
        phone: z
            .string()
            .regex(/^01[3-9]\d{8}$/, "Invalid Bangladesh phone number")
            .optional(),
        nidNumber: z
            .string()
            .regex(/^\d{10}$|^\d{17}$/, "NID must be 10 or 17 digits")
            .optional(),
        passportNumber: z
            .string()
            .regex(/^[A-Za-z0-9]{6,12}$/, "Passport must be 6-12 letters/numbers")
            .optional(),
        photo: z.string().url("Photo must be a valid URL").optional(),
        listeningSetNumber: z.number().int().min(1).max(10000).optional(),
        listeningSetNumbers: z.array(z.number().int().min(1).max(10000)).optional(),
        readingSetNumber: z.number().int().min(1).max(10000).optional(),
        readingSetNumbers: z.array(z.number().int().min(1).max(10000)).optional(),
        writingSetNumber: z.number().int().min(1).max(10000).optional(),
        writingSetNumbers: z.array(z.number().int().min(1).max(10000)).optional(),
        speakingSetNumber: z.number().int().min(1).max(10000).optional(),
        speakingSetNumbers: z.array(z.number().int().min(1).max(10000)).optional(),
        isActive: z.boolean().optional(),
        canRetake: z.boolean().optional(),
        // Speaking exam schedule
        speakingExamDate: z.string().datetime().optional(),
        speakingExamTime: z.string().max(20).optional(),
        speakingMeetingLink: z.string().url("Meeting link must be a valid URL").optional(),
    }),
});

// Verify exam ID validation
const verifyExamIdSchema = z.object({
    body: z.object({
        examId: z
            .string({ message: "Exam ID is required" })
            .regex(
                /^BACIELTS\d{6}$/,
                "Invalid Exam ID format (e.g., BACIELTS260001)"
            ),
    }),
});

// Start exam validation
const startExamSchema = z.object({
    body: z.object({
        examId: z
            .string({ message: "Exam ID is required" })
            .regex(/^BACIELTS\d{6}$/, "Invalid Exam ID format"),
        ipAddress: z.string().optional(),
        browserFingerprint: z.string().optional(),
    }),
});

// Report violation validation
const reportViolationSchema = z.object({
    body: z.object({
        examId: z.string({ message: "Exam ID is required" }),
        type: z.enum([
            "tab-switch",
            "fullscreen-exit",
            "browser-close",
            "refresh",
            "dev-tools",
            "other",
        ]),
    }),
});

// Submit exam validation
const submitExamSchema = z.object({
    body: z.object({
        examId: z.string({ message: "Exam ID is required" }),
        answers: z.object({
            listening: z.array(
                z.object({
                    questionNumber: z.number(),
                    answer: z.union([z.string(), z.array(z.string())]),
                })
            ).optional(),
            reading: z.array(
                z.object({
                    questionNumber: z.number(),
                    answer: z.union([z.string(), z.array(z.string())]),
                })
            ).optional(),
            writing: z.object({
                task1: z.string().optional(),
                task2: z.string().optional(),
            }).optional(),
        }),
    }),
});

// Reset exam validation (admin only)
const resetExamSchema = z.object({
    params: z.object({
        examId: z.string(),
    }),
});

export const StudentValidation = {
    createStudentSchema,
    updateStudentSchema,
    verifyExamIdSchema,
    startExamSchema,
    reportViolationSchema,
    submitExamSchema,
    resetExamSchema,
};

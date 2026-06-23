import { Types } from "mongoose";

// Exam status for a student
export type ExamStatus =
    | "not-started"
    | "in-progress"
    | "completed"
    | "terminated"
    | "expired";

// Full Set = Listening + Reading + Writing together
export interface IFullSet {
    label: string;
    listeningSetNumber: number;
    readingSetNumber: number;
    writingSetNumber: number;
}

// Extra individual part (outside Full Sets)
export interface IExtraSet {
    module: string;
    setNumber: number;
}

// Assigned question sets for the student
export interface IAssignedSets {
    // Full Sets (grouped L+R+W)
    fullSets?: IFullSet[];
    // Extra individual parts
    extraSets?: IExtraSet[];
    // Legacy fields (backward compatible)
    listeningSetId?: Types.ObjectId;
    listeningSetNumber?: number;
    listeningSetNumbers?: number[];
    readingSetId?: Types.ObjectId;
    readingSetNumber?: number;
    readingSetNumbers?: number[];
    writingSetId?: Types.ObjectId;
    writingSetNumber?: number;
    writingSetNumbers?: number[];
    speakingSetId?: Types.ObjectId;
    speakingSetNumber?: number;
    speakingSetNumbers?: number[];
}

// Exam result scores
export interface IExamScores {
    listening: {
        raw: number;
        band: number;
        correctAnswers: number;
        totalQuestions: number;
    };
    reading: {
        raw: number;
        band: number;
        correctAnswers: number;
        totalQuestions: number;
    };
    writing: {
        task1Band: number;
        task2Band: number;
        overallBand: number;
    };
    speaking?: {
        band: number;
    };
    overall: number;
}

// Violation record
export interface IViolation {
    type: "tab-switch" | "fullscreen-exit" | "browser-close" | "refresh" | "dev-tools" | "other";
    timestamp: Date;
    count: number;
    action: "warning" | "deduction" | "terminated";
}

// Main Student interface
export interface IStudent {
    // Unique exam ID (BACIELTS260001 format)
    examId: string;

    // Test Type (Academic / General Training)
    testType: "academic" | "general-training";

    // Personal information
    nameEnglish: string;
    email: string;
    phone: string;
    nidNumber?: string; // Voter ID / NID
    photo?: string;

    // Auto-generated account credentials
    password: string; // Auto-generated (same as email or phone)

    // Exam assignment
    assignedSets: IAssignedSets;

    // Speaking exam schedule
    speakingExamDate?: Date;
    speakingExamTime?: string; // e.g. "10:00 AM"
    speakingMeetingLink?: string; // Zoom / Google Meet link

    // Exam session tracking
    examStatus: ExamStatus;
    examSessionId?: string;
    examStartedAt?: Date;
    examCompletedAt?: Date;

    // Exam scores and results
    scores?: IExamScores;

    // Track completed modules
    completedModules?: ("listening" | "reading" | "writing" | "speaking" | "LISTENING" | "READING" | "WRITING" | "SPEAKING")[];

    // Store student's exam answers for each module
    examAnswers?: {
        listening?: {
            questionNumber: number;
            studentAnswer: string;
            correctAnswer: string;
            isCorrect: boolean;
        }[];
        reading?: {
            questionNumber: number;
            studentAnswer: string;
            correctAnswer: string;
            isCorrect: boolean;
        }[];
        writing?: {
            task1?: string;
            task2?: string;
        };
        speaking?: {
            part1?: any;
            part2?: any;
            part3?: any;
            recordings?: {
                questionLabel: string;
                questionText: string;
                videoUrl: string;
                publicId: string;
                duration?: number;
            }[];
        };
    };

    // Security & violations
    violations: IViolation[];
    totalViolations: number;
    ipAddress?: string;
    browserFingerprint?: string;

    // Status flags
    isActive: boolean;
    canRetake: boolean; // Admin can reset this
    resultsPublished: boolean; // When true, students can see their results
    adminRemarks?: string; // Admin comments on the exam

    // Linked user account (auto-created)
    userId?: Types.ObjectId;

    // Metadata
    createdBy: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

// Create student input (from admin)
export interface ICreateStudentInput {
    testType: "academic" | "general-training";
    nameEnglish: string;
    email: string;
    phone: string;
    nidNumber?: string;
    photo?: string;
    // Full Sets (new)
    fullSets?: IFullSet[];
    extraSets?: IExtraSet[];
    // Legacy fields
    listeningSetNumber?: number;
    listeningSetNumbers?: number[];
    readingSetNumber?: number;
    readingSetNumbers?: number[];
    writingSetNumber?: number;
    writingSetNumbers?: number[];
    speakingSetNumber?: number;
    speakingSetNumbers?: number[];
    // Speaking exam schedule
    speakingExamDate?: Date;
    speakingExamTime?: string;
    speakingMeetingLink?: string;
}

// Verify exam ID input
export interface IVerifyExamIdInput {
    examId: string;
}

// Student filters for listing
export interface IStudentFilters {
    searchTerm?: string;
    examStatus?: ExamStatus;
    fromDate?: string;
    toDate?: string;
}

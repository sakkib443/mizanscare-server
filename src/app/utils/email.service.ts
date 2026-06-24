import nodemailer from "nodemailer";

const BRAND = {
    primary: "#0e7490",      // brand cyan (dark)
    primaryDeep: "#0c5462",
    dark: "#0f172a",
    text: "#475569",
    muted: "#64748b",
    line: "#e2e8f0",
    soft: "#f8fafc",
};

// The Mizan's Care logo (same file the website uses). Embedded inline via CID so
// it always shows in email clients, even when remote images are blocked.
const LOGO_URL = process.env.EMAIL_LOGO_URL || "https://i.ibb.co/d4Vvs2Rb/IMG-5177.png";
const LOGO_CID = "mizanscarelogo";
const logoAttachment = { filename: "mizans-care-logo.png", path: LOGO_URL, cid: LOGO_CID };

// Create transporter using Gmail SMTP
const createTransporter = () => {
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, // Use App Password for Gmail
        },
    });
};

// ── Shared building blocks (kept email-client safe: tables + inline styles, solid colours) ──
const emailHeader = (logoUrl: string, tagline: string) => `
    <tr>
        <td style="background-color:#ffffff; padding:30px 30px 20px; text-align:center;">
            <img src="${logoUrl}" alt="Mizan's Care" height="50" style="display:inline-block; height:50px; max-height:58px; width:auto; border:0; outline:none; text-decoration:none;">
            <div style="margin-top:12px; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:${BRAND.muted}; font-family:Arial,Helvetica,sans-serif;">${tagline}</div>
        </td>
    </tr>
    <tr><td style="height:4px; line-height:4px; font-size:0; background-color:${BRAND.primary};">&nbsp;</td></tr>`;

const emailFooter = () => `
    <tr>
        <td style="background-color:${BRAND.dark}; padding:26px 30px; text-align:center; font-family:Arial,Helvetica,sans-serif;">
            <div style="color:#e2e8f0; font-size:15px; font-weight:bold; letter-spacing:0.5px; margin-bottom:6px;">Mizan's Care</div>
            <div style="color:#94a3b8; font-size:12px; line-height:1.7;">An English Language Training Centre<br>For any queries, simply reply to this email.</div>
            <div style="color:#64748b; font-size:11px; margin-top:12px;">© ${new Date().getFullYear()} Mizan's Care. All rights reserved.</div>
        </td>
    </tr>`;

const shell = (inner: string, title: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body style="margin:0; padding:0; background-color:#eef2f6; font-family:Arial,Helvetica,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#eef2f6; padding:32px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="width:600px; max-width:600px; background-color:#ffffff; border:1px solid ${BRAND.line}; border-radius:14px; overflow:hidden;">
                    ${inner}
                </table>
                <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="width:600px; max-width:600px;">
                    <tr><td style="padding:16px 20px; text-align:center; font-family:Arial,Helvetica,sans-serif; font-size:11px; color:#94a3b8;">
                        This is an automated message from Mizan's Care IELTS. Please do not share your credentials with anyone.
                    </td></tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

// ── Registration email ──
const getStudentRegistrationTemplate = (data: {
    studentName: string;
    examId: string;
    email: string;
    password: string;
    loginUrl: string;
    logoUrl: string;
}) => {
    const inner = `
    ${emailHeader(data.logoUrl, "IELTS Mock Test")}

    <tr>
        <td style="padding:34px 36px 6px; font-family:Arial,Helvetica,sans-serif;">
            <h1 style="margin:0 0 12px; font-size:22px; color:${BRAND.dark}; font-weight:bold;">Welcome, ${data.studentName}</h1>
            <p style="margin:0; font-size:15px; line-height:1.7; color:${BRAND.text};">
                Your IELTS mock exam registration is confirmed. Please use the credentials below to log in and begin your test.
            </p>
        </td>
    </tr>

    <tr>
        <td style="padding:22px 36px 4px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:${BRAND.soft}; border:1px solid ${BRAND.line}; border-radius:10px;">
                <tr>
                    <td style="padding:20px 22px; font-family:Arial,Helvetica,sans-serif;">
                        <div style="font-size:11px; letter-spacing:1.5px; text-transform:uppercase; color:${BRAND.primary}; font-weight:bold; margin-bottom:14px;">Your Login Details</div>
                        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                                <td style="padding:7px 0; font-size:13px; color:${BRAND.muted}; width:110px; vertical-align:top;">Exam ID</td>
                                <td style="padding:7px 0; font-size:16px; color:${BRAND.dark}; font-weight:bold; font-family:'Courier New',monospace; letter-spacing:0.5px;">${data.examId}</td>
                            </tr>
                            <tr>
                                <td style="padding:7px 0; font-size:13px; color:${BRAND.muted}; vertical-align:top;">Email</td>
                                <td style="padding:7px 0; font-size:14px; color:${BRAND.dark}; word-break:break-all;">${data.email}</td>
                            </tr>
                            <tr>
                                <td style="padding:7px 0; font-size:13px; color:${BRAND.muted}; vertical-align:top;">Password</td>
                                <td style="padding:7px 0; font-size:16px; color:${BRAND.dark}; font-weight:bold; font-family:'Courier New',monospace; letter-spacing:0.5px;">${data.password}</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    <tr>
        <td style="padding:28px 36px 8px; text-align:center;">
            <a href="${data.loginUrl}" style="display:inline-block; background-color:${BRAND.primary}; color:#ffffff; text-decoration:none; padding:14px 42px; border-radius:8px; font-size:15px; font-weight:bold; font-family:Arial,Helvetica,sans-serif;">Log In to Your Exam</a>
        </td>
    </tr>

    <tr>
        <td style="padding:18px 36px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#fffbeb; border-left:4px solid #f59e0b;">
                <tr>
                    <td style="padding:14px 16px;">
                        <p style="margin:0; font-size:13px; line-height:1.65; color:#92400e; font-family:Arial,Helvetica,sans-serif;">
                            <strong>Important:</strong> Keep your password private. During the exam, stay in full-screen mode — leaving it may lock or disqualify your test.
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    ${emailFooter()}`;

    return shell(inner, "IELTS Mock Exam Registration");
};

// ── Result published email ──
const getResultPublishedTemplate = (data: {
    studentName: string;
    examId: string;
    listeningBand: number;
    readingBand: number;
    writingBand: number;
    speakingBand: number;
    overallBand: number;
    resultUrl: string;
    logoUrl: string;
}) => {
    const fmt = (b: number) => (b && Number(b) > 0 ? Number(b).toFixed(1) : "—");
    const bandColor = (band: number) => {
        if (band >= 7) return "#15803d";   // green
        if (band >= 5.5) return BRAND.primary; // cyan
        if (band >= 4) return "#b45309";   // amber
        return "#b91c1c";                  // red
    };

    const moduleCard = (label: string, value: number, bg: string, labelColor: string, valueColor: string) => `
        <td width="50%" style="padding:5px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:${bg}; border-radius:10px;">
                <tr>
                    <td style="padding:18px 10px; text-align:center; font-family:Arial,Helvetica,sans-serif;">
                        <div style="font-size:11px; font-weight:bold; letter-spacing:1.5px; color:${labelColor};">${label}</div>
                        <div style="font-size:30px; font-weight:bold; color:${valueColor}; margin-top:5px; line-height:1;">${fmt(value)}</div>
                    </td>
                </tr>
            </table>
        </td>`;

    const inner = `
    ${emailHeader(data.logoUrl, "Official Result Report")}

    <tr>
        <td style="padding:34px 36px 4px; text-align:center; font-family:Arial,Helvetica,sans-serif;">
            <h1 style="margin:0 0 8px; font-size:22px; color:${BRAND.dark}; font-weight:bold;">Your Result is Published</h1>
            <p style="margin:0; font-size:14px; color:${BRAND.muted};">${data.studentName} &nbsp;·&nbsp; Exam ID: <strong style="color:${BRAND.dark};">${data.examId}</strong></p>
        </td>
    </tr>

    <tr>
        <td style="padding:24px 36px 6px; text-align:center;">
            <table cellpadding="0" cellspacing="0" role="presentation" align="center" style="background-color:${bandColor(data.overallBand)}; border-radius:14px;">
                <tr>
                    <td style="padding:22px 54px; text-align:center; font-family:Arial,Helvetica,sans-serif;">
                        <div style="color:rgba(255,255,255,0.85); font-size:11px; letter-spacing:2px; text-transform:uppercase; margin-bottom:4px;">Overall Band Score</div>
                        <div style="color:#ffffff; font-size:54px; font-weight:bold; line-height:1;">${fmt(data.overallBand)}</div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    <tr>
        <td style="padding:22px 31px 6px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                    ${moduleCard("LISTENING", data.listeningBand, "#f0f9ff", "#0369a1", "#0c4a6e")}
                    ${moduleCard("READING", data.readingBand, "#ecfdf5", "#047857", "#064e3b")}
                </tr>
                <tr>
                    ${moduleCard("WRITING", data.writingBand, "#eef2ff", "#4338ca", "#312e81")}
                    ${moduleCard("SPEAKING", data.speakingBand, "#fff7ed", "#c2410c", "#7c2d12")}
                </tr>
            </table>
        </td>
    </tr>

    <tr>
        <td style="padding:26px 36px 8px; text-align:center;">
            <a href="${data.resultUrl}" style="display:inline-block; background-color:${BRAND.primary}; color:#ffffff; text-decoration:none; padding:14px 42px; border-radius:8px; font-size:15px; font-weight:bold; font-family:Arial,Helvetica,sans-serif;">View Detailed Result</a>
        </td>
    </tr>

    <tr>
        <td style="padding:14px 36px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:${BRAND.soft}; border:1px solid ${BRAND.line}; border-radius:10px;">
                <tr>
                    <td style="padding:18px 20px; text-align:center;">
                        <p style="margin:0; font-size:14px; line-height:1.7; color:${BRAND.text}; font-family:Arial,Helvetica,sans-serif;">
                            Thank you for choosing Mizan's Care for your IELTS preparation.<br>We wish you the very best in your IELTS journey.
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    ${emailFooter()}`;

    return shell(inner, "IELTS Mock Result Published");
};

// Send student registration email
export const sendStudentRegistrationEmail = async (data: {
    studentName: string;
    examId: string;
    email: string;
    password: string;
}) => {
    try {
        const transporter = createTransporter();
        const baseUrl = (process.env.FRONTEND_URL || "https://mizansieltsmock.ftitbd.com").replace(/\/+$/, "");

        const mailOptions = {
            from: `"Mizan's Care IELTS" <${process.env.EMAIL_USER}>`,
            to: data.email,
            subject: `Your IELTS Mock Exam Access — ${data.examId}`,
            html: getStudentRegistrationTemplate({
                studentName: data.studentName,
                examId: data.examId,
                email: data.email,
                password: data.password,
                loginUrl: `${baseUrl}/login`,
                logoUrl: `cid:${LOGO_CID}`,
            }),
            attachments: [logoAttachment],
        };

        const result = await transporter.sendMail(mailOptions);
        console.log("Registration email sent successfully:", result.messageId);
        return { success: true, messageId: result.messageId };
    } catch (error) {
        console.error("Failed to send registration email:", error);
        return { success: false, error };
    }
};

// Send result published email
export const sendResultPublishedEmail = async (data: {
    studentName: string;
    examId: string;
    email: string;
    listeningBand: number;
    readingBand: number;
    writingBand: number;
    speakingBand: number;
    overallBand: number;
}) => {
    try {
        const transporter = createTransporter();
        const baseUrl = (process.env.FRONTEND_URL || "https://mizansieltsmock.ftitbd.com").replace(/\/+$/, "");

        const mailOptions = {
            from: `"Mizan's Care IELTS" <${process.env.EMAIL_USER}>`,
            to: data.email,
            subject: `Your IELTS Mock Result — Overall Band ${data.overallBand}`,
            html: getResultPublishedTemplate({
                studentName: data.studentName,
                examId: data.examId,
                listeningBand: data.listeningBand,
                readingBand: data.readingBand,
                writingBand: data.writingBand,
                speakingBand: data.speakingBand,
                overallBand: data.overallBand,
                resultUrl: `${baseUrl}/result/${data.examId}`,
                logoUrl: `cid:${LOGO_CID}`,
            }),
            attachments: [logoAttachment],
        };

        const result = await transporter.sendMail(mailOptions);
        console.log("Result email sent successfully:", result.messageId);
        return { success: true, messageId: result.messageId };
    } catch (error) {
        console.error("Failed to send result email:", error);
        return { success: false, error };
    }
};

export const EmailService = {
    sendStudentRegistrationEmail,
    sendResultPublishedEmail,
};

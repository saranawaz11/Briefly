'use server'

import { getDbConnection } from "@/app/db";
import { generatePdfSummaryFromGeminiAi } from "@/lib/gemini";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { formatFileNameAsTitle } from "@/utils/format-utlils";
import { auth } from "@clerk/nextjs/server";

interface PdfSummaryType {
    fileUrl: string,
    summary: string,
    title: string,
    fileName: string
}

export async function generatePdfSummary(
    uploadResponse: Array<{
        serverData: {
            uploadedBy: string,
            file: {
                ufsUrl: string,
                name: string,
            }
        }
    }>
) {
    if (!uploadResponse || uploadResponse.length === 0) {
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        };
    }

    const {
        serverData: {
            file: { ufsUrl: pdfUrl, name: fileName },
        }
    } = uploadResponse[0];

    if (!pdfUrl) {
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        };
    }

    try {
        const pdfText = await fetchAndExtractPdfText(pdfUrl);
        console.log('pdftext', { pdfText });
        let summary;
        // call gemini
        try {
            summary = await generatePdfSummaryFromGeminiAi(pdfText);
            console.log('summary is:- ', { summary });

        } catch (geminiError) {
            console.log('Gemini Api failed ', geminiError);
            throw new Error('Failed to generate summary with Gemini')
        }

        if (!summary) {
            return {
                success: false,
                message: 'Failed to generate summary',
                data: null,
            }
        }

        const formattedFileName = formatFileNameAsTitle(fileName);

        return {
            success: true,
            message: "PDF generated successfully",
            data: {
                title: formattedFileName,
                summary,
            },
        };

    } catch (err) {
        return {
            success: false,
            message: err instanceof Error ? err.message : "Something went wrong",
            data: null
        };
    }
}

async function savePdfSummary({ userId, fileUrl, summary, title, fileName }: { userId: string, fileUrl: string, summary: string, title: string, fileName: string }) {
    // sql inserting pdf summary
    try {
        const sql = await getDbConnection()
        await sql`
            INSERT INTO pdf_summaries (
                user_id,
                original_file_url,
                summary_text,
                title,
                file_name
            ) VALUES (
                ${userId},
                ${fileUrl},
                ${summary},
                ${title},
                ${fileName}
            );
        `
    } catch (error) {
        console.error('Error saving the PDF summary', error)
        throw error
    }
}

export async function storePdfSummaryAction({
    fileUrl,
    summary,
    title,
    fileName
}: PdfSummaryType) {
    // user is logged in and has a userId

    // savepdf summary
    // savepdf summary()
    try {
        const { userId } = await auth()
        if (!userId) {
            return {
                success: false,
                message: 'User not found'
            }
        }
        await savePdfSummary({
            userId,
            fileUrl,
            summary,
            title,
            fileName
        });
        return {
            success: true,
            message: 'PDF summary saved successfully'
        }
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error?.message : 'Failed to save PDF summary',
            data: null
        }
    }
}
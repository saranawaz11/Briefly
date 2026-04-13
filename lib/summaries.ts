import { getDbConnection } from "@/app/db";

export type Summary = {
    id: string;
    title: string;
    createdAt: string;
    content: string;
    status: string;
    fileUrl: string;
};

export async function getSummaries(userId: string): Promise<Summary[]> {
    const sql = await getDbConnection();

    const rows = await sql`
    SELECT 
        id,
        title,
        summary_text AS content,
        created_at AS "createdAt",
        status,
        original_file_url AS fileUrl
    FROM pdf_summaries
    WHERE user_id = ${userId}
    ORDER BY created_at DESC
    `;

    return rows as Summary[];
}
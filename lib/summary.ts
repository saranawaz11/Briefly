import { getDbConnection } from "@/app/db";

export async function getSummaryById(id:string) {
    try {
        const sql = await getDbConnection()
        const [ summary ] = await sql `SELECT 
            id,
            user_id,
            summary_text,
            created_at,
            original_file_url,
            file_name,
            title,
            LENGTH(summary_text) - LENGTH(REPLACE(summary_text, ' ', ''))+1 as word_count
        FROM pdf_summaries where id=${id}`
        console.log('Summary from summary server is:- ', summary);

        return summary;
    } catch (error) {
        console.log('Error fetchin summary', error)
        return null;
    }
}
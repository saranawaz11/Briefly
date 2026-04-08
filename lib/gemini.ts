import { GoogleGenAI } from "@google/genai";
export async function generatePdfSummaryFromGeminiAi(
    pdfText: string
): Promise<string | null> {
    const apiKey =
        process.env.Gemini_API_Key ?? process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return null;
    }


    const genAI = new GoogleGenAI({ apiKey: apiKey });

    try {
        const response = await genAI.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: `Transform this document into an engaging, easy-to-read summary with contexually relevant emojis and proper markdown formatting:\n\n${pdfText}`,
        });

        return response.text ?? null;

    } catch (error) {
        console.log('Gemini API Error:- ', error);
        throw error;
    }

    // const ai = new GoogleGenAI({ apiKey });
    // const response = await ai.models.generateContent({
    //     model: "gemini-2.5-flash",
    //     contents: `Summarize the following document text clearly and concisely:\n\n${pdfText}`,
    // });

}

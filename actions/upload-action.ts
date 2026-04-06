'use server'

import { fetchAndExtractPdfText } from "@/lib/langchain";

export async function generatePdfSummary(
    uplaodResponse: [
        {
            serverData: {
                userId: string,
                file: {
                    url: string,
                    name: string,
                }
            }
        }
    ]
) {
    if(!uplaodResponse) {
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        };
    }

    const {
        serverData: {
            userId,
            file: {url: pdfUrl, name: fileName},
        }
    } = uplaodResponse[0];

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

        return {
            success: true,
            message: "PDF processed successfully",
            data: pdfText,
        };

    } catch (err) {
        return {
            success: false,
            message: err instanceof Error ? err.message : "Something went wrong",
            data: null
        };
    }
}


// export async function generatePdfSummar(uploadResponse: any) {
//     if (!uploadResponse) {
//         return {
//             success: false,
//             message: 'File upload failed',
//             data: null,
//         };
//     }

//     const {
//         serverData: {
//             userId,
//             file: pdfUrl,
//         }
//     } = uploadResponse[0];

//     if (!pdfUrl) {
//         return {
//             success: false,
//             message: 'File upload failed',
//             data: null,
//         };
//     }

//     try {
//         const pdfText = await fetchAndExtractPdfText(pdfUrl);

//         console.log('pdftext', { pdfText });

//         return {
//             success: true,
//             message: "PDF processed successfully",
//             data: pdfText,
//         };

//     } catch (err) {
//         return {
//             success: false,
//             message: err instanceof Error ? err.message : "Something went wrong",
//             data: null
//         };
//     }
// }
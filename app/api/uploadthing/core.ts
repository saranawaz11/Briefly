import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
    pdfUploader: f({
        pdf: {
            maxFileSize: "32MB",
            maxFileCount: 1,
        },
    })
        // Set permissions and file types for this FileRoute
        .middleware(async () => {
            const user = await currentUser();
            // console.log("User:", user);
            if (!user) throw new UploadThingError("Unauthorized");
            return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Upload complete for userId:", metadata.userId);
            // serverData must be JSON-serializable (no full UploadedFileData object)
            return {
                uploadedBy: metadata.userId,
                file: {
                    ufsUrl: file.ufsUrl,
                    name: file.name,
                },
            };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

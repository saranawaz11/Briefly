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
        .middleware(async ({ req }) => {
            const user = await currentUser();
            // console.log("User:", user);
            if (!user) throw new UploadThingError("Unauthorized");
            return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Upload complete for userId:", metadata.userId);
            // console.log("file url", file.ufsUrl);
            return { uploadedBy: metadata.userId, file };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

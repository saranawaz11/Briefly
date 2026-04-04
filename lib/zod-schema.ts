import z from "zod";

const fileSchema = z.object({
    file:z.instanceof(File, {message: 'Invalid file'})
    .refine(
        (file) => file.size <= 20 * 1024 * 1024,
        'File size must be less than 20MB'
    )
    .refine(
        (file) => file.type.startsWith('application/pdf'),
        'File must be a PDF'
    )
});

export default fileSchema;
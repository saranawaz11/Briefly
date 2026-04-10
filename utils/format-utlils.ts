export function formatFileNameAsTitle(fileName: string){
    const fileNameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

    return fileNameWithoutExtension
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (char) => char.toUpperCase());
}
export function formatFileNameAsTitle(fileName: string) {
    const fileNameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

    return fileNameWithoutExtension
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\b\w/g, (char) => char.toUpperCase());
}



export function formatFileName(url: string): string {
    const fileName = url.split('/').pop() || '';
    return fileName
        .replace(/\.[^/.]+$/, '')
        .replace(/[-_]/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
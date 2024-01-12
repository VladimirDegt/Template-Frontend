export function validateExtentionFile(files: File[] | FileList, extentions: string[]): boolean {
    if(files.length > 1) {
        return false
    }

    const extensionFile = files[0]?.name.split('.')[1];

    return extentions.includes(extensionFile);
}
export function validateSizeFile(size: number): boolean {
    const maxSize = 5 * 1024 * 1024;

    if(!size) {
        return false
    }

    return size <= maxSize
}
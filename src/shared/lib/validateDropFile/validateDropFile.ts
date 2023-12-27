const extensions = ['xls', 'xlsx', 'xlsm', 'xlsb', 'csv'];

export function validateDropFile(files: File[] | FileList): boolean {
    if(files.length > 1) {
        return false
    }

    const extensionFile = files[0].name.split('.')[1]
    return extensions.includes(extensionFile);
}
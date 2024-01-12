import {validateExtentionFile} from "./validateExtentionFile";

describe('validateExtentionFile', () => {
    test('returns false for empty file list', () => {
        const files: File[] | FileList = [];
        const extension = ['txt'];
        expect(validateExtentionFile(files, extension)).toBe(false);
    });

    test('returns false for a file without extension', () => {
        const files = [new File([''], 'fileWithoutExtension')];
        const extension = ['txt'];
        expect(validateExtentionFile(files, extension)).toBe(false);
    });

    test('returns false for multiple files', () => {
        const files = [new File([''], 'file1.txt'), new File([''], 'file2.txt')];
        const extension = ['txt'];
        expect(validateExtentionFile(files, extension)).toBe(false);
    });

    test('returns true for valid file extension', () => {
        const files = [new File([''], 'example.jpg')];
        const extension = ['jpg'];
        expect(validateExtentionFile(files, extension)).toBe(true);
    });

    test('returns false for invalid file extension', () => {
        const files = [new File([''], 'example.png')];
        const extension = ['txt'];
        expect(validateExtentionFile(files, extension)).toBe(false);
    });

    it('returns true for multiple valid file extensions', () => {
        const files = [new File([''], 'example.jpg')];
        const extension = ['png', 'jpg'];
        expect(validateExtentionFile(files, extension)).toBe(true);
    });

    it('returns false for multiple invalid file extensions', () => {
        const files = [new File([''], 'example.txt')];
        const extension = ['png', 'jpg'];
        expect(validateExtentionFile(files, extension)).toBe(false);
    });

})
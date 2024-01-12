import {validateSizeFile} from "./validateSizeFile";

describe('validateSizeFile function', () => {
    test('returns true for valid file size', () => {
        const validSize = 4 * 1024 * 1024; // Меньше максимального размера
        expect(validateSizeFile(validSize)).toBe(true);
    });

    test('returns true for file size equal to max size', () => {
        const maxSize = 5 * 1024 * 1024;
        expect(validateSizeFile(maxSize)).toBe(true);
    });

    test('returns false for invalid file size (greater than max size)', () => {
        const invalidSize = 6 * 1024 * 1024; // Больше максимального размера
        expect(validateSizeFile(invalidSize)).toBe(false);
    });


    test('returns false for file size equal to 0', () => {
        const zeroSize = 0;
        expect(validateSizeFile(zeroSize)).toBe(false);
    });
});

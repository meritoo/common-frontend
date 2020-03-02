import { lowercaseFirstLetter, uppercaseFirstLetter } from '../string';

describe('uppercaseFirstLetter() function', () => {
    it.each`
        value
        ${[]}
        ${{}}
        ${null}
        ${undefined}
        ${123}
        ${123.45}
    `('returns `null` for non-string value', ({ value }) => {
        const result = uppercaseFirstLetter(value);
        expect(result).toBeNull();
    });

    it.each`
        value              | expected
        ${''}              | ${''}
        ${' lorem ipsum'}  | ${' lorem ipsum'}
        ${'lorem ipsum '}  | ${'Lorem ipsum '}
        ${' lorem ipsum '} | ${' lorem ipsum '}
        ${'lOrem ipsum'}   | ${'LOrem ipsum'}
        ${'lorem ipsum'}   | ${'Lorem ipsum'}
        ${'Lorem ipsum'}   | ${'Lorem ipsum'}
    `('returns expected value', ({ value, expected }) => {
        const result = uppercaseFirstLetter(value);
        expect(result).toBe(expected);
    });
});

describe('lowercaseFirstLetter() function', () => {
    it.each`
        value
        ${[]}
        ${{}}
        ${null}
        ${undefined}
    `('returns `null` for non-string value', ({ value }) => {
        const result = lowercaseFirstLetter(value);
        expect(result).toBeNull();
    });

    it.each`
        value              | expected
        ${''}              | ${''}
        ${' Lorem ipsum'}  | ${' Lorem ipsum'}
        ${'Lorem ipsum '}  | ${'lorem ipsum '}
        ${' Lorem ipsum '} | ${' Lorem ipsum '}
        ${'lOrem ipsum'}   | ${'lOrem ipsum'}
        ${'lorem ipsum'}   | ${'lorem ipsum'}
        ${'Lorem ipsum'}   | ${'lorem ipsum'}
    `('returns expected value', ({ value, expected }) => {
        const result = lowercaseFirstLetter(value);
        expect(result).toBe(expected);
    });
});

import { getFileNameFromPath, getReplacementIfEmpty, isNullOrUndefined } from '../miscellaneous';

describe('getReplacementIfEmpty() function', () => {
    it.each`
        value
        ${[]}
        ${{}}
        ${null}
        ${undefined}
        ${''}
    `('uses the default replacement for empty value', ({ value }) => {
        const result = getReplacementIfEmpty(value);
        expect(result).toBe('-');
    });

    it.each`
        value        | replacement
        ${[]}        | ${'-'}
        ${{}}        | ${'_'}
        ${null}      | ${'...'}
        ${undefined} | ${'unknown value'}
        ${''}        | ${''}
    `('uses given replacement for empty value', ({ value, replacement }) => {
        const result = getReplacementIfEmpty(value, replacement);
        expect(result).toBe(replacement);
    });

    it.each`
        value
        ${[1, 2, 3]}
        ${{ firstName: 'Johny', lastName: 'English' }}
        ${'123'}
        ${123}
    `('returns the non-empty value', ({ value }) => {
        const result = getReplacementIfEmpty(value);
        expect(result).toBe(value);
    });
});

describe('isNullOrUndefined() function', () => {
    it.each`
        value
        ${[]}
        ${{}}
        ${''}
        ${'123'}
        ${123}
    `('returns `false` for non-null & non-undefined value', ({ value }) => {
        const result = isNullOrUndefined(value);
        expect(result).toBe(false);
    });

    it.each`
        value
        ${null}
        ${undefined}
    `('returns `true` for null or undefined value', ({ value }) => {
        const result = isNullOrUndefined(value);
        expect(result).toBe(true);
    });
});

describe('getFileNameFromPath() function', () => {
    it.each`
        path                                               | fileName
        ${null}                                            | ${null}
        ${undefined}                                       | ${null}
        ${''}                                              | ${null}
        ${'lorem/ipsum-dolor/sit-amet'}                    | ${null}
        ${'lorem/ipsum-dolor/sit.amet.JPG'}                | ${'sit.amet.JPG'}
        ${'lorem/ipsum-dolor/this-1_2 3 & my! 4+file.jpg'} | ${'this-1_2 3 & my! 4+file.jpg'}
        ${'lorem/ipsum.dolor/sit.amet.JPG'}                | ${'sit.amet.JPG'}
        ${'lorem/ipsum/../dolor/sit.amet.JPG'}             | ${'sit.amet.JPG'}
    `('return name of file from given path', ({ path, fileName }) => {
        const result = getFileNameFromPath(path);
        expect(result).toBe(fileName);
    });
});

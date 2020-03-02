import { isEmptyObject, isNullOrEmptyObject, isObject } from '../objects';

describe('isObject() function', () => {
    it.each`
        object
        ${[]}
        ${1}
        ${'1'}
        ${null}
        ${undefined}
    `('returns `false` for non-object', ({ object }) => {
        const result = isObject(object);
        expect(result).toBe(false);
    });

    it.each`
        object
        ${{}}
        ${{ firstName: 'Johny', lastName: 'English' }}
    `('returns `true` for an object', () => {
        const result = isObject({});
        expect(result).toBe(true);
    });
});

describe('isEmptyObject() function', () => {
    it.each`
        object
        ${[]}
        ${1}
        ${'1'}
        ${null}
        ${undefined}
    `('returns `false` for non-object value', ({ object }) => {
        const result = isEmptyObject(object);
        expect(result).toBe(false);
    });

    it('returns `true` for an empty object', () => {
        const result = isEmptyObject({});
        expect(result).toBe(true);
    });

    it('returns `false` for non-empty object', () => {
        const result = isEmptyObject({ firstName: 'Johny', lastName: 'English' });
        expect(result).toBe(false);
    });
});

describe('isNullOrEmptyObject() function', () => {
    it.each`
        object
        ${[]}
        ${1}
        ${'1'}
    `('returns `false` for non-object value ', ({ object }) => {
        const result = isNullOrEmptyObject(object);
        expect(result).toBe(false);
    });

    it('returns `false` for non-empty object', () => {
        const result = isNullOrEmptyObject({ a: 1, b: 2, c: 3 });
        expect(result).toBe(false);
    });

    it('returns `true` for an empty object', () => {
        const result = isNullOrEmptyObject({});
        expect(result).toBe(true);
    });

    it('returns `true` for `undefined`', () => {
        const result = isNullOrEmptyObject(undefined);
        expect(result).toBe(true);
    });

    it('returns `true` for `null`', () => {
        const result = isNullOrEmptyObject(null);
        expect(result).toBe(true);
    });
});

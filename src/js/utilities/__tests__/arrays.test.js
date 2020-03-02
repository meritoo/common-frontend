import {
    getNextIndex,
    getPreviousIndex,
    getRandomItem,
    isEmptyArray,
    isExistingIndex,
    isNullOrEmptyArray,
    joinNotEmpty,
} from '../arrays';

describe('getRandomItem() function', () => {
    it.each`
        array
        ${[]}
        ${{}}
    `('returns unknown random item for empty array or empty object', ({ array }) => {
        const randomItem = getRandomItem(array);
        expect(randomItem).toBeUndefined();
    });

    it.each`
        array
        ${[1, 2, 3]}
        ${['a', 'b', 'c']}
    `('returns expected value from array', ({ array }) => {
        const randomItem = getRandomItem(array);

        expect(randomItem).not.toBeUndefined();
        expect(array.includes(randomItem)).toBe(true);
    });

    it.each`
        object
        ${{ test1: 1, test2: 2 }}
        ${{ first: 'powerful', second: 'amazing', third: 'wow' }}
    `('returns expected value from object', ({ object }) => {
        const randomItem = getRandomItem(object);

        expect(randomItem).not.toBeUndefined();
        expect(Object.values(object).includes(randomItem)).toBe(true);
    });
});

describe('isExistingIndex() function', () => {
    it.each`
        array        | index
        ${[]}        | ${0}
        ${{}}        | ${-1}
        ${[1, 2, 3]} | ${null}
        ${[1, 2, 3]} | ${undefined}
    `('returns `false` for empty array/object or unknown index', ({ array, index }) => {
        const result = isExistingIndex(array, index);
        expect(result).toBe(false);
    });

    it.each`
        array                                                     | index       | expected
        ${[1, 2, 3]}                                              | ${-1}       | ${false}
        ${[1, 2, 3]}                                              | ${1}        | ${true}
        ${{ first: 'powerful', second: 'amazing', third: 'wow' }} | ${'aa'}     | ${false}
        ${{ first: 'powerful', second: 'amazing', third: 'wow' }} | ${'second'} | ${true}
    `('returns expected value', ({ array, index, expected }) => {
        const result = isExistingIndex(array, index);
        expect(result).toBe(expected);
    });
});

describe('getPreviousIndex() function', () => {
    it.each`
        array | currentIndex
        ${[]} | ${1}
        ${{}} | ${2}
    `('previous index of empty array is undefined', ({ array, currentIndex }) => {
        const previousIndex = getPreviousIndex(array, currentIndex);
        expect(previousIndex).toBeUndefined();
    });

    it.each`
        array              | currentIndex | expectedIndex
        ${[1, 2, 3, 4]}    | ${0}         | ${3}
        ${[1, 2, 3, 4]}    | ${1}         | ${0}
        ${[1, 2, 3, 4]}    | ${2}         | ${1}
        ${[1, 2, 3, 4]}    | ${10}        | ${3}
        ${['a', 'b', 'c']} | ${0}         | ${2}
        ${['a', 'b', 'c']} | ${1}         | ${0}
        ${['a', 'b', 'c']} | ${2}         | ${1}
        ${['a', 'b', 'c']} | ${10}        | ${2}
    `('previous index of 0-based array', ({ array, currentIndex, expectedIndex }) => {
        const previousIndex = getPreviousIndex(array, currentIndex);
        expect(previousIndex).toBe(expectedIndex);
    });
});

describe('getNextIndex() function', () => {
    it.each`
        array | currentIndex
        ${[]} | ${1}
        ${{}} | ${2}
    `('next index of empty array is undefined', ({ array, currentIndex }) => {
        const previousIndex = getNextIndex(array, currentIndex);
        expect(previousIndex).toBeUndefined();
    });

    it.each`
        array              | currentIndex | expectedIndex
        ${[1, 2, 3, 4]}    | ${0}         | ${1}
        ${[1, 2, 3, 4]}    | ${1}         | ${2}
        ${[1, 2, 3, 4]}    | ${2}         | ${3}
        ${[1, 2, 3, 4]}    | ${3}         | ${0}
        ${[1, 2, 3, 4]}    | ${10}        | ${1}
        ${['a', 'b', 'c']} | ${0}         | ${1}
        ${['a', 'b', 'c']} | ${1}         | ${2}
        ${['a', 'b', 'c']} | ${2}         | ${0}
        ${['a', 'b', 'c']} | ${10}        | ${1}
    `('next index of 0-based array', ({ array, currentIndex, expectedIndex }) => {
        const previousIndex = getNextIndex(array, currentIndex);
        expect(previousIndex).toBe(expectedIndex);
    });
});

describe('isEmptyArray() function', () => {
    it.each`
        array
        ${{}}
        ${1}
        ${'1'}
        ${null}
        ${undefined}
    `('returns `false` for non-array value', ({ array }) => {
        const result = isEmptyArray(array);
        expect(result).toBe(false);
    });

    it('returns `false` for non-empty array', () => {
        const result = isEmptyArray([1, 2, 3]);
        expect(result).toBe(false);
    });

    it('returns `true` for an empty array', () => {
        const result = isEmptyArray([]);
        expect(result).toBe(true);
    });
});

describe('isNullOrEmptyArray() function', () => {
    it.each`
        array
        ${{}}
        ${1}
        ${'1'}
    `('returns `false` for non-array value ', ({ array }) => {
        const result = isNullOrEmptyArray(array);
        expect(result).toBe(false);
    });

    it('returns `false` for non-empty array', () => {
        const result = isNullOrEmptyArray([1, 2, 3]);
        expect(result).toBe(false);
    });

    it('returns `true` for an empty array', () => {
        const result = isNullOrEmptyArray([]);
        expect(result).toBe(true);
    });

    it('returns `true` for `undefined`', () => {
        const result = isNullOrEmptyArray(undefined);
        expect(result).toBe(true);
    });

    it('returns `true` for `null`', () => {
        const result = isNullOrEmptyArray(null);
        expect(result).toBe(true);
    });
});

describe('joinNotEmpty() function', () => {
    it.each`
        values
        ${[]}
        ${{}}
        ${''}
        ${'1'}
        ${1}
        ${null}
        ${undefined}
    `('returns an empty string for empty array or non-array value', ({ values }) => {
        const result = joinNotEmpty(values);
        expect(result).toBe('');
    });

    it.each`
        values                        | expected
        ${[1, 2, 3]}                  | ${'123'}
        ${[1, 2, null, 3]}            | ${'123'}
        ${['1', '2', '3']}            | ${'123'}
        ${['1', '2', '3', undefined]} | ${'123'}
        ${['a', '', 'b', 'c', '']}    | ${'abc'}
    `('returns expected string (using default separator)', ({ values, expected }) => {
        const result = joinNotEmpty(values);
        expect(result).toBe(expected);
    });

    it.each`
        values                        | separator | expected
        ${[1, 2, 3]}                  | ${''}     | ${'123'}
        ${[1, 2, null, 3]}            | ${'-'}    | ${'1-2-3'}
        ${['1', '2', '3']}            | ${', '}   | ${'1, 2, 3'}
        ${['1', '2', '3', undefined]} | ${' / '}  | ${'1 / 2 / 3'}
        ${['a', '', 'b', 'c', '']}    | ${'.'}    | ${'a.b.c'}
    `('returns expected string (using custom separator)', ({ values, separator, expected }) => {
        const result = joinNotEmpty(values, separator);
        expect(result).toBe(expected);
    });
});

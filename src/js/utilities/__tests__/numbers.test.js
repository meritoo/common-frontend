import { getNumberBetween, getRandomNumber, isNumber } from '../numbers';

describe('isNumber() function', () => {
    it.each`
        value
        ${[]}
        ${{}}
        ${''}
        ${'123'}
        ${null}
        ${undefined}
    `('returns `false` for non-number value', ({ value }) => {
        const result = isNumber(value);
        expect(result).toBe(false);
    });

    it.each`
        value
        ${-1}
        ${0}
        ${1}
        ${1000}
    `('returns `true` for number', ({ value }) => {
        const result = isNumber(value);
        expect(result).toBe(true);
    });
});

describe('getRandomNumber() function', () => {
    it.each`
        maximum
        ${0}
        ${1}
        ${2}
        ${8}
        ${10}
        ${100}
    `('returns random number for non-negative maximum', ({ maximum }) => {
        const randomNumber = getRandomNumber(maximum);
        expect(randomNumber).toBeLessThanOrEqual(maximum);
    });

    it.each`
        maximum
        ${-100}
        ${-10}
        ${-2}
        ${-1}
    `('returns random number for negative maximum', ({ maximum }) => {
        const randomNumber = getRandomNumber(maximum);
        expect(randomNumber).toBeGreaterThanOrEqual(maximum);
    });
});

describe('getNumberBetween() function', () => {
    it.each`
        min     | max
        ${{}}   | ${1}
        ${1}    | ${{}}
        ${[]}   | ${1}
        ${1}    | ${[]}
    `('returns `null` if minimum or maximum values are not numbers', ({ min, max }) => {
        const result = getNumberBetween(min, max);
        expect(result).toBeNull();
    });

    it('returns `null` if minimum and maximum values are equal', () => {
        const result = getNumberBetween(1, 1);
        expect(result).toBeNull();
    });

    it('returns `null` if minimum is greater than maximum value', () => {
        const result = getNumberBetween(4, 1);
        expect(result).toBeNull();
    });

    it.each`
        min     | max
        ${0}    | ${1}
        ${0}    | ${2}
        ${0}    | ${10}
        ${3}    | ${8}
        ${5}    | ${6}
        ${8}    | ${9}
        ${9}    | ${15}
        ${-1}   | ${1}
    `('returns expected value', ({ min, max }) => {
        const result = getNumberBetween(min, max);

        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
        expect(result).not.toBeGreaterThan(max);
        expect(result).not.toBeLessThan(min);
    });
});

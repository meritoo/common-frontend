import { getRandomNumber } from './numbers';
import { isEmptyString } from './strings';
import { isEmptyObject } from './objects';
import { isNullOrUndefined } from './miscellaneous';

const getRandomItem = (array) => {
    if (isEmptyArray(array) || isEmptyObject(array)) {
        return undefined;
    }

    const keys = Object.keys(array);
    const keyIndex = getRandomNumber(keys.length);
    const randomKey = keys[keyIndex];

    return array[randomKey];
};

const isExistingIndex = (array, index) => {
    return !isNullOrUndefined(index) && array[index] !== undefined;
};

const getPreviousIndex = (array, currentIndex) => {
    return getNeighbouringIndex(array, currentIndex, true);
};

const getNextIndex = (array, currentIndex) => {
    return getNeighbouringIndex(array, currentIndex, false);
};

const isEmptyArray = (array) => {
    return Array.isArray(array) && array.length === 0;
};

const isNullOrEmptyArray = (array) => {
    return isNullOrUndefined(array) || isEmptyArray(array);
};

const joinNotEmpty = (values, separator = '') => {
    if (!Array.isArray(values) || isNullOrEmptyArray(values)) {
        return '';
    }

    const notEmptyValues = values.filter((value) => !isEmptyString(value));
    return notEmptyValues.join(separator);
};

const getNeighbouringIndex = (array, currentIndex, previous) => {
    // It's not an array or it's an empty array?
    if (!Array.isArray(array) || isEmptyArray(array)) {
        return undefined;
    }

    // The current index is invalid?
    // Let's reset the current index to 1st element
    if (!isExistingIndex(array, currentIndex)) {
        currentIndex = 0;
    }

    const maximum = array.length - 1;

    if (previous) {
        const result = currentIndex - 1;
        return result < 0 ? maximum : result;
    }

    const result = currentIndex + 1;
    return result > maximum ? 0 : result;
};

export {
    getRandomItem,
    isExistingIndex,
    getPreviousIndex,
    getNextIndex,
    isEmptyArray,
    isNullOrEmptyArray,
    joinNotEmpty
};

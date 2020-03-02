import { isNullOrEmptyArray } from './arrays';
import { isEmptyObject } from './objects';
import { isEmptyString } from './string';

const DEFAULT_EMPTY_VALUE_REPLACEMENT = '-';

const isNullOrUndefined = (value) => {
    return value === null || value === undefined;
};

const getReplacementIfEmpty = (value, replacement = DEFAULT_EMPTY_VALUE_REPLACEMENT) => {
    if (isEmptyString(value) || isNullOrEmptyArray(value) || isEmptyObject(value)) {
        return replacement;
    }

    return value;
};

const getFileNameFromPath = (path) => {
    const pattern = /[\w.\- +=!@$&()?]+\.\w+$/;
    const result = pattern.exec(path);

    if (isNullOrEmptyArray(result)) {
        return null;
    }

    return result[0];
};

export {
    DEFAULT_EMPTY_VALUE_REPLACEMENT,
    isNullOrUndefined,
    getReplacementIfEmpty,
    getFileNameFromPath
};

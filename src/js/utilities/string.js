import { isNullOrUndefined } from './miscellaneous';

const isEmptyString = (value) => {
    return isNullOrUndefined(value) || value === '';
};

const uppercaseFirstLetter = (value) => {
    if (typeof value === 'string') {
        if (value.length === 0) {
            return '';
        }

        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    return null;
};

const lowercaseFirstLetter = (value) => {
    if (typeof value === 'string') {
        if (value.length === 0) {
            return '';
        }

        return value.charAt(0).toLowerCase() + value.slice(1);
    }

    return null;
};

export { isEmptyString, uppercaseFirstLetter, lowercaseFirstLetter };

import { isNullOrUndefined } from './miscellaneous';

const isObject = (object) => {
    return typeof object === 'object' && !isNullOrUndefined(object) && !Array.isArray(object);
};

const isEmptyObject = (object) => {
    return isObject(object) && Object.keys(object).length === 0;
};

const isNullOrEmptyObject = (object) => {
    return isNullOrUndefined(object) || isEmptyObject(object);
};

export { isObject, isEmptyObject, isNullOrEmptyObject };

const isNumber = (value) => {
    return value === Number(value);
};

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};

const getNumberBetween = (min, max) => {
    if (!isNumber(min) || !isNumber(max) || min >= max) {
        return null;
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
};

export { isNumber, getRandomNumber, getNumberBetween };

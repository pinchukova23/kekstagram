export const getRandomNumber = function(min = 1, max = 25) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};



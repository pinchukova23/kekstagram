export const getRandomNamber = function(min = 1, max = 25) {
    const randomNamber = Math.floor(Math.random() * (max - 1)) + min;
    return randomNamber
};



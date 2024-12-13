import {getRandomNumber} from './utils'
import { NAMES, MESSAGES, DESCRIPTIONS} from './const';

const getRandomName = (array, i) => {
    const index = getRandomNumber(0, NAMES.length - 1);
    const newName = NAMES[index];
    const isNameExist = Boolean(array.find((el) => el.name === newName))

    if(isNameExist) {
        return getRandomName(array)
    }

    return newName
};

const generateComments = function (count) {
    const array = []

    for(let i = 0; i < count; i++) {
        const newId = `${i + 1}` ;
        const newAvatar = `avatar/${getRandomNumber()}`;
        const newName = getRandomName(array);
        const newMessage = MESSAGES[getRandomNumber(0, NAMES.length - 1)];

        array.push({id: newId, avatar: newAvatar, name: newName, message: newMessage})
    }

    return array
};

export const generateMockData = function (count) {
    const array = []

    for(let i = 0; i < count; i++) {
        const newId = `${i}-${getRandomNumber()}`;
        const newUrl = `/assets/public/photos/${i + 1}.jpg`;
        const newDescription = DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)];
        const newLike = `${getRandomNumber(15, 200)}`;
        const newComments = generateComments(getRandomNumber(0, NAMES.length));

        array.push({id: newId, url: newUrl, description: newDescription, likes: newLike, comments: newComments})
    }

    return array
};



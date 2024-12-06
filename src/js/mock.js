import {getRandomNamber} from './utils'
import {DESCRIPTIONS} from './const'
import { NAMES} from './const';
import { MASSEGES } from './const';

const getRandomName = (array) => {
    const index = getRandomNamber(0, NAMES.length - 1);
    const newName = NAMES[index];
    const isNameExist = array.find( (el) => el.name === newName)
    console.log(isNameExist, array)
    // if(isNameExist) {
    //     return getRandomName(array)
    // }
    return newName
};

const generateComments = function (count) {
    const array = []

    for(let i = 0; i < count; i++) {
        const newId = `${i + 1}` ;
        const newAvatar = `avatar/${getRandomNamber()}`;
        const newName = getRandomName(array);
        const newMessage = MASSEGES[getRandomNamber(0, NAMES.length - 1)];

        array.push({id: newId, avatar: newAvatar, name: newName, message: newMessage})
    }

return array
};

export const generateMockData = function (count) {
    const array = []

    for(let i = 0; i < count; i++) {
        const newId = `${i}-${getRandomNamber()}`;
        const newUrl = `photos/${i + 1}.jpg`;
        const newDescription = DESCRIPTIONS[getRandomNamber(0, DESCRIPTIONS.length - 1)];
        const newLike = `${getRandomNamber(15, 200)}`;
        const newComments = generateComments(getRandomNamber());
        array.push({id: newId, url: newUrl, description: newDescription, likes: newLike, comments: newComments})

    }

    return array
};



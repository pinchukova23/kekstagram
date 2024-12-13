import { generateMockData } from "./mock";

export const generateMiniatures = () => {
  const userRandomPicture = document.querySelector(".pictures"); //куда добавить фоточки
  const pictureTemplate = document.querySelector("#picture").content;
  const userPicturetemplate = pictureTemplate.querySelector("a");

  const userMiniatures = generateMockData(5);

  const useMiniaturesFragment = document.createDocumentFragment();

  userMiniatures.forEach(({ likes, comments, url }) => {
    const element = userPicturetemplate.cloneNode(true);
    element.querySelector(".picture__comments").textContent = comments.length;
    element.querySelector(".picture__likes").textContent = likes;
    element.querySelector('.picture__img').src = url;
    useMiniaturesFragment.appendChild(element);
  });
console.log(userMiniatures)
  userRandomPicture.appendChild(useMiniaturesFragment);
};



function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomId () {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(1, 25);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(1, 25);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function createRandomUrl () {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(1, 25);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(1, 25);
    }
    previousValues.push(currentValue);
    return `photos/${currentValue}.jpg`;
  };
}

function createRandomCommentId () {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger();
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger();
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const MASSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getMassages = () => MASSAGES[getRandomInteger(0, MASSAGES.length - 1)];

const NAMES = [
  'Кай',
  'Джей',
  'Коул',
  'Зейн',
  'Ллойд',
  'Ву',
  'Гармадон'
];


const createComment = () => ({
  id: createRandomCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: Array.from({length: getRandomInteger(1, 2)}, getMassages).join(' '),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const getComments = () => Array.from({length: getRandomInteger(0, 30)}, createComment);

const createPhotoDescription = () => ({
  id: createRandomId(),
  url: createRandomUrl(),
  description: 'описание',
  likes: getRandomInteger(15, 200),
  comments: getComments()
});

const createPhotos = () => Array.from({length: 25}, createPhotoDescription);

createPhotos();

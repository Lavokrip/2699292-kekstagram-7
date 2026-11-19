const renderPictures = (photos) => {
  const pictureTemplate = document.querySelector('#picture').content;
  const pictureContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const photoElement = pictureTemplate.querySelector('.picture').cloneNode(true);

    const img = photoElement.querySelector('img');
    img.src = photo.url;
    img.alt = photo.description;

    const likes = pictureTemplate.querySelector('.picture__likes');
    likes.textContent = photo.likes;

    const comments = pictureTemplate.querySelector('.picture__comments');
    comments.textContent = photo.comments;

    fragment.appendChild(photoElement);
  }
  pictureContainer.appendChild(fragment);
};

export {renderPictures};

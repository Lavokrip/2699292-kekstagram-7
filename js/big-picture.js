const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const likesElement = bigPicture.querySelector('.likes-count');
const commentsElement = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const captionElement = bigPicture.querySelector('.social__caption');
const commentCountElement = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
};

const openBigPicture = (photo) => {
  bigPictureImage.src = photo.url;
  likesElement.textContent = photo.likes;
  commentsElement.textContent = photo.comments.length;
  captionElement.textContent = photo.description;
  commentsList.replaceChildren();

  for (let i = 0; i < photo.comments.length; i++) {
    const comment = photo.comments[i];

    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const avatarElement = document.createElement('img');
    avatarElement.classList.add('social__picture');
    avatarElement.src = comment.avatar;
    avatarElement.alt = comment.name;
    avatarElement.width = 35;
    avatarElement.height = 35;

    const textElement = document.createElement('p');
    textElement.classList.add('social__text');
    textElement.textContent = comment.message;

    commentElement.appendChild(avatarElement);
    commentElement.appendChild(textElement);
    commentsList.appendChild(commentElement);
  }

  commentCountElement.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
};

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
}

closeButton.addEventListener('click', closeBigPicture);

export { openBigPicture };

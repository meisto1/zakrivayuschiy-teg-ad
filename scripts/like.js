/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

likeHeartArray.forEach((heart, index) => {
  const iconButton = iconButtonArray[index];
  const likeButton = likeButtonArray[index];
  const buttonText = likeButton.querySelector('.button__text');

  function toggleIsLiked() {
    const isLiked = heart.classList.toggle('is-liked');

    iconButton.setAttribute('aria-pressed', String(isLiked));
    buttonText.textContent = isLiked ? 'Unlike' : 'Like';
  }

  iconButton.addEventListener('click', toggleIsLiked);
  likeButton.addEventListener('click', toggleIsLiked);
});

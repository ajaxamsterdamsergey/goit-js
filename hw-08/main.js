'use strict';
import pictures from './gallery-items.js';
const gallery = document.querySelector('.js-gallery');
const modalWindow = document.querySelector('.js-lightbox');
const modalPicture = document.querySelector('.js-lightbox__image');

function createGallery(parentElement, pictures) {
    const domElement = pictures.reduce(
        (domElement, element) =>
            (domElement += `<li 
        class="gallery__item">
        <a
    class="gallery__link"
    href="${element.original}"
  >
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
  </li>
  `),
        '',
    );
    parentElement.insertAdjacentHTML('beforeend', domElement);
}

function handleOpenModal(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return;
    }
    modalWindow.classList.add('is-open');
    const sourceData = event.target.getAttribute('data-source');
    const description = event.target.getAttribute('alt');

    modalPicture.setAttribute('src', sourceData);
    modalPicture.setAttribute('alt', description);
    window.addEventListener('keydown', handleKeyPress);
}
function handleCloseModal() {
    modalWindow.classList.remove('is-open');
    window.removeEventListener('keydown', handleKeyPress);
    modalPicture.setAttribute('src', ' ');
    modalPicture.setAttribute('alt', ' ');
}
function handleClickOverlay({ target, currentTarget }) {
    if (target !== currentTarget) {
        return;
    }
    handleCloseModal();
}
function handleKeyPress({ code }) {
    if (code !== 'Escape') {
        return;
    }
    handleCloseModal();
}
const button = modalWindow.querySelector(
    '.lightbox__button[data-action="close-lightbox"]',
);

const lightboxBackdrop = modalWindow.querySelector('.lightbox__content');

const imageLoad = target => {
    const element = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.setAttribute('src', entry.target.src);
                observer.disconnect();
            }
        });
    });
    element.observe(target);
};

createGallery(gallery, pictures);
gallery.addEventListener('click', handleOpenModal);
button.addEventListener('click', handleCloseModal);
lightboxBackdrop.addEventListener('click', handleClickOverlay);

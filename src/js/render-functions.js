import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />

          <div class="info">
            <p class="info-item">
              <span class="info-label">Likes</span>
              <span>${image.likes}</span>
            </p>

            <p class="info-item">
              <span class="info-label">Views</span>
              <span>${image.views}</span>
            </p>

            <p class="info-item">
              <span class="info-label">Comments</span>
              <span>${image.comments}</span>
            </p>

            <p class="info-item">
              <span class="info-label">Downloads</span>
              <span>${image.downloads}</span>
            </p>
          </div>
        </a>
      </li>
    `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
  loadMoreButton.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loadMoreButton.classList.add('is-hidden');
}

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');
const loadMoreButton = document.querySelector('.load-more');

const PER_PAGE = 15;

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

hideLoader();
hideLoadMoreButton();

searchForm.addEventListener('submit', onSearchFormSubmit);
loadMoreButton.addEventListener('click', onLoadMoreButtonClick);

async function onSearchFormSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements.searchQuery.value.trim();

  if (searchQuery === '') {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });

    return;
  }

  currentQuery = searchQuery;
  currentPage = 1;
  totalHits = 0;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }

    createGallery(data.hits);

    if (isLastPage()) {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });

      return;
    }

    showLoadMoreButton();
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    searchForm.reset();
  }
}

async function onLoadMoreButtonClick() {
  currentPage += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);
    smoothScroll();

    if (isLastPage()) {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });

      return;
    }

    showLoadMoreButton();
  } catch (error) {
    currentPage -= 1;

    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });

    showLoadMoreButton();
  } finally {
    hideLoader();
  }
}

function isLastPage() {
  return currentPage * PER_PAGE >= totalHits;
}

function smoothScroll() {
  const galleryCard = document.querySelector('.gallery-item');

  if (!galleryCard) {
    return;
  }

  const cardHeight = galleryCard.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

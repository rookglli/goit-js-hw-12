import axios from 'axios';

const API_KEY = '41651325-d56a057956804a71a345fad13';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: PER_PAGE,
    },
  });

  return response.data;
}

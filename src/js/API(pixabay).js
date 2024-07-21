// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import axios from 'axios';




// const API_key = "44872402-0762bbf0a5ccd686fb6258473";
// const base_url = "https://pixabay.com/api/";

// const searchForm = document.getElementById("search-form");
// const gallery = document.getElementById("gallery");
// const loader = document.getElementById("loader");
// const loadMoreButton = document.getElementById("load-more-button");
// let query = "";
// let page = 1;
// let totalHits = 0;

// const fetchImages = async (query, page = 1) => {
//   try {
//     const response = await axios.get(`${base_url}`, {
//       params: {
//         key: API_key,
//         q: query,
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: true,
//         page: page,
//         per_page: 40,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.status);
//   }
// };
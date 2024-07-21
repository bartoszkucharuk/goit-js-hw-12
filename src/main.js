import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

import { createMarkup } from "./js/galleryMarkup.js"

const API_key = "44872402-0762bbf0a5ccd686fb6258473";
const base_url = "https://pixabay.com/api/";

const searchForm = document.getElementById("search-form");
const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");
const loadMoreButton = document.getElementById("load-more-button");
let query = "";
let page = 1;
let totalHits = 0;

const getPictures = async (query, page = 1) => {
  try {
    const response = await axios.get(`${base_url}`, {
      params: {
        key: API_key,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: 40,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
};



const displayImages = images => {
    const markup = createMarkup(images);
    gallery.insertAdjacentHTML("beforeend", markup);
    
    const lightbox = new SimpleLightbox(".gallery-link", {
        captionsData: "alt",
        captionDelay: 250,
        captionPosition: "bottom",
    });
    lightbox.refresh();
};

const showError = message => {
  iziToast.error({
    title: "Error",
    message: message,
  });
};

const showInfo = message => {
  iziToast.info({
    title: "Info",
    message: message,
  });
};

const handleSearchFormSubmit = async event => {
    event.preventDefault();
    query = event.target.elements.query.value.trim();

    if (!query) return;

    gallery.innerHTML = "";
    loadMoreButton.style.display = "none";
    loader.style.display = "flex";
    page = 1;

    try {
        const data = await getPictures(query, page);
        const images = data.hits;
        totalHits = data.totalHits;

    if (images.length === 0) {
        showError(
            "Sorry, there are no images matching your search query. Please try again!"
        );
    } else {
        displayImages(images);
        if (totalHits > images.length) {
            loadMoreButton.style.display = "block";
        }
    }
  } catch (error) {
        showError("Something went wrong. Please try again later.");
  } finally {
        loader.style.display = "none";
  }
};

const handleLoadMoreButtonClick = async () => {
    page += 1;
    loader.style.display = "flex";

    try {
        const data = await getPictures(query, page);
        const images = data.hits;

    if (images.length === 0) {
        loadMoreButton.style.display = "none";
        showInfo("We're sorry, but you've reached the end of search results.");
    } else {
        displayImages(images);
        if (page * 40 >= totalHits) {
            loadMoreButton.style.display = "none";
            showInfo("We're sorry, but you've reached the end of search results.");
      }

    // const { height: cardHeight } = document
    //     .querySelector(".gallery-item")
    //     .getBoundingClientRect();
    // window.scrollBy({
    //     top: cardHeight * 2,
    //     behavior: "smooth",
    //     });
    }
    } catch (error) {
        showError("Something went wrong. Please try again later.");
    } finally {
        loader.style.display = "none";
    }
};

searchForm.addEventListener("submit", handleSearchFormSubmit);
loadMoreButton.addEventListener("click", handleLoadMoreButtonClick);
// re-fresh API and gallery mark-up
    // DONE

// PRE-settings in MAIN.js



import iziToast from "iziToast";
import "iziToast/dist/css/iziToast.min.css";
import SimpleLightBox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from "./js/API_pixabay.js";
import { createMarkup } from "./js/galleryMarkups.js";
// 1. import pop - ups library from iziToasts;
// 2. import gallery library from simplelightbox;
// 3. import API settings;
// 4. import gallery making functions;
    // DONE

const form = document.querySelector(".search-form");
const input = document.querySelector(".search-input");
const gallery = document.querySelector(".card-container");
const loader = document.querySelector(".loader");
const loadMoreButton = document.querySelector(".load-more-button")


// event listeners settings
// 5. const form;
// 6. const input;
// 7. const gallery
// 8. const loader
    // DONE

// local variables "LET"
// 9. current page;
// 10. min page;
// 11. max page;
// 12. responses view by page(ex. 20, 30 etc);
// 13. image query(searching images)
// 14. simple lightbox gallery settings

// starting functionally of search page

// set form submit button to listener and star query
// set default page

// LOADER- make it visible
// hide load-more button
// inner html as a gallery markup start

// making IF formule for iziToasts, for check if the query isn't empty, hide loader and get whole code as response [return response]

// TRY / CATCH




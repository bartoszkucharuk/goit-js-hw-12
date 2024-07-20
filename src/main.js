// re-fresh API and gallery mark-up
import axios from "axios";
const API_KEY = "44872402-0762bbf0a5ccd686fb6258473";
const BASE_URL = "https://pixabay.com/api/"

async function getImages(query, page) { 
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: 20,
    };

    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
        } catch (error) {
        throw new Error("Fetch request failed");
     }
    }



// PRE-settings in MAIN.js
// 1. import pop - ups library from iziToasts;
// 2. import gallery library from simplelightbox;
// 3. import API settings;
// 4. import gallery making functions;

// event listeners settings
// 5. const form;
// 6. const input;
// 7. const gallery
// 8. const loader

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



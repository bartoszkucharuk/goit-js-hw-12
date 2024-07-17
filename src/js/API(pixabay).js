// import AXIOS library to make creating async functions more automatical and quicker
import axios from "axios";

const myApiKey = "44872402-0762bbf0a5ccd686fb6258473";
axios.defaults.baseURL = "<https://pixabay.com/>";

function getPictures(imageQuery, page=1) {
    const queryResponse =  axios.get("/api", {
        params: {
        key: myApiKey,
        q: imageQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 15,
        page: page,
        }
    });
    return queryResponse.data
 }


// making a query to the API that returns answers for user's searching input
export async function getPictures(query) {
    return fetch(`${baseURL}?key=${myPixabayKey}&q=${query}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`)
        .then((response) => { await
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}
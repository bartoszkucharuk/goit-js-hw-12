import axios from "axios";
const api_key = "44872402-0762bbf0a5ccd686fb6258473";
const base_url = "https://pixabay.com/api/"

export async function getImages(query, page) { 
    const params = {
        key: api_key,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: 20,
    };

    try {
        const response = await axios.get(base_url, { params });
        return response.data;
        } catch (error) {
        throw new Error("Fetch request failed");
     }
    }
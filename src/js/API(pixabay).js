import axios from "axios";

const API_key = "44872402-0762bbf0a5ccd686fb6258473";
const base_url = "https://pixabay.com/api/";

export async function getPictures(query, page = 1) {
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

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

export function createMarkup(data) {
  return data.map(image => `
    <li class="gallery-item">

      <a href="${image.largeImageURL}" class="gallery-link">
          <img class="card-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
            width="360">
      </a>

      <ul class="card-description-list">
          <li class="card-description-item">
              <h3 class="card-description-title">Likes</h3>
              <p class="card-description-value">${image.likes}</p>
          </li>
          <li class="card-description-item">
              <h3 class="card-description-title">Views</h3>
              <p class="card-description-value">${image.views}</p>
          </li>
          <li class="card-description-item">
              <h3 class="card-description-title">Comments</h3>
              <p class="card-description-value">${image.comments}</p>
          </li>
          <li class="card-description-item">
              <h3 class="card-description-title">Downloads</h3>
              <p class="card-description-value">${image.downloads}</p>
          </li>
      </ul>
  </li>
`).join('');
}
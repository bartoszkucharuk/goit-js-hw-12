import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

export function createMarkup(data) {
  return data.map(image => `
    <li class="gallery-item">

      <a href="${image.largeImageURL}">
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


// _____ code backup ________
// export function createMarkup(data) {
//   return data.map(image => `
//     <li class="gallery-item">
//       <div class="image-cont">
//         <a class="gallery-link" href="${image.largeImageURL}">
//           <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
//         </a>
//         <div class="image-descr">
//           <div class="descr-box">
//             <p class="image-feature">Likes</p>
//             <p class="image-data">${image.likes}</p>
//           </div>
//           <div class="descr-box">
//             <p class="image-feature">Views</p>
//             <p class="image-data">${image.views}</p>
//           </div>
//           <div class="descr-box">
//             <p class="image-feature">Comments</p>
//             <p class="image-data">${image.comments}</p>
//           </div>
//           <div class="descr-box">
//             <p class="image-feature">Downloads</p>
//               <p class="image-data">${image.downloads}</p>
//           </div>
//         </div>
//       </div>
//     </li>
//   `).join('');
// }




// ________________________ old code _________________
// export function createMarkup({ hits }, cardContainer) {
//     if (hits.length === 0) {
//         catchError();
//         return;
//     }

// // if API has a datas, create a markup with answers/response with infos adding to the API configuration
//     const markup = hits.map(({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads }) => {
        
// // making an innerHTML with a gallery structure by making list
//         return `
//             <li class="list-item">
//                 <a href="${largeImageURL}">
//                     <img class="card-image"
//                     src="${webformatURL}"
//                     alt="${tags}"
//                     width="360">
//                 </a>
//                 <ul class="card-description-list">
//                     <li class="card-description-item">
//                         <h3 class="card-description-title">Likes</h3>
//                         <p class="card-description-value">${likes}</p>
//                     </li>
//                     <li class="card-description-item">
//                         <h3 class="card-description-title">Views</h3>
//                         <p class="card-description-value">${views}</p>
//                     </li>
//                     <li class="card-description-item">
//                         <h3 class="card-description-title">Comments</h3>
//                         <p class="card-description-value">${comments}</p>
//                     </li>
//                     <li class="card-description-item">
//                         <h3 class="card-description-title">Downloads</h3>
//                         <p class="card-description-value">${downloads}</p>
//                     </li>
//                 </ul>
//             </li>
//         `;
//     }).join('');

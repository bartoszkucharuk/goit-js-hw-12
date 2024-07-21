export function createMarkup({ hits }, gallery) {
    const markup = hits.map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads }) => {
        return `
            <li class="list-item">
                <a href="${largeImageURL}">
                    <img class="card-image"
                    src="${webformatURL}"
                    alt="${tags}"
                    width="360">
                </a>
                <ul class="card-description-list">
                    <li class="card-description-item">
                        <h3 class="card-description-title">Likes</h3>
                        <p class="card-description-value">${likes}</p>
                    </li>
                    <li class="card-description-item">
                        <h3 class="card-description-title">Views</h3>
                        <p class="card-description-value">${views}</p>
                    </li>
                    <li class="card-description-item">
                        <h3 class="card-description-title">Comments</h3>
                        <p class="card-description-value">${comments}</p>
                    </li>
                    <li class="card-description-item">
                        <h3 class="card-description-title">Downloads</h3>
                        <p class="card-description-value">${downloads}</p>
                    </li>
                </ul>
            </li>
        `;
    }).join("");

    gallery.innerHTML = markup;
    const lightbox = new SimpleLightbox(".card-container a", {
        captions: true,
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
    });
    lightbox.refresh();
}
export function catchError() {
    iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
    });
}
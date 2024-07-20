// making a function that check if we had any answers/hits in a database of API
export function createMarkup({ hits }, cardContainer) {
    if (hits.length === 0) {
        error();
        return;
    }

    // if API has a datas, create a markup with answers/response with infos adding to the API configuration
    const markup = hits.map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads }) => {
        
        // making an innerHTML with a gallery structure by making list
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
}

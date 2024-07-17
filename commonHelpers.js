import{S as p,i as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",h="44872402-0762bbf0a5ccd686fb6258473",y="photo",g="horizontal",b=!0;function $(i){return fetch(`${m}?key=${h}&q=${i}&image_type=${y}&orientation=${g}&safesearch=${b}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function L({hits:i},r){if(i.length===0){error();return}const s=i.map(({webformatURL:e,largeImageURL:t,tags:c,likes:n,views:l,comments:d,downloads:u})=>`
            <li class="list-item">
                <a href="${t}">
                    <img class="card-image"
                    src="${e}"
                    alt="${c}"
                    width="360">
                </a>
                <ul class="card-description-list">
                    <li class="card-description-item">
                        <h3 class="card-description-title">Likes</h3>
                        <p class="card-description-value">${n}</p>
                    </li>
                    <li class="card-description-item">
                        <h3 class="card-description-title">Views</h3>
                        <p class="card-description-value">${l}</p>
                    </li>
                    <li class="card-description-item">
                        <h3 class="card-description-title">Comments</h3>
                        <p class="card-description-value">${d}</p>
                    </li>
                    <li class="card-description-item">
                        <h3 class="card-description-title">Downloads</h3>
                        <p class="card-description-value">${u}</p>
                    </li>
                </ul>
            </li>
        `).join("");r.innerHTML=s,new p(".card-container a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function v(){f.error({message:"Sorry, there are no images matching your search query. Please try again!"})}const w=document.querySelector(".search-form"),P=document.querySelector(".card-container"),a=document.querySelector(".loader");w.addEventListener("submit",S);function S(i){i.preventDefault();const r=i.currentTarget,s=r.elements.search.value.toLowerCase();a.style.display="block",$(s).then(o=>L(o,P)).catch(v).finally(()=>{r.reset(),a.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map

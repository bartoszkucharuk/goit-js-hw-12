import{a as b,S as w,i as h}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();function L(t){return t.map(e=>`
    <li class="gallery-item">

      <a href="${e.largeImageURL}">
          <img class="card-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
            width="360">
      </a>

    <ul class="card-description-list">
        <li class="card-description-item">
            <h3 class="card-description-title">Likes</h3>
            <p class="card-description-value">${e.likes}</p>
        </li>
        <li class="card-description-item">
            <h3 class="card-description-title">Views</h3>
            <p class="card-description-value">${e.views}</p>
        </li>
        <li class="card-description-item">
            <h3 class="card-description-title">Comments</h3>
            <p class="card-description-value">${e.comments}</p>
        </li>
        <li class="card-description-item">
            <h3 class="card-description-title">Downloads</h3>
            <p class="card-description-value">${e.downloads}</p>
        </li>
    </ul>
  </li>
`).join("")}const v="44872402-0762bbf0a5ccd686fb6258473",E="https://pixabay.com/api/";async function m(t,e=1){try{return(await b.get(`${E}`,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:40}})).data}catch(s){throw new Error(s.response.status)}}const I=document.getElementById("search-form"),f=document.getElementById("gallery"),l=document.getElementById("loader"),i=document.getElementById("load-more-button");let n="",a=1,d=0;const g=t=>{const e=L(t);f.insertAdjacentHTML("beforeend",e),new w(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()},p=t=>{h.error({title:"Error",message:t})},y=t=>{h.info({title:"Info",message:t})},P=async t=>{if(t.preventDefault(),n=t.target.elements.query.value.trim(),!!n){f.innerHTML="",i.style.display="none",l.style.display="flex",a=1;try{const e=await m(n,a),s=e.hits;d=e.totalHits,s.length===0?p("Sorry, there are no images matching your search query. Please try again!"):(g(s),d>s.length&&(i.style.display="block"))}catch{p("Something went wrong. Please try again later.")}finally{l.style.display="none"}}},S=async()=>{a+=1,l.style.display="flex";try{const e=(await m(n,a)).hits;if(e.length===0)i.style.display="none",y("We're sorry, but you've reached the end of search results.");else{g(e),a*40>=d&&(i.style.display="none",y("We're sorry, but you've reached the end of search results."));const{height:s}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}catch{p("Something went wrong. Please try again later.")}finally{l.style.display="none"}};I.addEventListener("submit",P);i.addEventListener("click",S);
//# sourceMappingURL=commonHelpers.js.map

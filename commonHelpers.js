import{a as b,S as v,i as m}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();function w(t){return t.map(e=>`<li class="gallery-item">
      <div class="image-cont">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="image-descr">
          <div class="descr-box">
            <p class="image-feature">Likes</p>
            <p class="image-data">${e.likes}</p>
          </div>
          <div class="descr-box">
            <p class="image-feature">Views</p>
            <p class="image-data">${e.views}</p>
          </div>
          <div class="descr-box">
            <p class="image-feature">Comments</p>
            <p class="image-data">${e.comments}</p>
          </div>
          <div class="descr-box">
            <p class="image-feature">Downloads</p>
              <p class="image-data">${e.downloads}</p>
          </div>
        </div>
      </div>
    </li>
  `).join("")}const L="44872402-0762bbf0a5ccd686fb6258473",x="https://pixabay.com/api/",E=document.getElementById("search-form"),f=document.getElementById("gallery"),l=document.getElementById("loader"),n=document.getElementById("load-more-button");let i="",o=1,d=0;const g=async(t,e=1)=>{try{return(await b.get(`${x}`,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:40}})).data}catch(r){throw new Error(r.response.status)}},h=t=>{const e=w(t);f.insertAdjacentHTML("beforeend",e),new v(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()},y=t=>{m.error({title:"Error",message:t})},u=t=>{m.info({title:"Info",message:t})},I=async t=>{if(t.preventDefault(),i=t.target.elements.query.value.trim(),!!i){f.innerHTML="",n.style.display="none",l.style.display="flex",o=1;try{const e=await g(i,o),r=e.hits;d=e.totalHits,r.length===0?y("Sorry, there are no images matching your search query. Please try again!"):(h(r),d>r.length&&(n.style.display="block"))}catch{y("Something went wrong. Please try again later.")}finally{l.style.display="none"}}},P=async()=>{o+=1,l.style.display="flex";try{const e=(await g(i,o)).hits;e.length===0?(n.style.display="none",u("We're sorry, but you've reached the end of search results.")):(h(e),o*40>=d&&(n.style.display="none",u("We're sorry, but you've reached the end of search results.")))}catch{y("Something went wrong. Please try again later.")}finally{l.style.display="none"}};E.addEventListener("submit",I);n.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map

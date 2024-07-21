import{a as w,S as b,i as h}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))y(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&y(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function y(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const L="44872402-0762bbf0a5ccd686fb6258473",v="https://pixabay.com/api/",E=document.getElementById("search-form"),m=document.getElementById("gallery"),l=document.getElementById("loader"),i=document.getElementById("load-more-btn");let n="",a=1,d=0;const f=async(t,e=1)=>{try{return(await w.get(`${v}`,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:40}})).data}catch(r){throw new Error(r.response.status)}},I=t=>t.map(e=>`
            <li class="list-item">
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
        `).join(""),g=t=>{const e=I(t);m.insertAdjacentHTML("beforeend",e),new b(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()},p=t=>{h.error({title:"Error",message:t})},u=t=>{h.info({title:"Info",message:t})},S=async t=>{if(t.preventDefault(),n=t.target.elements.query.value.trim(),!!n){m.innerHTML="",i.style.display="none",l.style.display="flex",a=1;try{const e=await f(n,a),r=e.hits;d=e.totalHits,r.length===0?p("Sorry, there are no images matching your search query. Please try again!"):(g(r),d>r.length&&(i.style.display="block"))}catch{p("Something went wrong. Please try again later.")}finally{l.style.display="none"}}},B=async()=>{a+=1,l.style.display="flex";try{const e=(await f(n,a)).hits;if(e.length===0)i.style.display="none",u("We're sorry, but you've reached the end of search results.");else{g(e),a*40>=d&&(i.style.display="none",u("We're sorry, but you've reached the end of search results."));const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}catch{p("Something went wrong. Please try again later.")}finally{l.style.display="none"}};E.addEventListener("submit",S);i.addEventListener("click",B);
//# sourceMappingURL=commonHelpers.js.map

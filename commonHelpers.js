import{a as b,S as w,i as u}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))g(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&g(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function g(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const L="44872402-0762bbf0a5ccd686fb6258473",v="https://pixabay.com/api/",E=document.getElementById("search-form"),m=document.getElementById("gallery"),i=document.getElementById("loader"),a=document.getElementById("load-more-btn");let l="",n=1,d=0;const f=async(t,e=1)=>{try{return(await b.get(`${v}`,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:40}})).data}catch(o){throw new Error(o.response.status)}},I=t=>t.map(e=>`
    <div class="gallery-item">
      <a href="${e.largeImageURL}" class="gallery-link">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy"/>
      </a>
      <div class="info">
        <p><strong>Likes:</strong> ${e.likes}</p>
        <p><strong>Views:</strong> ${e.views}</p>
        <p><strong>Comments:</strong> ${e.comments}</p>
        <p><strong>Downloads:</strong> ${e.downloads}</p>
      </div>
    </div>
  `).join(""),h=t=>{const e=I(t);m.insertAdjacentHTML("beforeend",e),new w(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh()},y=t=>{u.error({title:"Error",message:t})},p=t=>{u.info({title:"Info",message:t})},S=async t=>{if(t.preventDefault(),l=t.target.elements.query.value.trim(),!!l){m.innerHTML="",a.style.display="none",i.style.display="flex",n=1;try{const e=await f(l,n),o=e.hits;d=e.totalHits,o.length===0?y("Sorry, there are no images matching your search query. Please try again!"):(h(o),d>o.length&&(a.style.display="block"))}catch{y("Something went wrong. Please try again later.")}finally{i.style.display="none"}}},B=async()=>{n+=1,i.style.display="flex";try{const e=(await f(l,n)).hits;if(e.length===0)a.style.display="none",p("We're sorry, but you've reached the end of search results.");else{h(e),n*40>=d&&(a.style.display="none",p("We're sorry, but you've reached the end of search results."));const{height:o}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}}catch{y("Something went wrong. Please try again later.")}finally{i.style.display="none"}};E.addEventListener("submit",S);a.addEventListener("click",B);
//# sourceMappingURL=commonHelpers.js.map

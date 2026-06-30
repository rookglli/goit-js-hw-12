import{a as P,S as v,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function f(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const R="41651325-d56a057956804a71a345fad13",q="https://pixabay.com/api/",B=15;async function h(o,r){return(await P.get(q,{params:{key:R,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:B}})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),g=document.querySelector(".load-more"),E=new v(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />

          <div class="info">
            <p class="info-item">
              <span class="info-label">Likes</span>
              <span>${e.likes}</span>
            </p>

            <p class="info-item">
              <span class="info-label">Views</span>
              <span>${e.views}</span>
            </p>

            <p class="info-item">
              <span class="info-label">Comments</span>
              <span>${e.comments}</span>
            </p>

            <p class="info-item">
              <span class="info-label">Downloads</span>
              <span>${e.downloads}</span>
            </p>
          </div>
        </a>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",r),E.refresh()}function $(){m.innerHTML=""}function w(){y.classList.remove("is-hidden")}function p(){y.classList.add("is-hidden")}function l(){g.classList.remove("is-hidden")}function i(){g.classList.add("is-hidden")}const b=document.querySelector(".search-form"),M=document.querySelector(".load-more"),A=15;let u="",a=1,d=0;p();i();b.addEventListener("submit",O);M.addEventListener("click",_);async function O(o){o.preventDefault();const r=o.target.elements.searchQuery.value.trim();if(r===""){n.warning({message:"Please enter a search query!",position:"topRight"});return}u=r,a=1,d=0,$(),i(),w();try{const e=await h(u,a);if(d=e.totalHits,e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(L(e.hits),S()){i(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}l()}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{p(),b.reset()}}async function _(){a+=1,i(),w();try{const o=await h(u,a);if(L(o.hits),H(),S()){i(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}l()}catch{a-=1,n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),l()}finally{p()}}function S(){return a*A>=d}function H(){const o=document.querySelector(".gallery-item");if(!o)return;const r=o.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map

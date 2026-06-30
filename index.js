import{a as f,S as p,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const u="41651325-d56a057956804a71a345fad13",d="https://pixabay.com/api/",m=15;async function g(o,t){return(await f.get(d,{params:{key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:m}})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");document.querySelector(".load-more");const y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
          />

          <div class="info">
            <p class="info-item">
              <span class="info-label">Likes</span>
              <span>${r.likes}</span>
            </p>

            <p class="info-item">
              <span class="info-label">Views</span>
              <span>${r.views}</span>
            </p>

            <p class="info-item">
              <span class="info-label">Comments</span>
              <span>${r.comments}</span>
            </p>

            <p class="info-item">
              <span class="info-label">Downloads</span>
              <span>${r.downloads}</span>
            </p>
          </div>
        </a>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",t),y.refresh()}function b(){l.innerHTML=""}function L(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}const S=document.querySelector(".form");S.addEventListener("submit",P);function P(o){o.preventDefault();const t=o.currentTarget.elements["search-text"].value.trim();if(t===""){n.warning({message:"Please enter a search query!",position:"topRight"});return}b(),L(),g(t).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",progressBarColor:"#b51b1b"});return}h(r.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again later!",position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",progressBarColor:"#b51b1b"})}).finally(()=>{w()})}
//# sourceMappingURL=index.js.map

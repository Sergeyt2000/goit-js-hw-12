import{a as A,S as E,i as c}from"./assets/vendor-Dn3QujGD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();function u(l){const t=l.map(a=>{const{webformatURL:o,largeImageURL:r,tags:s,likes:n,views:p,comments:y,downloads:f}=a;return`<li class="gallery-item">
      <div>
        <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${s}" 
            title="${s.slice(0,30)}"
            width="360"
            height="152"
          />
          </a>
          <div class="img-descr">
            <ul class="list-descr">
              <li class="item-descr">
                <p class="descr-name">Likes</p>
                <p class="descr-value">${n}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Views</p>
                <p class="descr-value">${p}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Comments</p>
                <p class="descr-value">${y}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Downloads</p>
                <p class="descr-value">${f}</p>
              </li>
            </ul>          
          </div>
          </div>
      </li>
      `}).join("");e.galleryEl.insertAdjacentHTML("beforeend",t)}const v="49287257-770ce306313139aeab99da771",L="https://pixabay.com/api/";async function g(l,t){try{return(await A.get(L,{params:{key:v,q:l,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t}})).data}catch(a){console.log(a)}}const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=",e={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),searchInput:document.querySelector(".form-input"),moreBtnEl:document.querySelector(".more-btn")};let h=new E(".gallery a",{captionsData:"title",captionDelay:250,scrollZoom:!1}),d="",m=0,i=1;e.formEl.addEventListener("submit",b);e.moreBtnEl.addEventListener("click",w);async function b(l){if(l.preventDefault(),i=1,d=e.searchInput.value,d.trim()===""){e.galleryEl.innerHTML="",c.warning({position:"topRight",message:"Please enter something"});return}e.moreBtnEl.classList.add("visually-hidden"),e.galleryEl.innerHTML="";try{const t=await g(d,i);if(m=Math.ceil(t.totalHits/t.hits.length),t.hits.length===0){e.formEl.reset(),c.error({position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:S,message:"Sorry, there are no images matching your search query. Please try again!"});return}if(e.loaderEl.classList.remove("visually-hidden"),u(t.hits),i>=m){e.moreBtnEl.classList.add("visually-hidden"),e.loaderEl.classList.add("visually-hidden"),e.formEl.reset(),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}e.moreBtnEl.classList.remove("visually-hidden"),h.refresh()}catch(t){console.log(t)}e.loaderEl.classList.add("visually-hidden"),e.formEl.reset()}async function w(){e.loaderEl.classList.remove("visually-hidden"),i+=1;try{const l=await g(d,i);u(l.hits),h.refresh();const o=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({top:o*2,behavior:"smooth"}),i>=m){e.moreBtnEl.classList.add("visually-hidden"),e.loaderEl.classList.add("visually-hidden"),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}}catch(l){console.log(l)}e.loaderEl.classList.add("visually-hidden")}
//# sourceMappingURL=index.js.map

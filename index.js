import{S as f,a as A,i as c}from"./assets/vendor-Dn3QujGD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();let E=new f(".gallery a",{captionsData:"title",captionDelay:250,scrollZoom:!1});function u(l){const s=l.map(a=>{const{webformatURL:o,largeImageURL:t,tags:r,likes:n,views:g,comments:p,downloads:y}=a;return`<li class="gallery-item">
      <div>
        <a class="gallery-link" href="${t}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${r}" 
            title="${r.slice(0,50)}"
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
                <p class="descr-value">${g}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Comments</p>
                <p class="descr-value">${p}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Downloads</p>
                <p class="descr-value">${y}</p>
              </li>
            </ul>          
          </div>
          </div>
      </li>
      `}).join("");e.galleryEl.insertAdjacentHTML("beforeend",s),E.refresh()}const v="49287257-770ce306313139aeab99da771",L="https://pixabay.com/api/";async function h(l,s){try{return(await A.get(L,{params:{key:v,q:l,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s}})).data}catch(a){console.log(a)}}const S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=",e={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),searchInput:document.querySelector(".form-input"),moreBtnEl:document.querySelector(".more-btn")};let d="",m=0,i=1;e.formEl.addEventListener("submit",b);e.moreBtnEl.addEventListener("click",B);async function b(l){if(l.preventDefault(),i=1,d=e.searchInput.value,d.trim()===""){e.galleryEl.innerHTML="",e.moreBtnEl.classList.add("visually-hidden"),c.warning({position:"topRight",message:"Please enter something"});return}e.moreBtnEl.classList.add("visually-hidden"),e.loaderEl.classList.remove("visually-hidden"),e.galleryEl.innerHTML="";try{const s=await h(d,i);if(m=Math.ceil(s.totalHits/s.hits.length),s.hits.length===0){e.loaderEl.classList.add("visually-hidden"),e.formEl.reset(),c.error({position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:S,message:"Sorry, there are no images matching your search query. Please try again!"});return}if(u(s.hits),i>=m){e.moreBtnEl.classList.add("visually-hidden"),e.loaderEl.classList.add("visually-hidden"),e.formEl.reset(),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}e.moreBtnEl.classList.remove("visually-hidden")}catch(s){console.log(s)}e.loaderEl.classList.add("visually-hidden"),e.formEl.reset()}async function B(){e.loaderEl.classList.remove("visually-hidden"),i+=1;try{const l=await h(d,i);u(l.hits);const o=document.querySelector(".gallery-item").getBoundingClientRect().height;if(window.scrollBy({top:o*2,behavior:"smooth"}),i>=m){e.moreBtnEl.classList.add("visually-hidden"),e.loaderEl.classList.add("visually-hidden"),c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."});return}}catch(l){console.log(l)}e.loaderEl.classList.add("visually-hidden")}
//# sourceMappingURL=index.js.map

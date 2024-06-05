(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div style="width: 800px; display: flex; flex-direction: column; justify-content: center">
    <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; row-gap: 8px; width: 100%">
      <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; row-gap: 8px; width: 100%">
        <input type="text" id="hostUrl" placeholder="Enter host url" style="width: 50%" value="https://www.uat.universign.net"/>
        <input type="text" id="signatureId" placeholder="Enter signature id" style="width: 50%" />
      </div>
      <button id="openIframe">Generate</button>
    </div>
    <div id="iframeContainerId" style="width:100%; display:inline-block; height: calc(100vh - 150px);"></div>
  </div>
`;document.addEventListener("DOMContentLoaded",()=>{const i=new URL(window.location.href),r=i.searchParams.get("hostUrl"),n=i.searchParams.get("signerId");!r||!n||(document.querySelector("#hostUrl").value=r,document.querySelector("#signatureId").value=n)});document.querySelector("#openIframe").addEventListener("click",()=>{c()});function c(){const i=document.querySelector("#hostUrl").value,r={redirectionMode:"IN"},n=document.querySelector("#signatureId").value,o=new URL(window.location.href);o.searchParams.set("hostUrl",i),o.searchParams.set("signerId",n),window.history.pushState({},"",o),universignSigInit("iframeContainerId",n,r,i)}

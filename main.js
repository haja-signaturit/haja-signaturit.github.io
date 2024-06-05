import "./style.css";

document.querySelector("#app").innerHTML = `
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
`;

// on ready get the queryParams hostUrl and signerId
document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(window.location.href);
  const hostUrl = url.searchParams.get("hostUrl");
  const signerId = url.searchParams.get("signerId");
  if (!hostUrl || !signerId) {
    return;
  }
  document.querySelector("#hostUrl").value = hostUrl;
  document.querySelector("#signatureId").value = signerId;
});

document.querySelector("#openIframe").addEventListener("click", () => {
  generateIframe();
});

function generateIframe() {
  const hostUrl = document.querySelector("#hostUrl").value;
  const configuration = {
    redirectionMode: "IN"
  };
  const signerId = document.querySelector("#signatureId").value;
  // create new url and set its queryParams hostUrl and signerId
  const url = new URL(window.location.href);
  url.searchParams.set("hostUrl", hostUrl);
  url.searchParams.set("signerId", signerId);
  // set the new url to the current window
  window.history.pushState({}, "", url);

  universignSigInit(
    "iframeContainerId",
    signerId,
    configuration,
    hostUrl
  );
}

const tabButtons = document.querySelectorAll(".tab-btn");
const tabSections = document.querySelectorAll("section");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    tabSections.forEach(s => s.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

function addTypedCookies() {
  document.cookie = "sessionCookie=temporary; path=/";
  document.cookie = "persistentCookie=storedLonger; path=/; max-age=3600";
  document.cookie = "thirdPartyCookie=simulatedAd; path=/";
  document.cookie = "secureCookie=onlyHTTPS; path=/";
  document.cookie = "httpOnlyCookie=hiddenFromJS; path=/";

  displayCookies();
}

function addCustomCookie() {
  const name = document.getElementById("cookieName").value;
  const value = document.getElementById("cookieValue").value;
  if (name && value) {
    document.cookie = `${name}=${value}; path=/`;
    displayCookies();
  }
}

function getCookies() {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ').filter(cookie => cookie.trim() !== '');
  return cookies.map(cookie => {
    const [name, value] = cookie.split('=');
    return { name, value };
  });
}

function displayCookies() {
  const container = document.getElementById("cookieContainer");
  container.innerHTML = '';
  const cookies = getCookies();
  if (cookies.length === 0) {
    container.innerHTML = "<p>No cookies found. Click 'Add Demo Cookies' or add your own.</p>";
    return;
  }
  cookies.forEach(cookie => {
    const card = document.createElement("div");
    card.className = "cookie-card";
    card.innerHTML = `
      <h3>${cookie.name}</h3>
      <p><strong>Value:</strong> ${cookie.value}</p>
      <p><strong>Expires:</strong> unknown (JS-only view)</p>
    `;
    container.appendChild(card);
  });
}

const siteInput = document.getElementById("siteInput");
const resultContainer = document.getElementById("siteCookieResult");
const exampleCookies = {
  "youtube.com": ["YSC", "VISITOR_INFO1_LIVE", "PREF"],
  "google.com": ["SID", "HSID", "NID"],
  "facebook.com": ["c_user", "xs", "fr"],
  "instagram.com": ["ds_user_id", "sessionid", "csrftoken"]
};

siteInput.addEventListener("input", () => {
  const site = siteInput.value.toLowerCase().trim();
  resultContainer.innerHTML = '';
  if (exampleCookies[site]) {
    const list = exampleCookies[site]
      .map(c => `<div class="example-result"><strong>${c}</strong>: common cookie used on ${site}</div>`)
      .join("");
    resultContainer.innerHTML = list;
  }
});

displayCookies();

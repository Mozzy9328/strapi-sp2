import { url } from "./baseUrl.js";

export async function getHomeBanner() {
  const response = await fetch(url + "home");
  const json = await response.json();

  console.log(json);

  const heroBanner = document.querySelector(".hero-banner");

  heroBanner.innerHTML += `<div><img src="${url + json.hero_banner.url}" alt="${
    json.hero_banner.alternativeText
  }" /></div>`;
}

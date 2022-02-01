import { url } from "./baseUrl.js";

export async function getFeaturedProducts() {
  const response = await fetch(url + "products");
  const json = await response.json();

  console.log(json);

  const features = document.querySelector(".feature");

  features.innerHTML += ``;

  for (let i = 0; i < json.length; i++) {
    if (json.featured === true) {
      c;
    }
  }
}

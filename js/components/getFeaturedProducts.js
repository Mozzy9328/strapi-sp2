import { url } from "./baseUrl.js";

export async function getFeaturedProducts() {
  const response = await fetch(url + "/products");
  const json = await response.json();

  console.log(json);

  const features = document.querySelector(".feature");

  for (let i = 0; i < json.length; i++) {
    if (json[i].featured === true) {
      features.innerHTML += `
      <div>
        <img src="${json[i].image.name}"
        <h4>${json[i].title}</h4>
        <p>${json[i].price}</p>

      </div>`;
    }
  }
}

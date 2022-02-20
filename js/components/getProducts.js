import { baseUrl } from "../settings/baseUrl.js";

export async function getProducts(json) {
  const productContainer = document.querySelector(".product-container");
  const productContainer2 = document.querySelector(".product-container2");

  productContainer.innerHTML = "";

  json.forEach((json) => {
    const strapiImg = json.image_url;
    const strapiImg2 = baseUrl + json.image.url;
    if (strapiImg2) {
      productContainer.innerHTML += `
      <div class="product">
        <div class="product-info">
          <div class="product-img" style="height:300px !important">
          <img src="${strapiImg2}"/>
          </div>
          <div class="product-btn"><a href="product-detail.html?id=${json.id}">
            <h4>${json.title}</h4>
            <p>€${json.price}</p>
          </a></div>
      </div>`;
    }
    if (strapiImg) {
      productContainer2.innerHTML += `
      <div class="product">
        <div class="product-info">
          <div class="product-img" style="height:300px !important">
          <img src="${strapiImg}"/>
          </div>
          <div class="product-btn"><a href="product-detail.html?id=${json.id}">
            <h4>${json.title}</h4>
            <p>€${json.price}</p>
          </a></div>
      </div>`;
    }
  });
}

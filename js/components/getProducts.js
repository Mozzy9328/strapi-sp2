import { baseUrl } from "../settings/baseUrl.js";

export async function getProducts(json) {
  const productContainer = document.querySelector(".product-container");

  productContainer.innerHTML = "";

  json.forEach((json) => {
    const strapiImg = baseUrl + json.image.url;

    productContainer.innerHTML += `
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
  });
}

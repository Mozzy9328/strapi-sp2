import { url } from "../settings/baseUrl.js";

export async function getProducts(json) {
  console.log(json);

  const productContainer = document.querySelector(".product-container");

  productContainer.innerHTML = "";

  json.forEach((json) => {
    const allProducts = url + json.image.url;
    productContainer.innerHTML += `
      <div class="product">
        <div class="product-info">
          <div class="product-img" data-id="${json.id}" data-title="${json.title}" style="height:300px !important">
            <img src="${allProducts}"/>
          </div>
          <div class="product-btn"><a href="product-detail.html?id=${json.id}">
            <h4>${json.title}</h4>
            <p>€${json.price}</p>
          </a></div>
      </div>`;
  });
}

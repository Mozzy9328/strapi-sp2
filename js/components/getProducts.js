import { baseUrl } from "../settings/baseUrl.js";

export async function getProducts(json) {
  const productContainer = document.querySelector(".product-container");
  const webProductContainer = document.querySelector(".webproduct-container");

  productContainer.innerHTML = "";
  webProductContainer.innerHTML = "";

  json.forEach((json) => {
    if (json.image) {
      const strapiImg = baseUrl + json.image.url;
      productContainer.innerHTML += `
      <div class="product">
      <a href="product-detail.html?id=${json.id}">
        <div class="product-info">
          <div class="product-img" style="height:300px !important">
          <img src="${strapiImg}"/>
          </div>
          <div class="product-btn">
            <h4>${json.title}</h4>
            <p>€${json.price}</p>
          </div>
      </a>    
      </div>`;
    } else {
      const strapiImg2 = json.image_url;

      webProductContainer.innerHTML += `
      <div class="product">
      <a href="product-detail.html?id=${json.id}">
        <div class="product-info">
          <div class="product-img" style="height:300px !important">
          <img src="${strapiImg2}"/>
          </div>
          <div class="product-btn">
            <h4>${json.title}</h4>
            <p>€${json.price}</p>
          </div>
      </a>    
      </div>`;
    }
  });
}

getProducts();

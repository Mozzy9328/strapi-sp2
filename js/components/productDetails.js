import { url } from "../settings/baseUrl.js";

const detailContainer = document.querySelector(".pd-detail-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const queryUrl = url + "/products/" + id;

export async function fetchProduct() {
  try {
    const response = await fetch(queryUrl);
    const detail = await response.json();

    console.log(detail);

    const allProducts = url + detail.image.url;

    detailContainer.innerHTML += `
        <div class="pd-img">
            <img src="${allProducts}"style="margin: 0 auto"/>
        </div>
        <div>
            <div class="pd-title">
                <h1>${detail.title}</h1>
                <h2>€${detail.price}</h2>
            </div>
            <div class="pd-description">
                <p>${detail.description}</p>
            </div>
            <div class="pd-btn">
                <a href="">Add To Cart</a>
                <a href="products.html">Continue Shopping</a>
            </div>
        </div>
    `;
  } catch (error) {
    console.log(error);
  }
}

fetchProduct();

import { getFromStorage } from "./localStorage.js";
import { theKey } from "../settings/theKey.js";
import { url } from "../settings/baseUrl.js";

const theCart = getFromStorage(theKey);
const cartContainer = document.querySelector(".the-product-list");

theCart.forEach((products) => {
  const allProducts = url + products.image;
  cartContainer.innerHTML += `
    <div class="product-group">
        <div class="pl-img">
            <img src="${allProducts}"/>
        </div>
        <div class="pl-title">
            <h2>${products.title}</h1>
            <h3>€${products.price}</h2>
            <p>Q: ${products.quantity}</p>
           <a href="product-detail.html?id=${products.id}" <button> View Product </button></a>
        </div>
    </div>
    `;
  sumTotal(products);
});

function sumTotal(product) {
  const sum = document.querySelector(".sum");

  sum.innerHTML = "Sum:" + "" + product.quantity * product.price;
}

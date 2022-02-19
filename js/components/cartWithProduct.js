import { getFromStorage } from "./localStorage.js";
import { theKey } from "../settings/theKey.js";
// import { url } from "../settings/baseUrl.js";

const theCart = getFromStorage(theKey);

const theProductList = document.querySelector(".the-product-list");
const cartContainer = document.querySelector(".cart-container");

if (!theCart.length) {
  cartContainer.innerHTML = `
  <div style="display:flex; flex-direction:column; text-align:center">
    <p>There is no item added yet</p>
    <a href="products.html" <button class="btn"> Continue Shopping </button></a>
  </div>

  `;
} else {
  theCart.forEach((products) => {
    console.log(products);
    const allProducts = products.image;
    theProductList.innerHTML += `
    <div class="product-group">
        <div class="pl-img">
            <img src="${allProducts}"/>
        </div>
        <div class="pl-title">
            <h2>${products.title}</h1>
            <h3>€${products.price}</h2>
           <a href="product-detail.html?id=${products.id}" <button> View Product </button></a>
        </div>
        <div>
          <span class="remove-btn">
              <i class="fa-solid fa-circle-minus"></i>
          </span>
        </div>
    </div>
    `;
    const sumValue = document.querySelector(".sum");
    let total = 0;

    const price = parseInt(products.price);
    // total = total + price;
    console.log(typeof total);

    sumValue.innerHTML += `${total}`;
  });
}

const removeButton = document.querySelectorAll(".remove-btn");

function removeWishList() {
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", function (event) {
      event.target.style.display = "none";
      localStorage.clear(theKey);
      cartContainer.innerHTML = `<p>There is no item added yet</p>`;
    });
  }
}

removeWishList();

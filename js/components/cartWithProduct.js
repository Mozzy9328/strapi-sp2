import { getFromStorage } from "./localStorage.js";
import { theKey } from "../settings/theKey.js";
import { numberOfItems } from "./numberOfItems.js";
numberOfItems();

const theCart = getFromStorage(theKey);
console.log(theCart);

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
  });
}

// TotalSum
(function getTotalSum() {
  let total = 0;

  theCart.forEach((products) => {
    const sumValue = document.querySelector(".sum");

    total += parseFloat(products.price);

    // console.log(typeof total);

    return (sumValue.innerHTML = `Sum: €${total}  `);
  });
})();

// REMOVE BUTTON
const removeButton = document.querySelectorAll(".remove-btn");

function removeWishList() {
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", function (event) {
      event.target.style.display = "none";
      localStorage.removeItem(theKey);
      localStorage.removeItem("count");
      cartContainer.classList.replace("noitem");
      cartContainer.innerHTML = `
      <div class="noitem">
        <p>There is no item added yet</p>
        <a href="products.html" <button class="btn"> Continue Shopping </button></a>
      </div>`;
    });
  }
}

removeWishList();

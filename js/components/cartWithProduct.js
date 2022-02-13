import { getFromStorage } from "./localStorage.js";
import { theKey } from "../settings/theKey.js";
// import { url } from "../settings/baseUrl.js";

const theCart = getFromStorage(theKey);

const cartContainer = document.querySelector(".the-product-list");
theCart.forEach((products) => {
  console.log(products);
  const allProducts = products.image;
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
        <div>
          <span class="remove-btn">
              <i class="fa-solid fa-circle-minus"></i>
          </span>
        </div>
    </div>
    `;
  sumTotal(products);
});

function sumTotal(item) {
  let cartCost = localStorage.getItem("totalCost");
  let itemPrice = item.price;

  if (cartCost !== null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + +itemPrice);
  } else {
    localStorage.setItem("totalCost", itemPrice);
  }
  const sum = document.querySelector(".sum");

  sum.innerHTML = "Sum:" + "" + cartCost;
}

const removeButton = document.querySelectorAll(".remove-btn");
for (let i = 0; i < removeButton.length; i++) {
  const btn = removeButton[i];

  btn.addEventListener("click", function (event) {
    btn.parentElement.parentElement.remove();
    console.log(event.target);
  });
}

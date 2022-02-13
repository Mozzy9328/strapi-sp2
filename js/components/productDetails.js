import { url } from "../settings/baseUrl.js";
import { theKey } from "../settings/theKey.js";
import { getFromStorage, saveToStorage } from "../components/localStorage.js";

const detailContainer = document.querySelector(".pd-detail-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

// console.log(id);

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
                <a id="add-to-cart" data-id="${detail.id}" data-title="${detail.title}" data-price="${detail.price}" data-img="${detail.image.url}" >Add To Cart</a>
                <a href="products.html">Continue Shopping</a>
            </div>
        </div>
    `;

    const addToCart = document.querySelector("#add-to-cart");
    const numberOfItems = document.querySelector(".numberofitems");

    addToCart.addEventListener("click", handleClick);

    function handleClick() {
      // let productItem = localStorage.getItem("product");
      // productItem = parseInt(productItem);

      const dataId = this.dataset.id;
      const dataTitle = this.dataset.title;
      const dataPrice = this.dataset.price;
      const dataImg = url + this.dataset.img;
      const quantity = 1;

      const currentProducts = getFromStorage(theKey);
      const productExist = currentProducts.findIndex(function (products) {
        return products.title === dataTitle;
      });

      if (productExist) {
        const products = {
          id: dataId,
          title: dataTitle,
          price: dataPrice,
          image: dataImg,
          quantity: quantity,
        };
        currentProducts.push(products);
        saveToStorage(theKey, currentProducts);
      } else {
        const newProducts = currentProducts.filter(
          (products) => products.id !== id
        );
        saveToStorage(theKey, newProducts);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
fetchProduct();

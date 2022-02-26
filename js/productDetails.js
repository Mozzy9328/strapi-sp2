import { baseUrl } from "./settings/baseUrl.js";
import { theKey } from "./settings/theKey.js";
import { getFromStorage, saveToStorage } from "./components/localStorage.js";
import { numberOfItems } from "./components/numberOfItems.js";

numberOfItems();

const detailContainer = document.querySelector(".pd-detail-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

// console.log(id);

const queryUrl = baseUrl + "/products/" + id;

export async function fetchProduct() {
  try {
    const response = await fetch(queryUrl);
    const detail = await response.json();
    console.log(detail);

    detailContainer.innerHTML = "";
    if (detail.image_url) {
      const webProducts = detail.image_url;

      detailContainer.innerHTML = `
    <div class="pd-img">
        <img src="${webProducts}"style="margin: 0 auto"/>
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
            <a id="add-to-cart" data-id="${detail.id}" data-title="${detail.title}" data-price="${detail.price}" data-img2="${detail.image_url}" >Add To Cart</a>
            <a href="products.html">Continue Shopping</a>
        </div>
    </div>
`;
    }

    if (detail.image.url) {
      const storeProducts = baseUrl + detail.image.url;

      detailContainer.innerHTML = `
        <div class="pd-img">
            <img src="${storeProducts}"style="margin: 0 auto"/>
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
    }

    const addToCart = document.querySelector("#add-to-cart");
    const numberOfItems = document.querySelector(".numberofitems");

    addToCart.addEventListener("click", handleClick);

    let count = "0";
    function handleClick() {
      count++;
      numberOfItems.innerHTML = +`${count}`;
      saveToStorage("count", count);

      // let productItem = localStorage.getItem("product");
      // productItem = parseInt(productItem);

      const dataId = this.dataset.id;
      const dataTitle = this.dataset.title;
      const dataPrice = this.dataset.price;
      const dataImg = baseUrl + this.dataset.img;

      const currentProducts = getFromStorage(theKey);
      const productExist = currentProducts.find(function (products) {
        return products.id === dataId;
      });

      if (!productExist) {
        const products = {
          id: dataId,
          title: dataTitle,
          price: dataPrice,
          image: dataImg,
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

import { getProducts } from "./getProducts.js";

export function filterFunction(data) {
  const filter = document.querySelector("#search-box");
  const mainProductContainer = document.querySelector(
    ".main-product-container"
  );
  const productCont = document.querySelector(".product-container");
  // const webProductCont = document.querySelector(".webproduct-container");

  filter.addEventListener("keyup", function () {
    const filterValue = this.value.trim().toLowerCase();

    let filteredProducts = data.filter(function (product) {
      if (product.title.toLowerCase().startsWith(filterValue)) {
        return true;
      }
    });

    getProducts(filteredProducts);
  });
}

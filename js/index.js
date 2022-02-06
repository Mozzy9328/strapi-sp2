import { url } from "./settings/baseUrl.js";
import { getProducts } from "./components/getProducts.js";
import { getFeaturedProducts } from "./components/getFeaturedProducts.js";
import { filterFunction } from "./components/filterFunction.js";
import { fetchProduct } from "./components/productDetails.js";

(async function getHtml() {
  const productUrl = url + "/products";
  const response = await fetch(productUrl);
  const json = await response.json();
  getProducts(json);
  getFeaturedProducts(json);
  filterFunction(json);
  fetchProduct();
})();

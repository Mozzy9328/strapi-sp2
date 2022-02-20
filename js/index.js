import { baseUrl } from "./settings/baseUrl.js";
import { getProducts } from "./components/getProducts.js";
import { getFeaturedProducts } from "./components/getFeaturedProducts.js";
import { filterFunction } from "./components/filterFunction.js";

(async function getHtml() {
  const productUrl = baseUrl + "/products";
  const response = await fetch(productUrl);
  const json = await response.json();
  getFeaturedProducts(json);
  getProducts(json);
  filterFunction(json);
})();

import { getProducts } from "../components/getProducts.js";

export function filterFunction(data) {
  const filter = document.querySelector("#search-box");

  filter.addEventListener("keyup", function () {
    const filterValue = this.value.trim().toLowerCase();
    console.log(filterValue);

    const filteredArticle = data.filter(function (data) {
      if (data.title.toLowerCase().startsWith(filterValue)) {
        return true;
      }
    });
    getProducts(filteredArticle);
  });
}

import { getFromStorage } from "./localStorage.js";

export function numberOfItems() {
  const numberOfItems = document.querySelector(".numberofitems");

  const theCount = getFromStorage("count");

  numberOfItems.innerHTML = `${theCount}`;
}

import { getToken } from "./components/localStorage.js";
import { createNav } from "./components/createNav.js";
import { displayMessage } from "./components/displayMessage.js";
import { url } from "./settings/baseUrl.js";

const token = getToken();

// if (!token) {
//   location.href = "/";
// }

const form = document.querySelector("form");
const productName = document.querySelector("#name");
const productPrice = document.querySelector("#price");
const productDescription = document.querySelector("#description");
const productImg = document.querySelector("#image-url");
const productFeature = document.querySelector("#featured");

createNav();

form.addEventListener("submit", additem);

function additem(event) {
  event.preventDefault();

  const productNameValue = productName.value.trim();
  const priceValue = parseFloat(productPrice.value);
  const descriptionValue = productDescription.value.trim();
  const urlValue = productImg.value.trim();
  const featured = productFeature.checked;

  if (
    productNameValue.length === 0 ||
    (priceValue === 0 && isNaN(priceValue)) ||
    descriptionValue.length === 0 ||
    urlValue.length === 0
  ) {
    return displayMessage("error", "Fill the blanks", ".message");
  }
  retriveProducts(
    productNameValue,
    priceValue,
    descriptionValue,
    urlValue,
    featured
  );
}

async function retriveProducts(name, price, description, imageUrl, featured) {
  const retriveUrl = url + "/products";

  const data = JSON.stringify({
    data: {
      title: name,
      price: price,
      description: description,
      image_url: imageUrl,
      featured: featured,
    },
  });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(retriveUrl, options);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

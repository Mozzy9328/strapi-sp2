import { getToken } from "./components/localStorage.js";
import { createNav } from "./components/createNav.js";
import { displayMessage } from "./components/displayMessage.js";
import { baseUrl } from "./settings/baseUrl.js";
import { logOutButton } from "./login.js";
createNav();
logOutButton();

const token = getToken();

if (!token) {
  location.href = "/";
}

const message = document.querySelector(".message");
const form = document.querySelector("form");
const productName = document.querySelector("#name");
const productPrice = document.querySelector("#price");
const productDescription = document.querySelector("#description");
const productFeature = document.querySelector("#featured");
const productId = document.querySelector("#id");
const productUrl = document.querySelector("#image-url");

form.addEventListener("submit", additem);

function additem(event) {
  event.preventDefault();

  productId.style.display = "block";

  const productNameValue = productName.value.trim();
  const priceValue = parseFloat(productPrice.value);
  const descriptionValue = productDescription.value.trim();
  const urlValue = productUrl.value;
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
  displayMessage("success", "The item has been added", ".message");
}

async function retriveProducts(name, price, description, image, featured) {
  const retriveUrl = baseUrl + "/products";

  let newData = JSON.stringify({
    title: name,
    price: price,
    description: description,
    image_url: image,
    featured: featured,
  });

  const options = {
    method: "POST",
    body: newData,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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

//DELETE FUNCTION

function deleteButton() {
  const inputId = document.querySelector("#id");
  const deleteBtn = document.querySelector("button.delete");

  message.innerHTML = "";

  deleteBtn.addEventListener("click", async function () {
    const idValue = inputId.value.trim();

    if (idValue.length > 0) {
      console.log(idValue);
      const doDelete = confirm(`Is this the RIGHT product id ${idValue}?`);

      if (doDelete) {
        const retriveUrl2 = baseUrl + "/products/" + idValue;

        const options2 = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        try {
          const response = await fetch(retriveUrl2, options2);
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.log(error);
        }
      }
      displayMessage("success", "The item has been removed", ".message");
    } else {
      displayMessage("warning", "Insert an Id number", ".message");
    }
  });
}

deleteButton();

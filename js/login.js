import { baseUrl } from "./settings/baseUrl.js";
import { createNav } from "./components/createNav.js";
import { displayMessage } from "./components/displayMessage.js";
import {
  saveToken,
  saveUser,
  tokenKey,
  userKey,
} from "./components/localStorage.js";

createNav();

const message = document.querySelector(".message");
const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const userValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (userValue.length === 0 || passwordValue === 0) {
    return displayMessage("warning", "insert valid credentials", ".message");
  }
  fetchCredentials(userValue, passwordValue);
}

async function fetchCredentials(username, password) {
  const credUrl = baseUrl + "/auth/local";

  const credData = JSON.stringify({
    identifier: username,
    password: password,
  });
  const options = {
    method: "POST",
    body: credData,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(credUrl, options);
    const json = await response.json();
    console.log(json);

    if (json.error) {
      displayMessage("error", json.message[0].messages[0].message, ".message");
    }
    if (json.user.confirmed) {
      displayMessage("success", "success", ".message");
      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "/";
    }
  } catch (error) {
    console.log(error);
  }
}
// Log Out

export function logOutButton() {
  const logOutBtn = document.querySelector("#logout");

  if (logOutBtn) {
    logOutBtn.addEventListener("click", function () {
      const logOutQuestion = confirm("are you sure you want to logout?");

      if (logOutQuestion === true) {
        localStorage.removeItem(tokenKey);
        localStorage.removeItem(userKey);
      }
    });
  }
}

logOutButton();

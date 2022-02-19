import { getUser } from "./localStorage.js";

export function createNav() {
  const { pathname } = document.location;
  const username = getUser();

  const nav = document.querySelector("nav ul");

  let authLink = `
<a href="login.html" class="${
    pathname === "/login.html" ? "active" : ""
  }"><i class="fa-solid fa-right-to-bracket"></i
></a>

`;

  if (username) {
    authLink = `<a href="add-product.html" class="${
      pathname === "/add-product.html" ? "active" : ""
    }">Add Products</a>
  <button id="logout">Logout: ${username}</button> `;
  }

  nav.innerHTML = `
            <li class="logo">
                <img src="/public/uploads/logo.png" alt="a logo of the company" />
            </li>
            <li>
                <a href="index.html" class="${
                  pathname === "/" || pathname === "/index.html" ? "active" : ""
                }">Home</a></li>
            <li>
                <a href="products.html"class="${
                  pathname === "/" || pathname === "/products.html"
                    ? "active"
                    : ""
                }">Products</a></li>
           
            ${authLink}

`;
}

import { url } from "../settings/baseUrl.js";

export async function getFeaturedProducts(json) {
  // console.log(json);

  for (let i = 0; i < json.length; i++) {
    const features = document.querySelector(".feature");
    if (json[i].featured) {
      const productImage = url + json[i].image.url;

      console.log(productImage);

      features.innerHTML += `
      <div class="product">
        <div class="product-info">
          <div class="product-img"/>
            <img src="${productImage}">
          </div>
          <div class="product-btn"><a href="product-detail.html?id=${json[i].id}">
            <h4>${json[i].title}</h4>
            <p>${json[i].price}</p>
            </a></div>
        </div>

      </div>`;
    }
  }
}

// for (let i = 0; i < json.length; i++) {
//   if (json[i].featured) {
//     const img = document.querySelectorAll(".img");

//     for (let i = 0; i < img.length; i++) {
//       console.log(img[i]);

//       img[i].style.backgroundImage = `url("${url + json[i].image.url}")`;
//     }

// const featuredProduct = url + json[i].image.url;

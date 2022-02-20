import { baseUrl } from "../settings/baseUrl.js";

export async function getFeaturedProducts(json) {
  console.log(json);

  for (let i = 0; i < json.length; i++) {
    const features = document.querySelector(".feature");
    const { url } = json[i].image;
    const { image_url } = json[i];
    const imgUrl = baseUrl + url;
    // console.log(imgUrl.value);
    console.log(image_url);

    if (json[i].featured) {
      features.innerHTML += `
      <div class="product">
        <div class="product-info">
          
          <div class="product-btn"><a href="product-detail.html?id=${
            json[i].id
          }">
          <div class="product-img"/>
            <img src="${imgUrl || image_url}">
          </div>
            <h4>${json[i].title}</h4>
            <p>€${json[i].price}</p>
            </a></div>
        </div>

      </div>`;
    }
  }
}

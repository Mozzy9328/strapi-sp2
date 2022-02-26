import { baseUrl } from "../settings/baseUrl.js";

export async function getFeaturedProducts(json) {
  console.log(json);

  const features = document.querySelector(".feature");
  features.innerHTML = "";

  for (let i = 0; i < json.length; i++) {
    if (json[i].featured && json[i].image_url) {
      const image_url = json[i].image_url;
      features.innerHTML += `
        <div class="product">
          <div class="product-info">
            
            <div class="product-btn"><a href="product-detail.html?id=${json[i].id}">
            <div class="product-img"/>
              <img src="${image_url}">
            </div>
              <h4>${json[i].title}</h4>
              <p>€${json[i].price}</p>
              </a></div>
          </div>
  
        </div>`;
    }
    if (json[i].featured && json[i].image.url) {
      const imgUrl = baseUrl + json[i].image.url;
      features.innerHTML += `
      <div class="product">
        <div class="product-info">
          
          <div class="product-btn"><a href="product-detail.html?id=${json[i].id}">
          <div class="product-img"/>
            <img src="${imgUrl}">
          </div>
            <h4>${json[i].title}</h4>
            <p>€${json[i].price}</p>
            </a></div>
        </div>

      </div>`;
    }
  }
}

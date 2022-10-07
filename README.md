# Sunny Daises

![image](https://steady-donut-7290b4.netlify.app/public/uploads/jakob_owens_Jz_J_Syb_P_Fb3s_unsplash_0840f6de0c.jpg)

An e-commerce website that has both customer-facing and admin sections. Both sections are responsive and the website are populated by a Strapi API supplied by Noroff.

## Description

Customer-facing pages:

Home page
The home page includes:

- A hero banner with an image that is uploaded to Strapi.

- A list of featured products.

Products page
The products page includes:

- A list of all products added to Strapi. Each product displays title, price and image. The product also links to its products detail page.

- A search text box. When searching (filtering), only the products that include the searched text in their title or description will be listed.

Product details page
This page is reached by a user clicking on a product on the product list page.
The product details includes:

- title
- description
- image
- price
- an add to cart button. This will toggle the product in and out of a cart array stored in local storage.
- Cart/Basket page
- The cart/basket page displays a list of all products added to the cart.

Each product in the cart displays:

- title
- price
- a link to the product view page
- image
- The total price of all the products in the cart.

Admin section
The admin section (apart from the log in form) is only accessible to be logged in by the admin users and includes the following features:

- Login/Logout
  A login form that allows administrator users to login.

- Add/edit products
  Form(s) that allows products to be added and edited.

- Product images
  For adding/editing product images

- Delete existing product
  Allow products to be deleted.

## Built With

You can list a the tech stack that you've used over here

- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [Sass] (https://sass-lang.com/)

## Getting Started

# Strapi Project

To run the project:

```
npm install
npm run develop
```

The admin panel will open at `http://localhost:1337/admin`.

If you get a warning about not being able to use port 1337, check that no other Strapi instances are running in another command line or terminal.

### Installing

1. Clone the repo:

```bash
git clone gh repo clone Mozzy9328/strapi-sp2
```

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Contact

[My LinkedIn page](www.linkedin.com/in/msalesforce)

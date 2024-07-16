// Product.js
// import React from "react";
// import "./Product.css"; // Ensure you have this CSS file for styling

// const Product = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} className="product-img" />
//       <h3 className="product-title">{product.name}</h3>
//       <div className="product-prices">
//         {product.prices.map((price, index) => (
//           <div key={index} className="price-info">
//             <img src={price.seller_logo} alt="Seller" className="seller-logo" />
//             <div>
//               <p>Price: {price.price}</p>
//               <p>Discount: {price.discount ? price.discount : "N/A"}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;

import React, { useEffect, useRef } from "react";
import jacketImage from "../images/products/jack.jpg";
import jacketImage1 from "../images/products/jack-2.jpg";
import shirt from "../images/products/jackk.jpg";
import shirt1 from "../images/products/jackk-2.jpg";
import jack3 from "../images/products/jacket-1.jpg";
import jack4 from "../images/products/jacket-2.jpg";
import jack from "../images/products/blue.jpg";
import jack2 from "../images/products/blue-2.jpg";
import clo from "../images/products/dis.jpg";
import clo2 from "../images/products/dis-2.jpg";
import shoe from "../images/products/shoe-2_1.jpg";
import shoe2 from "../images/products/shoe-2_1.jpg";
import shoe3 from "../images/products/shoe-1.jpg";
import shoe4 from "../images/products/shoe-1_1.jpg";
import watch from "../images/products/watch-3.jpg";
import watch2 from "../images/products/watch-4.jpg";
import watch3 from "../images/products/watch-1.jpg";
import watch4 from "../images/products/watch-2.jpg";
import part from "../images/products/party-wear-1.jpg";
import part2 from "../images/products/party-wear-2.jpg";
import sport from "../images/products/sports-4.jpg";
import sport2 from "../images/products/sports-3.jpg";
import short from "../images/products/shorts-1.jpg";
import short2 from "../images/products/shorts-2.jpg";

const Product = () => {
  return (
    <header>
      {" "}
      <div class="product-main">
        <h2 class="title">New Products</h2>

        <div class="product-grid">
          <div class="showcase">
            <div class="showcase-banner">
              <img
                src={jacketImage}
                alt="Mens Winter Leathers Jackets"
                width="300"
                class="product-img default"
              />
              <img
                src={jacketImage1}
                alt="Mens Winter Leathers Jackets"
                width="300"
                class="product-img hover"
              />

              <p class="showcase-badge">15%</p>

              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div class="showcase-content">
              <a href="#" class="showcase-category">
                jacket
              </a>

              <a href="#">
                <h3 class="showcase-title">Mens Winter Leathers Jackets</h3>
              </a>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$48.00</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <div class="showcase-banner">
              <img
                src={shirt}
                alt="Pure Garment Dyed Cotton Shirt"
                class="product-img default"
                width="300"
              />
              <img
                src={shirt1}
                alt="Pure Garment Dyed Cotton Shirt"
                class="product-img hover"
                width="300"
              />

              <p class="showcase-badge angle black">sale</p>

              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div class="showcase-content">
              <a href="#" class="showcase-category">
                jacket
              </a>

              <h3>
                <a href="#" class="showcase-title">
                  Pure Garment Dyed Cotton Jacket
                </a>
              </h3>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$45.00</p>
                <del>$56.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <div class="showcase-banner">
              <img
                src={jack}
                alt="MEN Yarn Fleece Full-Zip Jacket"
                class="product-img default"
                width="300"
              />
              <img
                src={jack2}
                alt="MEN Yarn Fleece Full-Zip Jacket"
                class="product-img hover"
                width="300"
              />

              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div class="showcase-content">
              <a href="#" class="showcase-category">
                Jacket
              </a>

              <h3>
                <a href="#" class="showcase-title">
                  MEN Yarn Fleece Full-Zip Jacket
                </a>
              </h3>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$58.00</p>
                <del>$65.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <div class="showcase-banner">
              <img
                src={clo}
                alt="Black Floral Wrap Midi Skirt"
                class="product-img default"
                width="300"
              />
              <img
                src={clo2}
                alt="Black Floral Wrap Midi Skirt"
                class="product-img hover"
                width="300"
              />

              <p class="showcase-badge angle pink">new</p>

              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div class="showcase-content">
              <a href="#" class="showcase-category">
                Jacket
              </a>

              <h3>
                <a href="#" class="showcase-title">
                  Pure Garment Dyed Cotton Jacket
                </a>
              </h3>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$25.00</p>
                <del>$35.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <div class="showcase-banner">
              <img
                src={shoe}
                alt="Casual Men's Brown shoes"
                class="product-img default"
                width="300"
              />
              <img
                src={shoe2}
                alt="Casual Men's Brown shoes"
                class="product-img hover"
                width="300"
              />

              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div class="showcase-content">
              <a href="#" class="showcase-category">
                casual
              </a>

              <h3>
                <a href="#" class="showcase-title">
                  Casual Men's Brown shoes
                </a>
              </h3>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$99.00</p>
                <del>$105.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <div class="showcase-banner">
              <img
                src={watch}
                alt="Pocket Watch Leather Pouch"
                class="product-img default"
                width="300"
              />
              <img
                src={watch2}
                alt="Pocket Watch Leather Pouch"
                class="product-img hover"
                width="300"
              />

              <p class="showcase-badge angle black">sale</p>

              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div class="showcase-content">
              <a href="#" class="showcase-category">
                watches
              </a>

              <h3>
                <a href="#" class="showcase-title">
                  Pocket Watch Leather Pouch
                </a>
              </h3>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$150.00</p>
                <del>$170.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <div class="showcase-banner">
              <img
                src={watch3}
                alt="Smart watche Vital Plus"
                class="product-img default"
                width="300"
              />
              <img
                src={watch4}
                alt="Smart watche Vital Plus"
                class="product-img hover"
                width="300"
              />

              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div class="showcase-content">
              <a href="#" class="showcase-category">
                watches
              </a>

              <h3>
                <a href="#" class="showcase-title">
                  Smart watche Vital Plus
                </a>
              </h3>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$100.00</p>
                <del>$120.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <div class="showcase-banner">
              <img
                src={part}
                alt="Womens Party Wear Shoes"
                class="product-img default"
                width="300"
              />
              <img
                src={part2}
                alt="Womens Party Wear Shoes"
                class="product-img hover"
                width="300"
              />

              <p class="showcase-badge angle black">sale</p>

              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div class="showcase-content">
              <a href="#" class="showcase-category">
                party wear
              </a>

              <h3>
                <a href="#" class="showcase-title">
                  Womens Party Wear Shoes
                </a>
              </h3>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$25.00</p>
                <del>$30.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <div class="showcase-banner">
              <img
                src={jack3}
                alt="Mens Winter Leathers Jackets"
                class="product-img default"
                width="300"
              />
              <img
                src={jack4}
                alt="Mens Winter Leathers Jackets"
                class="product-img hover"
                width="300"
              />

              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div class="showcase-content">
              <a href="#" class="showcase-category">
                jacket
              </a>

              <h3>
                <a href="#" class="showcase-title">
                  Mens Winter Leathers Jackets
                </a>
              </h3>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$32.00</p>
                <del>$45.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <div class="showcase-banner">
              <img
                src={sport}
                alt="Trekking & Running Shoes - black"
                class="product-img default"
                width="300"
              />
              <img
                src={sport2}
                alt="Trekking & Running Shoes - black"
                class="product-img hover"
                width="300"
              />

              <p class="showcase-badge angle black">sale</p>

              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div class="showcase-content">
              <a href="#" class="showcase-category">
                sports
              </a>

              <h3>
                <a href="#" class="showcase-title">
                  Trekking & Running Shoes - black
                </a>
              </h3>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$58.00</p>
                <del>$64.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <div class="showcase-banner">
              <img
                src={shoe3}
                alt="Men's Leather Formal Wear shoes"
                class="product-img default"
                width="300"
              />
              <img
                src={shoe4}
                alt="Men's Leather Formal Wear shoes"
                class="product-img hover"
                width="300"
              />

              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div class="showcase-content">
              <a href="#" class="showcase-category">
                formal
              </a>

              <h3>
                <a href="#" class="showcase-title">
                  Men's Leather Formal Wear shoes
                </a>
              </h3>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$50.00</p>
                <del>$65.00</del>
              </div>
            </div>
          </div>

          <div class="showcase">
            <div class="showcase-banner">
              <img
                src={short}
                alt="Better Basics French Terry Sweatshorts"
                class="product-img default"
                width="300"
              />
              <img
                src={short2}
                alt="Better Basics French Terry Sweatshorts"
                class="product-img hover"
                width="300"
              />

              <p class="showcase-badge angle black">sale</p>

              <div class="showcase-actions">
                <button class="btn-action">
                  <ion-icon name="heart-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="eye-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="repeat-outline"></ion-icon>
                </button>

                <button class="btn-action">
                  <ion-icon name="bag-add-outline"></ion-icon>
                </button>
              </div>
            </div>

            <div class="showcase-content">
              <a href="#" class="showcase-category">
                shorts
              </a>

              <h3>
                <a href="#" class="showcase-title">
                  Better Basics French Terry Sweatshorts
                </a>
              </h3>

              <div class="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>

              <div class="price-box">
                <p class="price">$78.00</p>
                <del>$85.00</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Product;

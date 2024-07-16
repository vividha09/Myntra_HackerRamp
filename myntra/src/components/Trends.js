import React from "react";
import "./Trends.css";
import H2 from "../images/H2.jpg";
import H3 from "../images/H3.jpg";
import shampoo from "../images/trend.jpg";
import jewellery from "../images/trend-2.jpg";
import { Link } from "react-router-dom";

const Trends = () => {
  return (
    <header>
      <div className="tagline">
        <h2 className="tagline-text">SHOP WITH CONFIDENCE</h2>
      </div>

      <div className="tagline">
        <h2 className="tagline-text2">
          Let us take care of your shopping decisions
        </h2>

        <h2 className="tagline-text2">
          Unlock the confidence to shop smarter, not harder
        </h2>
      </div>
      <section class="section cta">
        <div class="container">
          <ul class="cta-list">
            <li>
              <div
                class="cta-card"
                // style="background-image: url('./images/H2.jpg')"
                style={{ backgroundImage: `url(${H2})` }}
              >
                {/* <img
                  src={H2}
                  alt="women's latest fashion sale"
                  class="cta-card"
                /> */}
                <p class="card-subtitle">Adidas Shoes</p>

                <h3 class="h2 card-title">The Summer Sale Off 50%</h3>

                <Link to="/products" class="btn btn-link">
                  <span>Shop Now</span>

                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </Link>
              </div>
            </li>

            <li>
              <div class="cta-card" style={{ backgroundImage: `url(${H3})` }}>
                <p class="card-subtitle">SALE</p>

                <h3 class="h2 card-title">Get sales calender!</h3>

                <Link to="/calendar" class="btn btn-link">
                  <span>Click Here</span>
                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section>
        {/* <div className="New" id="achievement">
          <h1>Achievements</h1>
          <Carousel showDots={true} responsive={responsive}>
            {product}
          </Carousel>
        </div> */}{" "}
        <div class="product-featured">
          <h2 className="tagline-text">BE THE TREND SETTER</h2>

          <div class="showcase-wrapper has-scrollbar">
            <div class="showcase-container">
              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={shampoo}
                    alt="shampoo, conditioner & facewash packs"
                    class="showcase-img"
                  />
                </div>

                <div class="showcase-content">
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>

                  {/* <a href="#">
                    <h3 class="tagline-text2">
                      BE THE FIRST ONES TO PURCHASE BEFORE SOMETHING GETS TRENDY
                    </h3>
                  </a> */}
                  <div class="showcase-banner">
                    <img
                      src={jewellery}
                      alt="shampoo, conditioner & facewash packs"
                      class="showcase-img"
                    />
                  </div>

                  {/* <p class="showcase-desc">
                    Enjoy up to 10% off Mamaearth Skin & Hair Care products
                    during the Mamaearth lightning sale.
                  </p> */}

                  {/* <div class="price-box">
                    <p class="price">625.00/-</p>

                    <del>700.00</del>
                  </div> */}

                  {/* <button class="add-cart-btn">add to cart</button> */}

                  {/* <div class="showcase-status">
                    <div class="wrapper">
                      <p>
                        already sold: <b>20</b>
                      </p>

                      <p>
                        available: <b>40</b>
                      </p>
                    </div>

                    <div class="showcase-status-bar"></div>
                  </div> */}

                  {/* <div class="countdown-box">
                    <p class="countdown-desc">Hurry Up! Offer ends in:</p>

                    <div class="countdown">
                      <div class="countdown-content">
                        <p class="display-number">2</p>

                        <p class="display-text">Days</p>
                      </div>

                      <div class="countdown-content">
                        <p class="display-number">12</p>
                        <p class="display-text">Hours</p>
                      </div>

                      <div class="countdown-content">
                        <p class="display-number">59</p>
                        <p class="display-text">Min</p>
                      </div>

                      <div class="countdown-content">
                        <p class="display-number">07</p>
                        <p class="display-text">Sec</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* <div class="showcase-container">
              <div class="showcase">
                <div class="showcase-banner">
                  <img
                    src={jewellery}
                    alt="Rose Gold diamonds Earring"
                    class="showcase-img"
                  />
                </div>

                <div class="showcase-content">
                  <div class="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>

                  <h3 class="showcase-title">
                    <a href="#" class="showcase-title">
                      Digital Watch
                    </a>
                  </h3>

                  <p class="showcase-desc">
                    Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                    dolor sit amet consectetur Lorem ipsum dolor
                  </p>

                  <div class="price-box">
                    <p class="price">18,900.00/-</p>
                    <del>20,000.00</del>
                  </div>

                  <button class="add-cart-btn">add to cart</button>

                  <div class="showcase-status">
                    <div class="wrapper">
                      <p>
                        {" "}
                        already sold: <b>15</b>{" "}
                      </p>

                      <p>
                        {" "}
                        available: <b>10</b>{" "}
                      </p>
                    </div>

                    <div class="showcase-status-bar"></div>
                  </div>

                  <div class="countdown-box">
                    <p class="countdown-desc">Hurry Up! Offer ends in:</p>

                    <div class="countdown">
                      <div class="countdown-content">
                        <p class="display-number">1</p>
                        <p class="display-text">Days</p>
                      </div>

                      <div class="countdown-content">
                        <p class="display-number">20</p>
                        <p class="display-text">Hours</p>
                      </div>

                      <div class="countdown-content">
                        <p class="display-number">59</p>
                        <p class="display-text">Min</p>
                      </div>

                      <div class="countdown-content">
                        <p class="display-number">27</p>
                        <p class="display-text">Sec</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </header>
  );
};

export default Trends;

import React from "react";
import "./Header.css";
import Shop from "../images/h1.png";
import Shop2 from "../images/h4.png";
import Shop3 from "../images/h5.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <header>
      <div class="banner">
        <div class="container">
          <div class="slider-container has-scrollbar">
            <div class="slider-item">
              <img
                src={Shop}
                alt="women's latest fashion sale"
                class="banner-img"
              />

              <div class="banner-content">
                <p class="banner-subtitle">JUST SWIPE!</p>

                <h2 class="banner-title">Let us choose your style</h2>

                {/* <p class="banner-text">No reason sale is live!</p> */}

                {/* <a href="#" class="banner-btn">
                  Shop now
                </a> */}
                <Link to="/products" class="banner-btn">
                  Shop Now
                </Link>
              </div>
            </div>

            <div class="slider-item">
              <img
                src={Shop2}
                alt="women's latest fashion sale"
                class="banner-img"
              />

              <div class="banner-content">
                <p class="banner-subtitle">AR TRIAL</p>

                <h2 class="banner-title">Visualise before purchase</h2>

                {/* <p class="banner-text">Visualise befor purchasing</p> */}

                <Link to="/arvr" class="banner-btn">
                  Try AR
                </Link>
              </div>
            </div>

            <div class="slider-item">
              <img
                src={Shop3}
                alt="new fashion summer sale"
                class="banner-img"
              />

              <div class="banner-content">
                <p class="banner-subtitle">Sale Offer</p>

                <h2 class="banner-title">New fashion summer sale</h2>

                <p class="banner-text">
                  {/* starting at &dollar; <b>29</b>.99 */}
                </p>

                <a href="product" class="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;

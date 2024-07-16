// import React, { useState } from "react";
// import "./Header.css";

// const Header = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault(); // Prevent the form from causing a page reload
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/search?search_term=${encodeURIComponent(searchTerm)}`, {
//         method: 'GET',
//       });
//       const data = await response.json();
//       console.log(data); // Process the data as needed
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//     }
//   };
import React from "react";
import "./Header.css";
import logo from "../images/myntra.jpg";

const Header = ({ setSearchTerm }) => {
  const handleSearch = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value; // Get the search term from the input field
    setSearchTerm(searchTerm); // Update the searchTerm in the App component
  };
  const handleMenuItemClick = (term) => {
    setSearchTerm(term); // Set the searchTerm with the clicked term
  };
  return (
    <header>
      <div class="header-main">
        <div class="container">
          <a href="#" class="header-logo">
            <img src={logo} alt="Anon's logo" width="120" height="36" />
          </a>

          <div className="header-search-container">
            <form onSubmit={handleSearch}>
              <input
                type="search"
                name="search"
                className="search-field"
                placeholder="Enter your product name..."
              />
              {/* <button className="search-btn" type="submit">
                <ion-icon name="search-outline"></ion-icon>
              </button> */}
            </form>
          </div>

          {/* <div class="header-user-actions">
            <button class="action-btn">
              <ion-icon name="person-outline"></ion-icon>
            </button>

            <button class="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span class="count">0</span>
            </button>

            <button class="action-btn">
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span class="count">0</span>
            </button>
          </div> */}
        </div>
      </div>

      <nav class="desktop-navigation-menu">
        <div class="container">
          <ul class="desktop-menu-category-list">
            <li class="menu-category">
              <a href="#" class="menu-title">
                Home
              </a>
            </li>

            {/* <li class="menu-category">
              <a href="#" class="menu-title">
                Categories
              </a>

              <div class="dropdown-panel">
                <ul class="dropdown-panel-list">
                  <li class="menu-title">
                    <a href="#">Electronics</a>
                  </li>

                  <li
                    className="panel-list-item"
                    onClick={() => handleMenuItemClick("Desktop")}
                  >
                    Desktop
                  </li>

                  <li
                    className="panel-list-item"
                    onClick={() => handleMenuItemClick("Laptop")}
                  >
                    Laptop
                  </li>

                  <li
                    className="panel-list-item"
                    onClick={() => handleMenuItemClick("Camera")}
                  >
                    Camera
                  </li>

                  <li
                    className="panel-list-item"
                    onClick={() => handleMenuItemClick("Tablet")}
                  >
                    Tablet
                  </li>

                  <li
                    className="panel-list-item"
                    onClick={() => handleMenuItemClick("Headphone")}
                  >
                    Headphone
                  </li>

                  <li class="panel-list-item">
                    <a href="#">
                      <img src="./assets/images/electronics-banner-1.jpg" alt="headphone collection" width="250" height="119">
                    </a>
                  </li>
                </ul>
              </div>
            </li> */}

            <li class="menu-category">
              <a href="#" class="menu-title">
                Men's
              </a>

              <ul class="dropdown-list">
                <li class="dropdown-item">
                  <a href="#">Shirt</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Shorts & Jeans</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Safety Shoes</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Wallet</a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">
                Women's
              </a>

              <ul class="dropdown-list">
                <li class="dropdown-item">
                  <a href="#">Dress & Frock</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Earrings</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Necklace</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Makeup Kit</a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">
                Kids
              </a>

              <ul class="dropdown-list">
                <li class="dropdown-item">
                  <a href="#">Earrings</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Couple Rings</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Necklace</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Bracelets</a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">
                Beauty
              </a>

              <ul class="dropdown-list">
                <li class="dropdown-item">
                  <a href="#">Clothes Perfume</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Deodorant</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Flower Fragrance</a>
                </li>

                <li class="dropdown-item">
                  <a href="#">Air Freshener</a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">
                Studio
              </a>
            </li>

            <li class="menu-category">
              <a href="#" class="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="mobile-bottom-navigation">
        <button class="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <button class="action-btn">
          <ion-icon name="bag-handle-outline"></ion-icon>

          <span class="count">0</span>
        </button>

        <button class="action-btn">
          <ion-icon name="home-outline"></ion-icon>
        </button>

        <button class="action-btn">
          <ion-icon name="heart-outline"></ion-icon>

          <span class="count">0</span>
        </button>

        <button class="action-btn" data-mobile-menu-open-btn>
          <ion-icon name="grid-outline"></ion-icon>
        </button>
      </div>

      <nav class="mobile-navigation-menu  has-scrollbar" data-mobile-menu>
        <div class="menu-top">
          <h2 class="menu-title">Menu</h2>

          <button class="menu-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul class="mobile-menu-category-list">
          <li class="menu-category">
            <a href="#" class="menu-title">
              Home
            </a>
          </li>

          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Men's</p>

              <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
              </div>
            </button>

            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Shirt
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Shorts & Jeans
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Safety Shoes
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Wallet
                </a>
              </li>
            </ul>
          </li>

          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Women's</p>

              <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
              </div>
            </button>

            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Dress & Frock
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Earrings
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Necklace
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Makeup Kit
                </a>
              </li>
            </ul>
          </li>

          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Jewelry</p>

              <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
              </div>
            </button>

            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Earrings
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Couple Rings
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Necklace
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Bracelets
                </a>
              </li>
            </ul>
          </li>

          <li class="menu-category">
            <button class="accordion-menu" data-accordion-btn>
              <p class="menu-title">Perfume</p>

              <div>
                <ion-icon name="add-outline" class="add-icon"></ion-icon>
                <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
              </div>
            </button>

            <ul class="submenu-category-list" data-accordion>
              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Clothes Perfume
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Deodorant
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Flower Fragrance
                </a>
              </li>

              <li class="submenu-category">
                <a href="#" class="submenu-title">
                  Air Freshener
                </a>
              </li>
            </ul>
          </li>

          <li class="menu-category">
            <a href="#" class="menu-title">
              Blog
            </a>
          </li>

          <li class="menu-category">
            <a href="#" class="menu-title">
              Hot Offers
            </a>
          </li>
        </ul>

        <div class="menu-bottom">
          <ul class="menu-category-list">
            <li class="menu-category">
              <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Language</p>

                <ion-icon
                  name="caret-back-outline"
                  class="caret-back"
                ></ion-icon>
              </button>

              <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                  <a href="#" class="submenu-title">
                    English
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="#" class="submenu-title">
                    Espa&ntilde;ol
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="#" class="submenu-title">
                    Fren&ccedil;h
                  </a>
                </li>
              </ul>
            </li>

            <li class="menu-category">
              <button class="accordion-menu" data-accordion-btn>
                <p class="menu-title">Currency</p>
                <ion-icon
                  name="caret-back-outline"
                  class="caret-back"
                ></ion-icon>
              </button>

              <ul class="submenu-category-list" data-accordion>
                <li class="submenu-category">
                  <a href="#" class="submenu-title">
                    USD &dollar;
                  </a>
                </li>

                <li class="submenu-category">
                  <a href="#" class="submenu-title">
                    EUR &euro;
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul class="menu-social-container">
            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiLocationPin } from "react-icons/tfi";
import { FiSearch, FiUser } from "react-icons/fi";
import { BsTelephone, BsCart3, BsChevronDown } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";

const MainHeader = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  return (
    <>
      <header className="pb-md-3">

        {/* <div className="header-top">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-xxl-6 col-lg-9 d-lg-block d-none">
                <div className="header-offer">
                  <div className="notification-slider">
                    <div>
                      <div className="timer-notification">
                        <h6><strong className="me-1">Welcome to Fastkart!</strong>Wrap new offers/gift
                          every signle day on Weekends.<strong className="ms-1">New Coupon Code: Fast024
                          </strong>
                        </h6>
                      </div>
                    </div>
                    <div>
                      <div className="timer-notification">
                        <h6>Something you love is now on sale!
                          <a href="shop-left-sidebar.html" className="text-white">Buy Now
                            !</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <ul className="about-list right-nav-about">
                  <li className="right-nav-list">
                    <div className="dropdown theme-form-select">
                      <button className="btn dropdown-toggle" type="button" id="select-language" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="assets/images/country/flag.png" className="img-fluid blur-up lazyload" alt="invalid" />
                        <span>INDIA</span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="select-language">
                        <li>
                          <a className="dropdown-item" href="#" id="english">
                            <img src="../assets/images/country/united-kingdom.png" className="img-fluid blur-up lazyload" alt />
                            <span>English</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#" id="france">
                            <img src="../assets/images/country/germany.png" className="img-fluid blur-up lazyload" alt />
                            <span>Germany</span>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#" id="chinese">
                            <img src="../assets/images/country/turkish.png" className="img-fluid blur-up lazyload" alt />
                            <span>Turki</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="right-nav-list">
                    <div className="dropdown theme-form-select">
                      <button className="btn dropdown-toggle" type="button" id="select-dollar" data-bs-toggle="dropdown" aria-expanded="false">
                        <span>INR</span>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end sm-dropdown-menu" aria-labelledby="select-dollar">
                        <li>
                          <a className="dropdown-item" id="aud" href="javascript:void(0)">AUD</a>
                        </li>
                        <li>
                          <a className="dropdown-item" id="eur" href="javascript:void(0)">EUR</a>
                        </li>
                        <li>
                          <a className="dropdown-item" id="cny" href="javascript:void(0)">CNY</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}

        {/* =============header top start===================== */}
        <div className="top-nav top-header sticky-header">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="navbar-top">
                  <Link to="/" className="web-logo nav-logo">
                    <img
                      src="../assets/images/logo/logo.jpg"
                      className="img-fluid blur-up lazyload"
                      alt="invalid"
                    />
                  </Link>

                  {/* ============middle start============== */}
                  <div className="middle-box dextop">
                    <div className="location-box">
                      <button
                        className="btn location-button"
                        
                      >

                        <span className="location-arrow">
                          <TfiLocationPin />
                        </span>
                        <span className="locat-name">Your Location</span>
                        <i className="fa-solid fa-angle-down" />
                      </button>
                     
                    </div>
                    <div className="search-box">
                      <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="I'm searching for..."
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          className="btn"
                          type="button"
                          id="button-addon2"
                        >
                          <FiSearch />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* ============middle end============== */}

                  <div className="rightside-box">
                    <div className="search-full">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FiSearch />
                        </span>
                        <input
                          type="text"
                          className="form-control search-type"
                          placeholder="Search here.."
                        />
                        <span className="input-group-text close-search">
                          <i data-feather="x" className="font-light" />
                        </span>
                      </div>
                    </div>
                    <ul className="right-side-menu">
                      <li className="right-side">
                        <div className="delivery-login-box">
                          <div className="delivery-icon">
                            <div className="search-box">
                              <i data-feather="search" />
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="right-side">
                        <Link to="" className="delivery-login-box">
                          <div className="delivery-icon">
                            <BsTelephone />
                          </div>
                          <div className="delivery-detail">
                            <h6>24/7 Delivery</h6>
                            <h5>+91 888 104 2340</h5>
                          </div>
                        </Link>
                      </li>
                      <li className="right-side">
                        <Link to="/wishlist" className="btn p-0 position-relative header-wishlist">
                          <FaRegHeart />
                        </Link>
                      </li>
                      <li className="right-side">
                        <Link to="/cart">
                        <div className="onhover-dropdown header-badge">
                          <button
                            type="button"
                            className="btn p-0 position-relative header-wishlist"
                          >
                            <BsCart3 />
                          </button>
                          {/* <div className="onhover-div">
                            <ul className="cart-list">
                              <li className="product-box-contain">
                                <div className="drop-cart">
                                  <a className="drop-image">
                                    <img
                                      src="../assets/images/vegetable/product/1.png"
                                      className="blur-up lazyload"
                                      alt
                                    />
                                  </a>
                                  <div className="drop-contain">
                                    <a>
                                      <h5>
                                        Fantasy Crunchy Choco Chip Cookies
                                      </h5>
                                    </a>
                                    <h6>
                                      <span>1 x</span> ₹80.58
                                    </h6>
                                    <button className="close-button close_button">
                                      <i className="fa-solid fa-xmark" />
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li className="product-box-contain">
                                <div className="drop-cart">
                                  <a className="drop-image">
                                    <img
                                      src="../assets/images/vegetable/product/2.png"
                                      className="blur-up lazyload"
                                      alt
                                    />
                                  </a>
                                  <div className="drop-contain">
                                    <a>
                                      <h5>
                                        Peanut Butter Bite Premium Butter
                                        Cookies 600 g
                                      </h5>
                                    </a>
                                    <h6>
                                      <span>1 x</span> ₹25.68
                                    </h6>
                                    <button className="close-button close_button">
                                      <i className="fa-solid fa-xmark" />
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="price-box">
                              <h5>Total :</h5>
                              <h4 className="theme-color fw-bold">₹106.58</h4>
                            </div>
                            <div className="button-group">
                              <a className="btn btn-sm cart-button">
                                View Cart
                              </a>
                              <a
                                className="btn btn-sm cart-button theme-bg-color
                                              text-white"
                              >
                                Checkout
                              </a>
                            </div>
                          </div> */}
                        </div>
                        </Link>
                      </li>
                      <li className="right-side onhover-dropdown">
                        <div className="delivery-login-box">
                          <div className="delivery-icon">
                            <FiUser />
                          </div>
                          <div className="delivery-detail">
                            <h6>Hello,</h6>
                            <h5>My Account</h5>
                          </div>
                        </div>
                        <div className="onhover-div onhover-div-login">
                          <ul className="user-box-name">
                            <li className="product-box-contain">
                              <Link to="/login">Log In</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                 <div className="navbar-top ">
                   <div className="middle-box mobile mt-2 ">
                    <div className="location-box">
                      <button
                        className="btn location-button"
                        data-bs-toggle="modal"
                        data-bs-target="#locationModal"
                      >
                        <span className="location-arrow">
                          <TfiLocationPin />
                        </span>
                        <span className="locat-name">Your Location</span>
                        {/* <i className="fa-solid fa-angle-down" /> */}
                      </button>
                    </div>
                    <div className="search-box">
                      <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="I'm searching for..."
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          className="btn"
                          type="button"
                          id="button-addon2"
                        >
                          <FiSearch />
                        </button>
                      </div>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/* =============header top end===================== */}
      </header>

      {/* ======mobile menu start====== */}
      <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul>
          <li className="active">
            <Link to="/">
              <CiHome className=" icli" />
              <span>Home</span>
            </Link>
          </li>
          <li className="mobile-category">
            <a>
              <BiCategoryAlt className="iconly-Category icli js-link" />
              <span>Category</span>
            </a>
          </li>
          <li>
            <Link to="" className="search-box">
              <FiSearch className="iconly-Search icli" />
              <span>Search</span>
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="notifi-wishlist">
              <FaRegHeart className="iconly-Heart icli" />
              <span>My Wish</span>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <BsCart3 className="iconly-Bag-2 icli fly-cate" />
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* ======mobile menu end====== */}
    </>
  );
};

export default MainHeader;

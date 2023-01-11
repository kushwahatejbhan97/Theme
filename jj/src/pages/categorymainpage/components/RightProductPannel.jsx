import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlinePlus, AiOutlineRight } from "react-icons/ai";
import { BsEye, BsStar } from "react-icons/bs";
import { FiHeart, FiRefreshCcw } from "react-icons/fi";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BiMinus } from "react-icons/bi";

const RightProductPannel = () => {
  const {categorytotal,CategoryLoading } = useSelector((store) => store.categoryAll );
  const { producttotal,isLoading } = useSelector((store) => store.product);  

  const params = useParams();
  const dispatch = useDispatch();
  const [slugurl, setSlugurl] = useState("");
  const [catProducts, setCatProducts] = useState([]);

  useEffect(() => {
    let caturl = params.caturl;
    setSlugurl(caturl);
  }, [slugurl]);

  useEffect(() => {
    let caturl = params.caturl;
    const category = categorytotal.find((data) => data.slugUrl === caturl);

    if(category){
      const categoryId = category._id;
    console.log(categoryId);
      let catproducts = producttotal.filter(
        (data) => data.productId.categoryid === categoryId
      );
      console.log(catproducts);
      setCatProducts(catproducts);
    }
  
  }, [isLoading,slugurl,CategoryLoading]);

  return (
    <>
      <div className="col-custome-9">
        <div className="show-button">
          <div className="filter-button-group mt-0">
            <div className="filter-button d-inline-block d-lg-none">
              <a>
                <i className="fa-solid fa-filter" /> Filter Menu
              </a>
            </div>
          </div>
          <div className="top-filter-menu">
            <div className="category-dropdown">
              <h5 className="text-content">Sort By :</h5>

              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                >
                  <span>Most Popular</span>{" "}
                  <i className="fa-solid fa-angle-down" />
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" id="pop">
                      Popularity
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" id="low">
                      Low - High Price
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" id="high">
                      High - Low Price
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" id="rating">
                      Average Rating
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" id="aToz">
                      A - Z Order
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" id="zToa">
                      Z - A Order
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" id="off">
                      % Off - Hight To Low
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid-option d-none d-md-block">
              <ul>
                <li className="three-grid">
                  <a>
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-3.svg"
                      className="blur-up lazyload"
                      alt
                    />
                  </a>
                </li>
                <li className="grid-btn d-xxl-inline-block d-none active">
                  <a>
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/grid-4.svg"
                      className="blur-up lazyload d-lg-inline-block d-none"
                      alt
                    />
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/grid.svg"
                      className="blur-up lazyload img-fluid d-lg-none d-inline-block"
                      alt
                    />
                  </a>
                </li>
                <li className="list-btn">
                  <a>
                    <img
                      src="https://themes.pixelstrap.com/fastkart/assets/svg/list.svg"
                      className="blur-up lazyload"
                      alt
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* =============product list start========== */}
        <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">

          {catProducts.map((data,index) =>(
          <div>
              <div className="product-box-3 h-100 wow fadeInUp" key={index}>
              <div className="product-header">
                <div className="product-image">
                  <a href="product-left-thumbnail.html">
                    <img src={data.productId.thumbnail.url} className="img-fluid blur-up lazyload" alt />
                  </a>
                  <ul className="product-option">
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                      <Link>
                      <BsEye data-feather="eye" />
                      </Link>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                      <Link>
                      <FiRefreshCcw data-feather="refresh-cw" />
                      </Link>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Wishlist">
                      <Link to="/wishlist" className="notifi-wishlist">
                      <FiHeart data-feather="heart" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="product-footer">
                <div className="product-detail">
                  <span className="span-name">{data.productId.brand}</span>
                  <a href="product-left-thumbnail.html">
                    <h5 className="name">{data.name}</h5>
                  </a>
                  <p className="text-content mt-1 mb-2 product-content">{data.productId.description}</p>
                  <div className="product-rating mt-2">
                    <ul className="rating">
                      <li>
                        <BsStar className="fill" />
                      </li>
                      <li>
                        <BsStar className="fill" />
                      </li>
                      <li>
                        <BsStar className="fill" />
                      </li>
                      <li>
                        <BsStar className="fill" />
                      </li>
                      <li>
                        <BsStar className="fill" />
                      </li>
                    </ul>
                    <span>(5.0)</span>
                  </div>
                  {/* <h6 className="unit">570 G</h6> */}
                  <h5 className="price"><span className="theme-color">₹ {data.price}</span> <del>₹ {data.mrp}</del>
                  </h5>
                  <div className="add-to-cart-box bg-white">
                    <button className="btn btn-add-cart addcart-button">Add
                      <span className="add-icon bg-light-gray">
                        <AiOutlinePlus className="fa-solid fa-plus" />
                      </span>
                    </button>
                    <div className="cart_qty qty-box">
                      <div className="input-group bg-white">
                        <button type="button" className="qty-left-minus bg-gray" data-type="minus" data-field>
                          <BiMinus className="fa fa-minus" aria-hidden="true" />
                        </button>
                        <input className="form-control input-number qty-input" type="text" name="quantity" defaultValue={0} />
                        <button type="button" className="qty-right-plus bg-gray" data-type="plus" data-field>
                          <AiOutlinePlus className="fa fa-plus" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
        {/* =============product list end========== */}

        <nav className="custome-pagination">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" tabIndex={-1} aria-disabled="true">
                <AiOutlineLeft />
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link">1</a>
            </li>
            <li className="page-item" aria-current="page">
              <a className="page-link">2</a>
            </li>
            <li className="page-item">
              <a className="page-link">3</a>
            </li>
            <li className="page-item">
              <a className="page-link">
                <AiOutlineRight />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default RightProductPannel;

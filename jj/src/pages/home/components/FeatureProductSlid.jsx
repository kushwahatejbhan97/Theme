import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { BsEye, BsStar } from "react-icons/bs";

import { Autoplay } from "swiper";
import "swiper/css";
import { FiHeart, FiRefreshCcw } from "react-icons/fi";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux';

const FeatureProductSlid = () => {
const{trendingProducts,isTrendingLoading} = useSelector((store) => store.product);

  return (
    <>
  {isTrendingLoading? (
    <div className="load">
            <ClipLoader color={"#D0021B"} loading={isTrendingLoading} size={30} />
      </div>
  ): 
  (
<Swiper
        draggable={true}
        spaceBetween={6}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          460: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          620: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1080: {
            slidesPerView: 4,
            spaceBetween: 7,
          },
        }}
        className="mySwiper"
      >
      {trendingProducts.map((data,index)=>(
        <SwiperSlide key={index}>
        <div>
          <div className="row m-0">
            <div className="col-12 px-0">
              <div className="product-box wow fadeIn">
                <div className="product-image">
                  <a >
                    <img src={data.productId.thumbnail.url}
                    />
                  </a>
                  <ul className="product-option justify-content-around">
                    <li
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="View"
                    >
                      <a
                       
                        data-bs-toggle="modal"
                        data-bs-target="#view"
                      >
                        <BsEye data-feather="eye" />
                      </a>
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Compare"
                    >
                      <a >
                        <FiRefreshCcw data-feather="refresh-cw" />
                      </a>
                    </li>
                    <li
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Wishlist"
                    >
                      <a  className="notifi-wishlist">
                        <FiHeart data-feather="heart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-detail">
                  <a >
                    <h6 className="name name-2 h-100">{data.name}</h6>
                  </a>
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
                        <BsStar />
                      </li>
                    </ul>
                    <span>(34)</span>
                  </div>
                  <h6 className="sold weight text-content fw-normal">{data.productId.packSize}</h6>
                  <div className="counter-box">
                    <h6 className="sold theme-color">₹ {data.price} <del>₹ {data.mrp}</del></h6>
                    <div className="addtocart_btn">
                      <button className="add-button addcart-button btn buy-button text-light">
                        <span>Add</span>
                        <i className="fa-solid fa-plus" />
                      </button>
                      <div className="qty-box cart_qty">
                        <div className="input-group">
                          <button
                            type="button"
                            className="btn qty-left-minus"
                            data-type="minus"
                            data-field
                          >
                            <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                          <input
                            className="form-control input-number qty-input"
                            type="text"
                            name="quantity"
                            defaultValue={1}
                          />
                          <button
                            type="button"
                            className="btn qty-right-plus"
                            data-type="plus"
                            data-field
                          >
                            <i className="fa fa-plus" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      ))}
        
      </Swiper>
  )}


    </>
  )
}

export default FeatureProductSlid
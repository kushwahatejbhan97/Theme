import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function HomeSupCatSlider() {
  return (
    <>
      <Swiper
        freeMode={true}
        grabCursor={true}
        // modules={[FreeMode]}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper ab"
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          720: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          1080: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
      >
        <SwiperSlide>
          <Link to="/categories">
            <div className="mx-1">
              <div className=" banner-contain-3 hover-effect">
                <a >
                  <img
                    src="assets/images/vegetable/banner/smslider1.jpeg"
                    className="bg-img blur-up lazyload"
                    alt=""
                  />
                </a>
               
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <div className="mx-1">
              <div className=" banner-contain-3 hover-effect">
                <a >
                  <img
                    src="assets/images/vegetable/banner/smslider2.jpeg"
                    className="bg-img blur-up lazyload"
                    alt
                  />
                </a>
               
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <div className="mx-1">
              <div className="banner-contain-3 hover-effect">
                <a >
                  <img
                    src="assets/images/vegetable/banner/smslider3.jpeg"
                    className="blur-up lazyload bg-img"
                    alt
                  />
                </a>
              
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <div className="mx-1">
              <div className="banner-contain-3 hover-effect">
                <a >
                  <img
                    src="assets/images/vegetable/banner/smslider4.jpeg"
                    className="blur-up lazyload bg-img"
                    alt
                  />
                </a>
              
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <div className="mx-1">
              <div className="banner-contain-3 hover-effect">
                <a >
                  <img
                    src="assets/images/vegetable/banner/smslider5.jpeg"
                    className="blur-up lazyload bg-img"
                    alt
                  />
                </a>
              
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomeSupCatSlider;

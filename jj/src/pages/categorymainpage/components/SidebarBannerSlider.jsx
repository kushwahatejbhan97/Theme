import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";



import "swiper/css";

const SidebarBannerSlider = () => {
  return (
    <>
      <Swiper
        draggable={true}
        spaceBetween={10}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          460: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          720: {
            slidesPerView: 1,
            spaceBetween: 6,
          },
          1080: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="banner-contain-2 hover-effect">
              <img
                src="../assets/images/fashion/product/medicine.jpg"
                className="bg-img rounded-3 blur-up lazyload"
                alt
              />
              {/* <div className="banner-detail p-center-right shop-banner ms-auto banner-small">
                <div>
                  <h2>Healthy, nutritious &amp; Tasty Fruits &amp; Veggies</h2>
                  <h3>Save upto 50%</h3>
                </div>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="banner-contain-2 hover-effect">
              <img
                src="../assets/images/fashion/product/medicine.jpg"
                className="bg-img rounded-3 blur-up lazyload"
                alt
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="banner-contain-2 hover-effect">
              <img
                src="../assets/images/fashion/product/medicine.jpg"
                className="bg-img rounded-3 blur-up lazyload"
                alt
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SidebarBannerSlider;

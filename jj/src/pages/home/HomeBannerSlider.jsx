import React from "react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const HomeBannerSlider = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        navigation={false}
        pagination={true}
        mousewheel={false}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="homeSlider"
      >
        <SwiperSlide>
          <section className="home-section-2 home-section-bg overflow-hidden">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-12">
                  <div className="slider-animate">
                    <div>
                      <div className="home-contain rounded-0 position-relative">
                        <img
                          src="../assets/images/fashion/home-banner/homebanner1.jpg"
                          className="img-fluid bg-img blur-up lazyload"
                          alt="banner"
                        />
                        {/* <div className="home-detail home-big-space p-center-left home-overlay ">
                          <div className="container-fluid-lg mb-5">
                            <div>
                              <h6 className="ls-expanded text-uppercase text-danger">
                                Weekend Special offer
                              </h6>
                              <h1 className="heding-2">Premium Quality</h1>
                              <h5 className="text-content">
                                Fresh &amp; Top Quality Clothings are available
                                here!
                              </h5>
                              <button
                       
                                className="btn theme-bg-color btn-md text-white fw-bold mt-md-4 mt-2 mend-auto"
                              >
                                Shop Now
                                <MdOutlineKeyboardArrowRight className="faicoarrow"/>
                              </button>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="home-section-2 home-section-bg overflow-hidden">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-12">
                  <div className="slider-animate">
                    <div>
                      <div className="home-contain rounded-0 position-relative">
                        <img
                          src="../assets/images/fashion/home-banner/homebanner2.jpg"
                          className="img-fluid bg-img blur-up lazyload"
                          alt="banner"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="home-section-2 home-section-bg overflow-hidden">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-12">
                  <div className="slider-animate">
                    <div>
                      <div className="home-contain rounded-0 position-relative">
                        <img
                          src="../assets/images/fashion/home-banner/homebanner3.jpg"
                          className="img-fluid bg-img blur-up lazyload"
                          alt="banner"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default HomeBannerSlider;

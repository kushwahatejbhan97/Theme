import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const PruductCatSlider = () => {
  const { productCategory, CategoryLoading } = useSelector((store) => store.categoryAll);
  return (
    <>
    {CategoryLoading ? (
      <div className="load">
        <ClipLoader color={"#D0021B"} loading={CategoryLoading} size={30} />
        </div>
    ) :
     (
<Swiper
        draggable={true}
        spaceBetween={10}
        breakpoints={{
          360: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          460: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          720: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1080: {
            slidesPerView: 6,
            spaceBetween: 7,
          },
        }}
        className="mySwiper"
      >

        {productCategory.map((data,index) => (
          <>
          <SwiperSlide key={index}>
          <div className='bg-light'>
            <div className="shop-category-box border-0 wow fadeIn">
              <Link to={`/category/${data.slugUrl}`}  className="circle-1 d-flex justify-content-center align-items-center">
                <img
                  src={data.thumbnail.url}
                  className="img-fluid blur-up lazyload pb-4"
                  alt
                />
              </Link>
              <div className="category-name">
                <h6>{data.name}</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
          </>
        ))}
        
      </Swiper>
     )}
    
    </>
  )
}

export default PruductCatSlider
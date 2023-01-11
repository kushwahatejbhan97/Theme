import React from 'react'
import HomeSupCatSlider from './components/HomeSupCatSlider'

const HomeSupCat = () => {
  return (
    <>
     <section className="banner-section banner-small ratio_65">
        <div className="container-fluid-lg">
          <div className="slider-4-banner no-arrow slick-height">
            <HomeSupCatSlider />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSupCat
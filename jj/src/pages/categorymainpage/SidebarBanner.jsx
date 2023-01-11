import React from 'react';
import SidebarBannerSlider from './components/SidebarBannerSlider';

const SidebarBanner = () => {
  return (
    <>
    <section>
        <div className="container-fluid-lg">
            <div className="row">
            <div className="col-12">
                <div className="slider-1 slider-animate product-wrapper no-arrow">
                    <SidebarBannerSlider />
                </div>
            </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default SidebarBanner
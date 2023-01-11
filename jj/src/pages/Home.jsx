import React from 'react';
import DeviceCat from './home/DeviceCat';
import DrugCat from './home/DrugCat';
import FeatureProduct from './home/FeatureProduct';
import HomeBannerSlider from './home/HomeBannerSlider';
import HomeSupCat from './home/HomeSupCat';
import ProductCat from './home/ProductCat';

const Home = () => {
  return (
    <>
    <div className='homebg'>
    <HomeBannerSlider />
    <DeviceCat />
    <HomeSupCat />
    <DrugCat />
    <FeatureProduct/>
    <ProductCat />
    <div className='bottompadd'></div>
    </div>
    </>
  )
}

export default Home
import React from 'react';
import FeatureProductSlid from './components/FeatureProductSlid';
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux';

const FeatureProduct = () => {
const{trendingProducts,isTrendingLoading} = useSelector((store) => store.product);
  return (
    <>
  {isTrendingLoading ? (
    <div className="load">
            <ClipLoader color={"#D0021B"} loading={isTrendingLoading} size={30} />
      </div>
  ) : 
  (
<section>
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Shop By Feature Products</h2>
            <span className="title-leaf">
              <svg className="icon-width">
                <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
              </svg>
            </span>
            <p>A virtual assistant collects the products from your list</p>
          </div>
          <div className="product-border border-row">
            <div className="slider-6_2 no-arrow">
              <FeatureProductSlid />
            </div>
          </div>
        </div>
      </section>
  )}
  
    </>
  )
}

export default FeatureProduct
import React from 'react'
import DeviceCatSlider from './components/DeviceCatSlider';
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux';



const DeviceCat = () => {
    const { deviceCategory, CategoryLoading }   = useSelector((store) => store.categoryAll);
  return (
    <>
{CategoryLoading ? (
    <div className="load">
          <ClipLoader color={"#D0021B"} loading={CategoryLoading} size={30} />
     </div>
) : 
(
<section className="category-section-2">
        <div className="container-fluid-lg">
            <div className="title">
                <h2>Shop By Device Categories</h2>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="category-slider arrow-slider">
                        <DeviceCatSlider />
                    </div>
                </div>
            </div>
        </div>
    </section>
)}

    

    </>
  )
}

export default DeviceCat
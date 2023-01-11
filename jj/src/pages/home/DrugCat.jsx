import React from 'react'
import DrugCatSlider from './components/DrugCatSlider'
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux';


const DrugCat = () => {
    const { drugsCategory, CategoryLoading } = useSelector((store) => store.categoryAll);
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
                    <h2>Shop By Drugs Categories</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="category-slider arrow-slider">
                                <DrugCatSlider />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
     )}

    </>
  )
}

export default DrugCat
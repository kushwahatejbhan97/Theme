import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import RightProductPannel from './components/RightProductPannel';


const MainPannel = () => {
  return (
    <>
    <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
            <div className="row">
                <LeftSidebar />
                <RightProductPannel />
            </div>
        </div>
    </section>
    </>
  )
}

export default MainPannel
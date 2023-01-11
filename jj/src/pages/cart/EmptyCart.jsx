import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <>
<div className="cartcontainer">
        <div className="emptysecond">
          <h4>My Cart</h4>
          <div className="emptymainsd">
            <div className="emptyshown">
              <div className="emptyimga">
                <img src="assets/images/inner-page/emptycart.svg" alt="empty cart" />
              </div>
              <div className="emptyname">
                <h6>Your Cart is empty!</h6>
              </div>
              <div className="emptyperh">
                <p>
                  You have no items added in the cart. Explore and add products
                  you like!
                </p>
              </div>
              <div className="emptybutton">
                <Link to="/" className="text-decoration-none">
                <button>ADD PRODUCTS</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmptyCart
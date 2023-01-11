import React from 'react'
import { BiMinus } from 'react-icons/bi'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Fillcart = () => {
  return (
    <>
<div className="fillcarts">
        <div className="fillcontain">
          <h4>Order Summary</h4>
          <div className="cart">
            <div className="cartleft">
              <h6>PRODUCTS</h6>
                <div className="cartitemcont">
                  <div className="caritmimag">
                    <div className="cartimagesd">
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div className="caritmdetail">
                    <h5>Bao health drainable fecal collector (8202) 5's</h5>

                    {/* {data.stocks > 0 ? (
                      <h6>
                      Only <span>{data.stocks}</span> Left In Stock
                    </h6>
                    ) : (
                      <h6 style={{color:"red"}}>
                      Stock not availabel
                     </h6>
                    )} */}

                    <p>
                      Mfr: <span>Mfr: Bao health</span>
                    </p>
                    <div className="cartqutpri">
                      <div className="cartitemprice">
                        <h5>
                          Rs 12345 <span>Rs. 123456</span>
                        </h5>
                      </div>
                      <div className="cartitmquentity">
                        <button>
                        <BiMinus />
                        </button>
                        <span className="mx-2">2</span>
                        <button >
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                    <div className="removediv">
                      <div className="dlvtime">
                        <p>Delivery between NOVEMBER 10-NOVEMBER 11</p>
                      </div>
                      <div className="btnnremov">
                        <button className="mx-2" >REMOVE</button>
                        <button className="mx-2">SAVE FOR LATER</button>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="dividercart"></div>
              <div className="crtadfd">
                <Link to="/" className="text-decoration-none">
                <h5>ADD MORE ITEMS</h5>
                </Link>
                <Link to="/" className="text-decoration-none">
                <h5>
                  <FiPlus />
                </h5>
                </Link>
              </div>
            </div>
            <div className="cartright">
              <div className="cartpayment">
                <h6>PAYMENT DETAILS</h6>
                <div className="payshowncart">
                  <div className="paydetone">
                    <h6>MRP Total</h6>
                    <h6>Netmeds Discount</h6>
                    <h6>Total Amount *</h6>
                  </div>
                  <div className="paydettwo">
                    <h6>Rs. 12345</h6>
                    <h6>-Rs 2322 </h6>
                    <h6>Rs. 54323</h6>
                  </div>
                </div>
                <div className="totalshaving">
                  <h6>TOTAL SAVINGS RS totalmrp - totalprice</h6>
                </div>
                <div className="cartcashbtn">
                  <div className="tcartbhju">
                    <p>TOTAL AMOUNT</p>
                    <h6>Rs. 54323</h6>
                  </div>
                  <div className="tcartbtn">
                    <Link to="/checkout/review" className="text-decoration-none">
                    <button>PROCEED</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fillcart
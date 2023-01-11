import React from 'react'
import { BsFacebook, BsGoogle, BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function MainFooter() {
    const today = new Date();
  const year = today.getFullYear();
  const company = [
    {
      name: "About Medt",
    },
    {
      name: "Customers Speak",
    },
    {
      name: "Customers Speak",
    },
    {
      name: "In the News",
    },
    {
      name: "Career",
    },
    {
      name: "Terms and Conditions",
    },
    {
      name: "Privacy Policy",
    },
  ];

  const shopping = [
    {
      name: "Browse by A-Z",
    },
    {
      name: "Browse by Manufacturers",
    },
    {
      name: "Health Articles",
    },
    {
      name: "Offers / Coupons",
    },
    {
      name: "FAQs",
    },
  ];
  const social = [
    {
      name: "Patients Alike",
    },
    {
      name: "Facebook",
    },
    {
      name: "Twitter",
    },
    {
      name: "LinkedIn",
    },
    {
      name: "Youtube",
    },
    {
      name: "Refer & Earn",
    },
  ];

  return (
    <>
    {/* <footer className="section-t-space footer-section-2 footer-color-3 footermobile">
        <div className="container-fluid-lg pt-lg-0 p-lg-5">
            <div className="main-footer">
                <div className='row g-sm-2 pb-lg-4'>
                    <div className="col-xl-12 col-sm-6 d-flex justify-content-center align-items-center">
                        <a  className="foot-logo theme-logo col-xl-2">
                            <img src="../assets/images/logo/logo.jpg" className="img-fluid blur-up lazyload rounded-1" alt />
                        </a>
                        <p className="information-text information-text-2 col-xl-7"> 
                            Medt.com is one of India’s most trusted pharmacies, dispensing
                                quality medicines at reasonable prices to over 7 million happy customers – PAN India.
                        </p>
                        <ul className="social-icon col-xl-3">
                            <li className="light-bg">
                            <a  className="footer-link-color">
                                <BsFacebook className="fab fa-facebook-f" />
                            </a>
                            </li>
                            <li className="light-bg">
                            <a className="footer-link-color">
                                <BsGoogle className="fab fa-google" />
                            </a>
                            </li>
                            <li className="light-bg">
                            <a  className="footer-link-color">
                                <BsTwitter className="fab fa-twitter" />
                            </a>
                            </li>
                            <li className="light-bg">
                            <a  className="footer-link-color">
                                <BsInstagram className="fab fa-instagram" />
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            <div className="row g-md-4 gy-sm-5">
                <div className="col-xxl-2 col-xl-3 col-sm-6">
                    <div className="footer-title">
                        <h4 className="text-white">COMPANY</h4>
                    </div>
                    <ul className="footer-list footer-contact footer-list-light">
                        {company.map((data,index)=>(
                            <li key={index}>
                            <Link to="" className="light-text">{data.name}
                            </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-xxl-2 col-xl-3 col-sm-6">
                    <div className="footer-title">
                        <h4 className="text-white">SHOPPING</h4>
                    </div>
                    <ul className="footer-list footer-list-light footer-contact">
                       {shopping.map((data,index) =>(
                        <li key={index}>
                        <Link to="" className="light-text">{data.name}
                        </Link>
                        </li>
                       ))}
                    </ul>
                </div>
                <div className="col-xxl-2 col-xl-3 col-sm-6">
                    <div className="footer-title">
                        <h4 className="text-white">SOCIAL</h4>
                    </div>
                    <ul className="footer-list footer-list-light footer-contact">
                        {social.map((data,index) => (
                            <li key={index}>
                                <Link to="" className="light-text">{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-xxl-3 col-xl-3 col-sm-6">
                    <div className="footer-title">
                        <h4 className="text-white">SUBSCRIBE TO OUR NEWSLETTER</h4>
                    </div>
                    <ul className="footer-address footer-contact">
                        <li>
                        <a  className="light-text">
                            <div className="inform-box flex-start-box">
                            <i data-feather="map-pin" />
                            <p>Get a free subscription to our health and fitness tip and stay
                                tuned to our latest offers</p>
                            </div>
                        </a>
                        </li>
                        <li>
                            <input type="text" placeholder="Enter your email address" />
                            <span>
                                <button>
                                <FaLongArrowAltRight />
                                </button>
                            </span>
                        </li>
                        <li>
                             <ul className="d-flex">
                                <li>
                                <img
                                    src="https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png"
                                    alt={"play_store"}
                                    style={{width:130}}
                                />
                                </li>
                                <li>
                                <img
                                    src="https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png"
                                    alt="Download Netmeds App for iOs from App Store"
                                    style={{width:130}}
                                />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="sub-footer sub-footer-lite section-b-space section-t-space">
                <div className="left-footer">
                    <p>
                    ©
                    Powered By Dexterous Technology
                    <a target="_blank" className='text'> dexterous.in</a>
                    </p>
                </div>
            <ul className="payment-box">
                <li>
                <img src="../assets/images/icon/paymant/visa.png" className="blur-up lazyload" alt />
                </li>
                <li>
                <img src="../assets/images/icon/paymant/discover.png" alt className="blur-up lazyload" />
                </li>
                <li>
                <img src="../assets/images/icon/paymant/american.png" alt className="blur-up lazyload" />
                </li>
                <li>
                <img src="../assets/images/icon/paymant/master-card.png" alt className="blur-up lazyload" />
                </li>
                <li>
                <img src="../assets/images/icon/paymant/giro-pay.png" alt className="blur-up lazyload" />
                </li>
            </ul>
            </div>
        </div>
    </footer> */}


     <div className="footer col-sm-12">
      <div className="footerone col-sm-12">
        <div className="footeronetop col-sm-2">
          <img
            src="assets/images/logo/logo.jpg"
            alt="drand logo"
            width={155}
            height={65}
          />
        </div>
        <div className="footeronedown col-sm-10">
          <ul>
            <li>
              Medt.com is one of India’s most trusted pharmacies, dispensing
              quality medicines at reasonable prices to
            </li>
            <li>over 7 million happy customers – PAN India.</li>
          </ul>
        </div>
      </div>
      <div className="footertwo col-sm-12">
        <div className="footertwo1 col-sm-3">
            <h4>
              COMPANY
            </h4>
          <ul>
            {company.map((data,index)=>(
              <Link to="/" className="text-decoration-none" key={index}>
              <li key={index}>{data.name}</li>
            </Link>
            ))}
          </ul>
        </div>
        <div className="footertwo1 col-sm-3">
        <h4>SHOPPING</h4>
          <ul>
            {shopping.map((data,index)=>(
              <Link to="/" className="text-decoration-none" key={index}>
              <li key={index}>{data.name}</li>
            </Link>
            ))}
          </ul>
        </div>
        <div className="footertwo1 col-sm-3">
        <h4>SOCIAL</h4>
          <ul>
            {social.map((data,index)=>(
              <Link to="/" className="text-decoration-none" key={index}>
              <li key={index}>{data.name}</li>
            </Link>
            ))}
          </ul>
        </div>
        <div className="footertwo1 col-sm-3">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <ul>
            <li>
              Get a free subscription to our health and fitness tip and stay
              tuned to our latest offers
            </li>
            <li className="listff">
              <input type="text" placeholder="Enter your email address" />
              <span>
                <button>
                  <FaLongArrowAltRight />
                </button>
              </span>
            </li>
            <li className='sdfb'>
              <ul className='wdf'>
                <li>
                  <img
                    src="https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png"
                    alt={"play_store"}
                  />
                </li>
                <li>
                  <img
                    src="https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png"
                    alt="Download Netmeds App for iOs from App Store"
                    title="Download Netmeds App for iOs from App Store"
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className="footerthree col-sm-12">
        <ul>
          <Link to="/" className="text-decoration-none ">
            <li>Medicine</li>
          </Link>

          <Link to="/" className="text-decoration-none ">
            <li>Wellness</li>
          </Link>

          <Link to="/" className="text-decoration-none ">
            <li>Lab Tests</li>
          </Link>
          <Link to="/" className="text-decoration-none ">
            <li>Beauty</li>
          </Link>
          <Link to="/" className="text-decoration-none ">
            <li>
              Design By
              <Link href="https://www.dexterous.in" target="_blank" className="text-decoration-none text-success">
                <b> Dexterous Technology </b>
              </Link>
              © {year}
            </li>
          </Link>
        </ul>
      </div>
    </div>
    </>
  )
}

export default MainFooter
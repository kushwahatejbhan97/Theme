import React from 'react'
import { BiMap } from 'react-icons/bi'
import { BsStar } from 'react-icons/bs'
import { FiMail, FiMapPin } from 'react-icons/fi'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
    <div className="tab-pane fade show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
      <div className="dashboard-profile">
                                    <div className="title">
                                    <h2>My Profile</h2>
                                    <span className="title-leaf">
                                        <svg className="icon-width bg-gray">
                                        <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                                        </svg>
                                    </span>
                                    </div>
                                    <div className="profile-detail dashboard-bg-box">
                                    <div className="dashboard-title">
                                        <h3>Profile Name</h3>
                                    </div>
                                    <div className="profile-name-detail">
                                        <div className="d-sm-flex align-items-center d-block">
                                        <h3>Vicki E. Pope</h3>
                                        <div className="product-rating profile-rating">
                                            <ul className="rating">
                                                <li>
                                                    <BsStar data-feather="star" className="fill" />
                                                </li>
                                                <li>
                                                    <BsStar data-feather="star" className="fill" />
                                                </li>
                                                <li>
                                                    <BsStar data-feather="star" className="fill" />
                                                </li>
                                                <li>
                                                    <BsStar data-feather="star" />
                                                </li>
                                                <li>
                                                    <BsStar data-feather="star" />
                                                </li>
                                            </ul>
                                        </div>
                                        </div>
                                        <Link to="/editpage">Edit</Link>

                                    </div>
                                    <div className="location-profile">
                                        <ul>
                                        <li>
                                            <div className="location-box">
                                            <FiMapPin data-feather="map-pin" />
                                            <h6>Downers Grove, IL</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="location-box">
                                            <FiMail data-feather="mail" />
                                            <h6>vicki.pope@gmail.com</h6>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="location-box">
                                            <IoMdCheckboxOutline data-feather="check-square" />
                                            <h6>Licensed for 2 years</h6>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="profile-description">
                                        <p>Residences can be classified by and how they are connected to
                                        neighbouring residences and land. Different types of housing tenure can
                                        be used for the same physical type.</p>
                                    </div>
                                    </div>
                                    <div className="profile-about dashboard-bg-box">
                                    <div className="row">
                                        <div className="col-xxl-7">
                                        <div className="dashboard-title mb-3">
                                            <h3>Profile About</h3>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table">
                                            <tbody>
                                                <tr>
                                                <td>Gender :</td>
                                                <td>Female</td>
                                                </tr>
                                                <tr>
                                                <td>Birthday :</td>
                                                <td>21/05/1997</td>
                                                </tr>
                                                <tr>
                                                <td>Phone Number :</td>
                                                <td>
                                                    <a href="javascript:void(0)"> +91 846 - 547 -
                                                    210</a>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td>Address :</td>
                                                <td>HYD</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                        <div className="dashboard-title mb-3">
                                            <h3>Login Details</h3>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table">
                                            <tbody>
                                                <tr>
                                                <td>Email :</td>
                                                <td>
                                                <Link to="/editpage">Edit </Link>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td>Password :</td>
                                                <td>                                      
                                                  <Link to="/editpage">Edit </Link>
                                                </td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                        </div>
                                        <div className="col-xxl-5">
                                        <div className="profile-image">
                                            <img src="../assets/images/inner-page/dashboard-profile.png" className="img-fluid blur-up lazyload" alt />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
      </div>
    </div>
    </>
  )
}

export default Profile
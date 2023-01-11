import React from 'react';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { BsHouseDoor, BsPencilFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Address from './dashboard/components/Address';
import MyDashBoard from './dashboard/components/MyDashBoard';
import MyWishlist from './dashboard/components/MyWishlist';
import Order from './dashboard/components/Order';
import Privacy from './dashboard/components/Privacy';
import Profile from './dashboard/components/Profile';
import SavedCard from './dashboard/components/SavedCard';

const DashBoardMain = () => {
  return (
    <>
    <section className="breadscrumb-section pt-0">
        <div className="container-fluid-lg">
            <div className="row">
            <div className="col-12">
                <div className="breadscrumb-contain">
                <h2>User Dashboard</h2>
                <nav>
                    <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">
                            <BsHouseDoor className='mb-1 mx-1' />
                        </Link>
                    </li>
                    <li className="active" aria-current="page"><span><AiOutlineCaretRight/></span>User Dashboard</li>
                    </ol>
                </nav>
                </div>
            </div>
            </div>
        </div>
    </section>

    <section className="user-dashboard-section section-b-space">
        <div className="container-fluid-lg">
            <div className="row">
                <div className="col-xxl-3 col-lg-4">
                    <div className="dashboard-left-sidebar">
                        <div className="close-button d-flex d-lg-none">
                            <button className="close-sidebar">
                            <i className="fa-solid fa-xmark" />
                            </button>
                        </div>
                        <div className="profile-box">
                            <div className="cover-image">
                                <img src="../assets/images/inner-page/cover-img.jpg" className="img-fluid blur-up lazyload" alt />
                            </div>
                            <div className="profile-contain">
                                <div className="profile-image">
                                    <div className="position-relative">
                                        <img src="../assets/images/inner-page/user/1.jpg" className="blur-up lazyload update_img text-center" alt />
                                        <div className="cover-icon">
                                            <BsPencilFill className="fa-solid fa-pen">
                                                <input type="file" onchange="" />
                                            </BsPencilFill>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-name">
                                    <h3>Example</h3>
                                    <h6 className="text-content">example@gmail.com</h6>
                                </div>
                            </div>
                        </div>
                        <ul className="nav nav-pills user-nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#pills-dashboard" type="button" role="tab" aria-controls="pills-dashboard" aria-selected="true"><i data-feather="home" />
                                    DashBoard
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-order-tab" data-bs-toggle="pill" data-bs-target="#pills-order" type="button" role="tab" aria-controls="pills-order" aria-selected="false"><i data-feather="shopping-bag" />
                                    Order
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-wishlist-tab" data-bs-toggle="pill" data-bs-target="#pills-wishlist" type="button" role="tab" aria-controls="pills-wishlist" aria-selected="false"><i data-feather="heart" />
                                    Wishlist
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-card-tab" data-bs-toggle="pill" data-bs-target="#pills-card" type="button" role="tab" aria-controls="pills-card" aria-selected="false"><i data-feather="credit-card" /> 
                                    Saved Card
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-address-tab" data-bs-toggle="pill" data-bs-target="#pills-address" type="button" role="tab" aria-controls="pills-address" aria-selected="false"><i data-feather="map-pin" />
                                    Address
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i data-feather="user" />
                                    Profile
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-security-tab" data-bs-toggle="pill" data-bs-target="#pills-security" type="button" role="tab" aria-controls="pills-security" aria-selected="false"><i data-feather="shield" />
                                    Privacy
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-xxl-9 col-lg-8">
                    {/* <button className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none">Show
                        Menu
                    </button> */}
                    <div className="dashboard-right-sidebar">
                        <div className="tab-content" id="pills-tabContent">
                            <MyDashBoard />
                            <Order />
                            <MyWishlist />
                            <SavedCard />
                            <Address />
                            <Profile />
                            <Privacy />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default DashBoardMain
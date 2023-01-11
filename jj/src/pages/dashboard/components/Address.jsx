import React from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Address = () => {
  return (
    <>
    <div className="tab-pane fade show" id="pills-address" role="tabpanel" aria-labelledby="pills-address-tab">
      <div className="dashboard-address">
                                    <div className="title title-flex">
                                    <div>
                                        <h2>My Address Book</h2>
                                        <span className="title-leaf">
                                        <svg className="icon-width bg-gray">
                                            <use xlinkHref="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf" />
                                        </svg>
                                        </span>
                                    </div>
                                    <Link to="/editpage">
                                        <button className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3">
                                            <i data-feather="plus" className="me-2" /> Add New Address
                                        </button>
                                    </Link>
                                    </div>
                                    <div className="row g-sm-4 g-3">
                                        <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                                            <div className="address-box">
                                                <div>
                                                    <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="jack" id="flexRadioDefault2" defaultChecked />
                                                    </div>
                                                    <Link to="/">
                                                        <div className="label">
                                                            <label>Home</label>
                                                        </div>
                                                    </Link>
                                                    <div className="table-responsive address-table">
                                                    <table className="table">
                                                        <tbody>
                                                        <tr>
                                                            <td colSpan={2}>Jack Jennas</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Address :</td>
                                                            <td>
                                                            <p>HYD
                                                            </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Pin Code :</td>
                                                            <td>345323</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Phone :</td>
                                                            <td>+91 1234-567-890</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <Link to="/editpage">
                                                    <button className="btn btn-sm add-button w-100">
                                                        <BiEditAlt data-feather="edit" />
                                                            Edit
                                                    </button>
                                                    </Link>
                                                    <Link to="/removepage">
                                                        <button className="btn btn-sm add-button w-100">
                                                            <MdDeleteOutline data-feather="trash-2" />
                                                            Remove
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
      </div>
    </div>
    </>
  )
}

export default Address
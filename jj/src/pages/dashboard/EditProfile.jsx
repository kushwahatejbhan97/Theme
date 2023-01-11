import React from 'react'
import { IoMdClose } from 'react-icons/io'

const EditProfile = () => {
  return (
    <>
   <div className='d-flex justify-content-center align-items-center'>
    <div className='w-75' >
            <div className="header d-flex justify-content-center align-items-center">
                <h5 className="modal-title"><b>Edit Profile</b></h5>
            </div>
            <div className="modal-body">
                <div className="row g-4">
                    <div className="col-xxl-12">
                    <form>
                        <div className="form-floating theme-form-floating">
                        <input type="text" className="form-control opacity-75" id="pname" placeholder=' '/>
                        <label htmlFor="pname">Full Name</label>
                        </div>
                    </form>
                    </div>
                    <div className="col-xxl-6">
                    <form>
                        <div className="form-floating theme-form-floating">
                        <input type="email" className="form-control" placeholder=' '/>
                        <label htmlFor="email1">Email address</label>
                        </div>
                    </form>
                    </div>
                    <div className="col-xxl-6">
                    <form>
                        <div className="form-floating theme-form-floating">
                        <input className="form-control" type="number" placeholder=' ' name="mobile" id="mobile" maxLength={10} oninput="javascript: if (this.value.length > this.maxLength) this.value =
                            this.value.slice(0, this.maxLength);" />
                        <label htmlFor="mobile">Mobile Number</label>
                        </div>
                    </form>
                    </div>
                    <div className="col-12">
                    <form>
                        <div className="form-floating theme-form-floating">
                        <input type="text" className="form-control" id="address1" placeholder=' '  />
                        <label htmlFor="address1">Add Address</label>
                        </div>
                    </form>
                    </div>
                    <div className="col-12">
                    <form>
                        <div className="form-floating theme-form-floating">
                        <input type="text" className="form-control" id="address2" placeholder=' ' />
                        <label htmlFor="address2">Add Address 2</label>
                        </div>
                    </form>
                    </div>
                    <div className="col-xxl-4">
                    <form>
                        <div className="form-floating theme-form-floating">
                        <select className="form-select" id="floatingSelect1" aria-label="Floating label select example">
                            <option selected>Choose Your Country</option>
                            <option value="kindom">United Kingdom</option>
                            <option value="states">United States</option>
                            <option value="fra">France</option>
                            <option value="china">China</option>
                            <option value="spain">Spain</option>
                            <option value="italy">Italy</option>
                            <option value="turkey">Turkey</option>
                            <option value="germany">Germany</option>
                            <option value="russian">Russian Federation</option>
                            <option value="malay">Malaysia</option>
                            <option value="mexico">Mexico</option>
                            <option value="austria">Austria</option>
                            <option value="hong">Hong Kong SAR, China</option>
                            <option value="ukraine">Ukraine</option>
                            <option value="thailand">Thailand</option>
                            <option value="saudi">Saudi Arabia</option>
                            <option value="canada">Canada</option>
                            <option value="singa">Singapore</option>
                        </select>
                        <label htmlFor="floatingSelect">Country</label>
                        </div>
                    </form>
                    </div>
                    <div className="col-xxl-4">
                    <form>
                        <div className="form-floating theme-form-floating">
                        <select className="form-select" id="floatingSelect">
                            <option selected>Choose Your City</option>
                            <option value="kindom">India</option>
                            <option value="states">Canada</option>
                            <option value="fra">Dubai</option>
                            <option value="china">Los Angeles</option>
                            <option value="spain">Thailand</option>
                        </select>
                        <label htmlFor="floatingSelect">City</label>
                        </div>
                    </form>
                    </div>
                    <div className="col-xxl-4">
                    <form>
                        <div className="form-floating theme-form-floating">
                        <input type="text" className="form-control" id="address3" placeholder=' '  />
                        <label htmlFor="address3">Pin Code</label>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn bg-danger text-light btn-md" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn theme-bg-color btn-md text-white" data-bs-dismiss="modal">Save
                changes</button>
            </div>
    </div>
   </div>

    </>
  )
}

export default EditProfile
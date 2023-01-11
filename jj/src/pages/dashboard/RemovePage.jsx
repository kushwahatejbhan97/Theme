import React from 'react'

const RemovePage = () => {
  return (
    <>
    <div className='d-flex justify-content-center align-item-center pb-lg-4'>
        <div className="modal-content w-75">
      <div className="modal-header d-block text-center">
        <h5 className="modal-title w-100" id="exampleModalLabel22"><b>Are You Sure ?</b></h5>
      </div>
      <div className="modal-body">
        <div className="remove-box">
          <p>The permission for the use/group, preview is inherited from the object, object will create a
            new permission for this object</p>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-animation btn-md fw-bold" data-bs-dismiss="modal">No</button>
        <button type="button" className="btn theme-bg-color btn-md fw-bold text-light">Yes</button>
      </div>
        </div>
    </div>

    </>
  )
}

export default RemovePage
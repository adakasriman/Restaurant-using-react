import React from 'react'

const MenuList = ({ menuList }) => {
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6 border">
                                        <div className="border-bottom font-weight-bold text-center">
                                            Veg
                                        </div>
                                        {
                                            menuList.veg.map((item,index) => {
                                                return <div className="py-2 text-capitalize" key={index}>
                                                    {item}
                                                </div>
                                            })   
                                        }
                                    </div>
                                    <div className="col-6 border">
                                        <div className="border-bottom font-weight-bold text-center">
                                           Non Veg
                                        </div>
                                        {
                                            menuList.nonVeg.map((item, index) => {
                                                return <div className="py-2 text-capitalize " key={index}>
                                                    {item}
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuList
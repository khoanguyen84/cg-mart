import React from "react";
import { FaCartPlus, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { SiKasasmart } from "react-icons/si";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="container d-flex align-items-center py-4 border-bottom">
            <div className="d-flex align-items-center" style={{ minWidth: "230px" }}>
                <Link to={"/"} className="logo">
                    <SiKasasmart size={30} className="me-2" /> 
                    <span className="fs-4">CG Mart</span>
                </Link>
            </div>
            <div className="d-flex flex-grow-1 justify-content-between">
                <form className="w-50 d-flex align-items-center">
                    <input
                        type="search"
                        placeholder="Enter product name"
                        className="form-control"
                        style={{ paddingRight: '25px' }}
                    />
                    <FaSearch size={15} style={{ marginLeft: '-25px', color: 'rgba(0,0,0,.2)' }} />
                </form>
                {/* <div className="">
                    <Link to={'/cart'}>
                        <FaShoppingCart size={20} className="me-2" role="button" />
                    </Link>
                    <FaUser size={20} role="button" />
                </div> */}
            </div>

        </div>
    )
}

export default Navbar;
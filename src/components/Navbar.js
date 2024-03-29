import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-sm bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand lead fs-2 fw-bold text-primary" to="/">iMart</Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" container d-md-flex md-flex-column p-2 collapse" id="navbarSupportedContent">
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="buttons mx-2">
                        <Link to="/" className="btn btn-outline-dark mx-1 m-md-2">Login</Link>
                        <Link to="/" className="btn btn-outline-dark mx-1 m-md-2">Register</Link>
                        <Link to="/cart" className="btn btn-outline-primary mx-1 m-md-2">Cart ({props.total})</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        total: state.cart.total
    }
}


export default connect(mapStateToProps)(Navbar)

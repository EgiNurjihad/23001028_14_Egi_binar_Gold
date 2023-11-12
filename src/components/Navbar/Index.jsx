import React from "react";
import "./style.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container nav-container">
                <Link to={'/'}>
                <div className="logo"></div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BCR</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1  text-dark">
                            <li className="nav-item ">
                                <a className="nav-link" aria-current="page" href="#service">Our Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#whyUs">Why Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimoni">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
import React from "react";
import "./style.css"

import * as Icon from 'react-feather';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="addres">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="links">
                <a href="#">Our Service</a>
                <a href="#">Why Us</a>
                <a href="#">Testimonial</a>
                <a href="#">FAQ</a>
            </div>
            <div className="socials">
                <p>Connect with us</p>
                <a href="#"><Icon.Facebook /></a>
                <a href="#"><Icon.Instagram /></a>
                <a href="#"><Icon.Twitter /></a>
                <a href="#"><Icon.Mail /></a>
                <a href="#"><Icon.Twitch/></a>
            </div>

            <div className="footer-logo">
                <p>&copy; Copyright Binar 2023</p>
                <div className="logo"></div>
            </div>
        </footer>
    )
}

export default Footer;
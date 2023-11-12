import React from "react";
import "./style.css"
import {useNavigate} from "react-router-dom"

const Banner = () => {
    const navigate = useNavigate()
    return (
        <section className="rental">
            <div className="rent-container">
                <h2>Sewa Mobil di Bandung Sekarang</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </p>
                <a href="#" onClick={() => navigate('/SearchCar')}>Mulai Sewa Mobil</a>
            </div>
        </section>
    )
}

export default Banner;
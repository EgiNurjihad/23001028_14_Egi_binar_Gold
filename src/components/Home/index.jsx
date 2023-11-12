import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css"
import carImg from "../../assets/car.png"

const Home = () => {
    const navigate = useNavigate()
    // Untuk mencari tau location sekarang
    const location = useLocation()

    const [linkVisible, setLinkVisible] = useState(true)
    
    const handleButton = () => {
        if(linkVisible) {
            navigate('/SearchCar');
            setLinkVisible(false)
        }
    }

    useEffect(() => {
        // cek apakah location saat ini '/SearchCar' jika benar jalankan kondisi pertama, jika salah jalankan kondisi kedua
        if(location.pathname === '/SearchCar' ? setLinkVisible(false) : setLinkVisible(true));
    }, [location.pathname])


    return (
        <section className="home">
            <div className="home-detail">
                <h1>Sewa & Rental Mobil Terbaik di Kawasan Bandung</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.
                    Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                {/* <div className=""></div> */}
                {linkVisible && (
                <button onClick={handleButton} style={{ display: linkVisible ? 'block' : 'none' }}>Mulai Sewa Mobil</button>
                )}
            </div>

            <div className="home-img">
                <div className="home-car">
                    <img src={carImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Home;
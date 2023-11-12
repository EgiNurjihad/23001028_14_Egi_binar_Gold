import React from "react";
import "./style.css"
import ImgIcon from "../../assets/img_service.png"

const Service = ({data}) => {
    // console.log(data)
    return (
        <section className="service" id="service">
            <div className="img-service">
                <img src={ImgIcon} alt="" />
            </div>

            <div className="service-desc">
                <h2>Best Car Rental for any Kind of Trip in Bandung</h2>
                <div className="desc">
                    <p>Sewa mobil di Bandung bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
                        kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                        meeting,
                        dll.</p>
                    <div className="service-list">
                        {data && data.map((obj, index) => (
                            <div key={index}>
                                <img src={obj.icon} />
                                <p>{obj.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;
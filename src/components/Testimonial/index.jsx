import React, { useState, useEffect } from "react";
import "./style.css"
import * as Icons from 'react-feather';


const Testimonial = ({ data }) => {
    // inisialisasi awal 
    const [activeIndex, setActivetIndex] = useState(0)

    // const nextTestimonial = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1))
    // }

    // const prevTestimonial = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1))
    // }

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = data.length -1;
        } else if (newIndex >= data.length) {
            newIndex = 0
        }
        setActivetIndex(newIndex);
    }


    // console.log(data)
    return (
        <section className="testimoni" id="testimoni">
            <div className="detail">
                <h2>Testimonial</h2>
                <p>Berbagi review positif dari para pelanggan kami</p>
            </div>

            <div className="testi-users">
                <div className="user" style={{
                    transform: `translateX(-${activeIndex * 50}%)`,
                    transition: "transform 0.3s ease-in-out",
                }}>
                    {data && data.map((item, index) => (
                        <div key={index}>
                            <img src={item.img} alt="" />

                            <div className="grup-stars">
                                <div className="user-stars">
                                    {[1, 2, 3, 4, 5].map((starIndex) => (
                                        <i key={starIndex} className="star">{item.icon}</i>

                                    ))}
                                </div>

                                <div className="user-content">
                                    <p>{item.title}</p>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="icons">
                <button onClick={() => updateIndex(activeIndex - 1)}><Icons.ChevronLeft /></button>
                <button onClick={() => updateIndex(activeIndex + 1)}><Icons.ChevronRight /></button>
            </div>
        </section>
    )
}

export default Testimonial;
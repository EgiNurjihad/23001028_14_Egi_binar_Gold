import React from "react";
import "./style.css"

const WhyUsCard = ({ data }) => {
    // console.log(data)
    return (
        <section className="reason" id="whyUs">
            <h1>Why Us?</h1>
            <p>Mengapa harus pilih Binar Car Rental</p>

            <div className="reason-list">
                <div className="list-items">
                    {data && data.map((item, index) => (
                        <div key={index}>
                            <i className="icon">{item.icon}</i>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyUsCard;
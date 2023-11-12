import React from "react";
import "./style.css"

const Questions = ({ data }) => {
    // console.log(data)
    return (
        <section className="form w-100" id="faq">
            <div className="container d-flex justify-content-between flex-wrap">
                <div className="second-container">
                    <h3>Frequently Asked Question</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>

                <div className="select w-50 row-gap-3">
                    {data && data.map((item, index) => (
                        <div key={index}>
                            <select className="form-select m-3">
                                <option selected disabled>{item.title}</option>
                                <option value="" disabled>{item.description}</option>
                            </select>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Questions;
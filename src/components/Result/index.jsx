import React from "react";
import "./style.css"
import axios from "axios";
import * as Icon from "react-feather"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Result = () => {
    const param = useParams()

    const [detailItem, setDetailItem] = useState({})

    useEffect(() => {
        getDetail()
    }, [])

    const getDetail = () => {
        axios.get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
            .then((res) => { setDetailItem(res.data);})
            .catch((err) => { console.log(err); })
    }

    return (
        <>
            <section className="detail-result">
                <div className="detail-container">
                    <h4>Tentang Paket</h4>
                    <div className="about-package">
                        <h5>Include</h5>
                        <ul>
                            <li>Apa yang termasuk dalam paket misal durasi 12 jam</li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>
                    </div>
                    <div className="about-package">
                        <h5>Exclude</h5>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                    </div>
                    <div className="about-package">
                        <h5>Refund, Reschedule, Overtime</h5>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                    </div>
                </div>

                <div className="detail-cars">
                    <img src={detailItem.image} alt="" />

                        <h5>{detailItem.name}</h5>
                        <div className="information">
                            <div className="detail-info">    
                                <Icon.Users />
                                <p>{detailItem.category}</p>
                            </div>
                            <div className="detail-price">
                                <p>Total</p>
                                <p>Rp.{detailItem.price}</p>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Result;
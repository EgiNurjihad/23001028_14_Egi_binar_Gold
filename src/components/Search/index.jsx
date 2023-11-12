import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {

    const [data, setData] = useState({})
    const [name, setName] = useState("")
    const [selectCategory, setSelectCategory] = useState("")
    const [selectPrice, setSelectPrice] = useState("")
    const [selectStatus, setSelectStatus] = useState()
    const [isFilter, setIsFilter] = useState(true)
    const [price, setPrice] = useState("")
    const [isFormFilled, setIsFormFilled] = useState(false);

    useEffect(() => {
        getCars()
    }, [])

    const getCars = () => {
        // const minMaxPrice = `${minPrice} -${maxPrice}`
        axios.get(`https://api-car-rental.binaracademy.org/customer/v2/car?name=${name}&category=${selectCategory}&isRented=${selectStatus}${price}`)
            .then((res) => { setData(res.data.cars) })
            .catch((err) => { console.log(err) })
    }

    const changeName = (e) => {
        setName(e.target.value)
        setIsFormFilled(e.target.value !== "");
    }

    const changeCategory = (e) => {
        setSelectCategory(e.target.value)
        setIsFormFilled(e.target.value !== "");
    }

    const changePrice = (e) => {
       
        const priceValue = e.target.value;
        let varPrice = "";  

        if(priceValue){
            if(priceValue.includes("<")){
                varPrice = `&minPrice=${priceValue.split("<")[1]}`
            }
            if(priceValue.includes(">")){
                varPrice = `&maxPrice=${priceValue.split(">")[1]}`
            }
            if(priceValue.includes("-")){
                let parsePrice = priceValue.split("-");
                varPrice = `&minPrice=${parsePrice[0]}&maxPrice=${parsePrice[1]}`
            }
        }

        setPrice(varPrice);
        setIsFormFilled(e.target.value !== "");
        setSelectPrice(e.target.value);
    }

    const changeStatus = (e) => {
        setSelectStatus(e.target.value);
        setIsFormFilled(true);
    }

    const handleSubmit = () => {
        getCars("")
        setIsFormFilled(true)
        setIsFilter(false)

        setTimeout(() => {
            setIsFormFilled(false);
          }, 0);
    }
    
    const handleReset = () => {
        setName("")
        // setSelectCategory("")
        // setSelectPrice("")
        // setSelectStatus("")
        getCars("", "", "", "")
        setIsFilter(true)
        setIsFormFilled(false)
    }

    return (
        <>
            <section className={`search ${isFormFilled ? "filled" : "search"}`}>
                <div className="search-container">
                    <div className="form-grups">
                        <div className="input-box">
                            <p>Nama Mobil</p>
                            <input onChange={changeName} type="text" placeholder="Ketik nama/tipe mobil" />
                        </div>
                        <div className="input-box">
                            <p>Kategori</p>
                            <select value={selectCategory} onChange={changeCategory} name="Kapasitas mobil">
                                <option value="" disabled>Masukan kapasitas mobil</option>
                                <option value="small">2 - 4 Orang</option>
                                <option value="medium">4 - 6 Orang</option>
                                <option value="large">6 - 8 Orang</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <p>Harga</p>
                            <select onChange={changePrice} value={selectPrice} name="Harga mobil">
                                <option value="" disabled>Masukan harga sewa perhari</option>
                                <option value="<400000">+ Rp.400.000</option>
                                <option value="400000-600000">Rp.400.000 - Rp.600.000</option>
                                <option value=">400000">- Rp.400.000 </option>
                            </select>
                        </div>
                        <div className="input-box">
                            <p>Status</p>
                            <select value={selectStatus} onChange={changeStatus} name="Status">
                                <option value="true">Disewa</option>
                                <option value="false">Tidak disewa</option>
                            </select>
                        </div>
                        <button onClick={isFilter ? handleSubmit : handleReset} className="btn">{isFilter ? "Cari Mobil" : "Edit"}</button>
                    </div>

                </div>

            </section>
            <section className="result">
                {/* <div className="result"> */}
                    {data.length ? (data.map((item, index) => (
                        <div key={index}>
                            <div className="result-items">
                                <div className="card-item">
                                    <img src={item.image} alt="" />

                                    <div className="detail-item">
                                        <span>{item.name}</span>
                                        <h5>Rp.{item.price} / hari</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. </p>
                                    </div>
                                </div>
                                <Link to={`/Search/${item.id}`}>
                                <button href="#">Pilih mobil</button>
                                </Link>
                            </div>
                        </div>
                    ))) : <p>Mobil yang anda cari tidak ada...</p>}
                {/* </div> */}


            </section>

        </>
    )
}

export default Search;
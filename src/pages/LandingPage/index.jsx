import React from "react";
import { useState } from "react";

// import "../../App.css"
import Navbar from "../../components/Navbar";
import Home from "../../components/Home";
import Service from '../../components/Service'
import WhyUsCard from '../../components/WhyUsCard'
import Testimonial from '../../components/Testimonial'
import Banner from "../../components/Banner";
import Questions from "../../components/Questions";
import Footer from "../../components/Footer";

import * as Icon from 'react-feather';
import Icons from '../../assets/fi_check.svg'
import Image from '../../assets/Ellipse10.jpg'
import Image2 from '../../assets/Ellipse11.jpg'


const LandingPage = () => {

    // const [showNav, setShowNav] = useState(false)

    const [getService, setService] = useState([
        {
            icon: Icons,
            description: "Sewa Mobil Dengan Supir di Bandung 12 Jam",
        },
        {
            icon: Icons,
            description: "Sewa Mobil Lepas Kunci di Bandung 24 Jam",
        },
        {
            icon: Icons,
            description: "Sewa Mobil Jangka Panjang Bulanan",
        },
        {
            icon: Icons,
            description: "Gratis Antar - Jemput Mobil di Bandara",
        },
        {
            icon: Icons,
            description: "Layanan Airport Transfer / Drop In Out",
        },
    ])

    const [getWhyUs, setWhyUs] = useState([
        {
            icon: <Icon.ThumbsUp style={{ backgroundColor: "#F9CC00", padding: "5px",}}/>,
            title: "Mobil Lengkap",
            description: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
        },
        {
            icon: <Icon.Tag style={{ backgroundColor: "#FA2C5A", padding: "5px",}}/>,
            title: "Harga Murah",
            description: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
        },
        {
            icon: <Icon.Clock style={{ backgroundColor: "#0D28A6", padding: "5px",}}/>,
            title: "Layanan 24 Jam",
            description: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
        },
        {
            icon: <Icon.Award style={{ backgroundColor: "#5CB85F", padding: "5px",}}/>,
            title: "Sopir Profesional",
            description: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
        },
    ])

    const [getTestimony, setTestimony] = useState([
        {
            img: Image2,
            icon: <Icon.Star />,
            title: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            description: "John Dee 32, Bromo"
        },
        {
            img: Image2,
            icon: <Icon.Star />,           
            title: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            description: "John Dee 32, Bromo"
        },
        {
            img: Image,
            icon: <Icon.Star />,
            title: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
            description: "John Dee 32, Bromo"
        }
    ])

    const [getQuest, setQuest] = useState([
        {
            title : 'Apa saja syarat yang di butuhkan?',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing',
        },
        {
            title : 'Berapa hari minimal sewa mobil lepas kunci?',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing',
        },
        {
            title : 'Berapa hari sebelumnya sebaiknya booking sewa mobil?',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing',
        },
        {
            title : 'Apa ada biaya antar jemput',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing',
        },
        {
            title : 'Bagaimana jika terjadi kecelakaan?',
            description : 'Lorem ipsum dolor sit amet consectetur adipisicing',
        },
    ])

    return (
        <div>
            <Navbar />
            <Home />
            <Service data={getService} />
            <WhyUsCard data={getWhyUs} />
            <Testimonial data={getTestimony} />
            <Banner />
            <Questions data={getQuest} />
            <Footer />
        </div>
    )
}

export default LandingPage;
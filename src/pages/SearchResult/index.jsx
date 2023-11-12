import axios from "axios";
import React, { useEffect, useState } from "react";
import Result from "../../components/Result";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const SearchResult = () => {
    return( 
        <>
        <Navbar />
        <Result />
        <Footer />
        </>
    )
}

export default SearchResult;
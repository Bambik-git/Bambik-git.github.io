import preloader from "../../../assets/preloader.svg";
import React from "react";
import './preloader.css'

let Preloader = () => {
    return (
        <div className='preloader'>
            <img src={preloader} alt=''/>
        </div>
    )
}

export default Preloader;
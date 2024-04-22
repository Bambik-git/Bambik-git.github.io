import pre_loader from "../../../assets/loading.svg";
import React from "react";

let Preloader = () => {
    return (
        <div>
            <img src={pre_loader} alt={'pre_loader_image'} width={'100'} height={'100'}/>
        </div>
    )
}

export default Preloader;
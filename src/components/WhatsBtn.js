import React from "react";
import zapImg from "../img/zap.png";
import style from '../App.module.css';

function WhatsBtn() {
    return(
        <a className={ style.whatsBtn } href="https://wa.me/message/7TZJV2L3ADCXA1">
            <img src={ zapImg } alt="Botão Whatsapp"/>
        </a>
    );
}

export default WhatsBtn;

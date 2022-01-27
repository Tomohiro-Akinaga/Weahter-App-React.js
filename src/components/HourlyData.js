import React from "react";
import "../css/app.css";
import weatherLogo from "../../src/resources/images/cloudy.png";

export default function HourlyData() {
    return (
        <div className="hourly-data">
            <p className="hourly-data__text--time">6am</p>
            <img className="hourly-data__img" src={weatherLogo}></img>
            <p className="hourly-data__text--degree">16&deg;</p>
        </div>
    )
};
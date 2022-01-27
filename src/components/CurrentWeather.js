import React from "react"
import "../css/app.css"
import weatherLogo from "../resources/images/cloudy.png"

export default function CurrentWeather() {
    return (
        <div className="current-weather">
            <img className="current-weather__img" src={weatherLogo}></img>
            <div className="current-weather__text">
                <p className="current-weather__text--degree">21&deg;</p>
                <p className="current-weather__text--climate">Mostly Sunny</p>
            </div>
        </div>
    )
};
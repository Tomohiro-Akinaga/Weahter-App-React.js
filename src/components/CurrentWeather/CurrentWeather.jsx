// import CurrentWeatherImg from "http://openweathermap.org/img/wn/10d@2x.png";
import CurrentWeatherStyle from "./CurrentWeather.module.scss";

export default function CurrentWeather() {
    return (
        <div className={CurrentWeatherStyle.container}>
            <img className={CurrentWeatherStyle.img} src="http://openweathermap.org/img/wn/10d@2x.png"></img>
            <div className={CurrentWeatherStyle.text}>
                <h2 className={CurrentWeatherStyle.degree}>21&deg;</h2>
                <p className={CurrentWeatherStyle.climate}>Mostly Sunny</p>
            </div>
        </div>
    )
};
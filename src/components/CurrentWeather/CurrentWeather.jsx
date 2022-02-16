import CurrentWeatherImg from "../../resources/images/cloudy.png";
import CurrentWeatherStyle from "../CurrentWeather/CurrentWeather.module.css";

export default function CurrentWeather() {
    return (
        <div className={CurrentWeatherStyle.container}>
            <img src={CurrentWeatherImg}></img>
            <div className={CurrentWeatherStyle.text}>
                <p className={CurrentWeatherStyle.degree}>21&deg;</p>
                <p className={CurrentWeatherStyle.climate}>Mostly Sunny</p>
            </div>
        </div>
    )
};
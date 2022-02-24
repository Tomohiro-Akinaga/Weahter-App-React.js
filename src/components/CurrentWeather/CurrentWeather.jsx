import CurrentWeatherImg from "../../resources/images/cloudy.png";
import CurrentWeatherStyle from "./CurrentWeather.module.scss";

export default function CurrentWeather() {
    return (
        <div className={CurrentWeatherStyle.container}>
            <img src={CurrentWeatherImg}></img>
            <div className={CurrentWeatherStyle.text}>
                <h2 className={CurrentWeatherStyle.degree}>21&deg;</h2>
                <p className={CurrentWeatherStyle.climate}>Mostly Sunny</p>
            </div>
        </div>
    )
};
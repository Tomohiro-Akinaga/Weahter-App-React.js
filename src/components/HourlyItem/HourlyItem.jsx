import HourlyItemStyle from "./HourlyItem.module.scss";
// import logo from "/Users/tomo/weather-app-react/src/resources/images/cloudy.png";

export default function HourlyItem() {
    const data = [
        {
            time: "5am",
            img: "http://openweathermap.org/img/wn/10d@2x.png",
            degree: "14°",
        },
        {
            time: "6am",
            img: "http://openweathermap.org/img/wn/10d@2x.png",
            degree: "22°",
        },
        {
            time: "7am",
            img: "http://openweathermap.org/img/wn/10d@2x.png",
            degree: "13°",
        },
        {
            time: "8am",
            img: "http://openweathermap.org/img/wn/10d@2x.png",
            degree: "16°",
        },
        {
            time: "9am",
            img: "http://openweathermap.org/img/wn/10d@2x.png",
            degree: "12°",
        },
        {
            time: "10am",
            img: "http://openweathermap.org/img/wn/10d@2x.png",
            degree: "11°",
        },
        {
            time: "11am",
            img: "http://openweathermap.org/img/wn/10d@2x.png",
            degree: "10°",
        },
    ];
    return (
        <div className={HourlyItemStyle.container}>
            <ul className={HourlyItemStyle.ul}>
                {data.map((item, index) => (
                    <li key={index} className={HourlyItemStyle.li}>
                        <p className={HourlyItemStyle.p}>{item.time}</p>
                        <img
                            src={item.img}
                            alt=""
                            className={HourlyItemStyle.img}
                        />
                        <p className={HourlyItemStyle.p}>{item.degree}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

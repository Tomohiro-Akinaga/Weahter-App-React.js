import HourlyItemStyle from "./HourlyItem.module.scss";

export default function HourlyItem(props) {
    const date = new Date();
    let hour = date.getHours();

    const data = [];
    for (let i = 1; i < 8; i++) {
        data.push(
            {
            time: hour + i < 12 ? `${hour - 12}am` :
            hour + i === 12 ? "12pm" :
            `${hour + i - 12}pm`
            ,
            img: `http://openweathermap.org/img/wn/${props.hourlyWeather.hourly[i].weather[0].icon}@2x.png`,
            degree: Math.floor(props.hourlyWeather.hourly[i].temp) + "°",
            }
        );
    }
    
    return (
        <div className={HourlyItemStyle.container}>
            <ul className={HourlyItemStyle.ul}>
                {data.map((item, index) => (
                    <li key={index} className={HourlyItemStyle.li}>
                        <p className={HourlyItemStyle.time}>{item.time}</p>
                        <img
                            src={item.img}
                            alt=""
                            className={HourlyItemStyle.img}
                        />
                        <p className={HourlyItemStyle.degree}>{item.degree}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

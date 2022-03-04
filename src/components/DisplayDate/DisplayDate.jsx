import DisplayDateStyle from "./DisplayDate.module.css";

const today = new Date();
const date = today.getDate();

function dayOfWeek() {
    const dayIndex = today.getDay();
    return [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wedensday",
        "Thursday",
        "Friday",
        "Saturday",
    ][dayIndex];
}

function monthOfYear() {
    const monthIndex = today.getMonth();
    return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ][monthIndex];
}

const day = dayOfWeek();
const month = monthOfYear();

export default function DisplayDate(props) {
    const propsObject = {
        name: props.current.name,
        country: props.current.sys.country,
    };
    return (
        <div className={DisplayDateStyle.container}>
            <p className={DisplayDateStyle.city}>
                {propsObject.name}, {propsObject.country}
            </p>
            <p className={DisplayDateStyle.date}>
                {month} {date}, {day}
            </p>
        </div>
    );
}

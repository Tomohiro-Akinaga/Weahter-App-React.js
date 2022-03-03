import React from "react";
import DisplayDateStyle from "../DisplayDate/DisplayDate.module.css";

export default function DisplayDate(props) {
    /* display state and country name */
    const state = props.currentWeather.name;
    const country = props.currentWeather.sys.country;
    /* display today date */
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

    return (
        <div className={DisplayDateStyle.container}>
            <p className={DisplayDateStyle.city}>{state}, {country} </p>
            <p className={DisplayDateStyle.date}>
                {month} {date}, {day}
            </p>
        </div>
    );
}

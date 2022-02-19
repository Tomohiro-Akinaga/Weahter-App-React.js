import DisplayDateStyle from "../DisplayDate/DisplayDate.module.scss"

export default function DisplayDate() {
    const today = new Date();
    const date = today.getDate();
    const day = ["Sunday", "Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday"];
    const dayIndex = today.getDay();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = today.getMonth();
    
    return (
        <div className={DisplayDateStyle.container}>
            <p className={DisplayDateStyle.city}>Vancouver, Canada</p>
            <p className={DisplayDateStyle.date}>{day[dayIndex]} {date} {month[monthIndex]}</p>
        </div>
    )
};
import DisplayDateStyle from "../DisplayDate/DisplayDate.module.css"

export default function DisplayDate() {
    return (
        <div className={DisplayDateStyle.container}>
            <p className={DisplayDateStyle.city}>London, UK</p>
            <p className={DisplayDateStyle.date}>Monday 14 Feburary</p>
        </div>
    )
};
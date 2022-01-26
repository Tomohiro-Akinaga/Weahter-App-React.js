import React from "react"
import ReactDOM from "react-dom"

export default function Title() {
    return (
        <div className="title">
            <div className="title__text">
                <h1 className="title__text--country">London, UK</h1>
                <p className="title__text--date">Monday 29, August</p>
            </div>
            <div className="title__search">
                <form className="title__search__form">
                    <input type="text" className="title__search__input"></input>
                    <button type="button" className="title__search__button"></button>
                </form>
            </div>
        </div>
    )
}
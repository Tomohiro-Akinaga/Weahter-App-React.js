import React from "react"
import "../css/app.css"
import CurrentDescriptionItem from "./CurrentDescriptionItem.js"

export default function CurrentDescription() {
    return (
        <div className="current-description">
            <div className="current-description__upper">
                <CurrentDescriptionItem />
                <CurrentDescriptionItem />
                <CurrentDescriptionItem />
            </div>
            <div className="current-description__lower">
                <CurrentDescriptionItem />
                <CurrentDescriptionItem />
                <CurrentDescriptionItem />
            </div>
        </div>
    )
};
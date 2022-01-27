import React from "react"
import "../css/app.css"
import CurrentDescriptionItem1 from "./CurrentDescriptionItem1.js"
import CurrentDescriptionItem2 from "./CurrentDescriptionItem2.js"
import CurrentDescriptionItem3 from "./CurrentDescriptionItem3.js"
import CurrentDescriptionItem4 from "./CurrentDescriptionItem4.js"
import CurrentDescriptionItem5 from "./CurrentDescriptionItem5.js"
import CurrentDescriptionItem6 from "./CurrentDescriptionItem6.js"

export default function CurrentDescription() {
    return (
        <div className="current-description">
            <div className="current-description__upper">
                <CurrentDescriptionItem1 />
                <CurrentDescriptionItem2 />
                <CurrentDescriptionItem3 />
            </div>
            <div className="current-description__lower">
                <CurrentDescriptionItem4 />
                <CurrentDescriptionItem5 />
                <CurrentDescriptionItem6 />
            </div>
        </div>
    )
};
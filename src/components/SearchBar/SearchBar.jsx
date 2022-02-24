import React from "react";
import SearchBarStyle from "../SearchBar/SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Autocomplete from "./Autocomplete.jsx";

export default function SearchBar() {

    const [keyword, setKeyword] = React.useState("[]");

    function handleChange(event) {
        if (!event.target.value) {
            setKeyword("[]");
        } else {
            setKeyword(event.target.value);
        }
    }
    
    return (
        <div className={SearchBarStyle.container}>
            <form className={SearchBarStyle.form} autoComplete="off" type="submit">
                <input className={SearchBarStyle.input} onChange={handleChange} type="text" placeholder="Enter country name"></input>
                <button className={SearchBarStyle.button} type="submit">
                    <FontAwesomeIcon className={SearchBarStyle.icon} icon={faMagnifyingGlass} />
                </button>
            </form>
            <Autocomplete keyword={keyword}/>
        </div>
    )
}
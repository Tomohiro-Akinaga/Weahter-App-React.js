import React, { useEffect } from "react";
import SearchBarStyle from "../SearchBar/SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Autocomplete from "./Autocomplete.jsx";

export default function SearchBar(props) {
    const [keyword, setKeyword] = React.useState("[]");
    const inputRef = React.useRef(null);

    function handleChange(event) {
        if (!event.target.value) {
            setKeyword("[]");
        } else {
            setKeyword(event.target.value);
        }
    }

    function handleClick(event) {
        inputRef.current.value = event.target.innerText;
        setKeyword("[]");
    }

    return (
        <div className={SearchBarStyle.container}>
            <form
                className={SearchBarStyle.form}
                autoComplete="off"
                type="submit"
                onSubmit={props.onSubmit}
            >
                <input
                    className={SearchBarStyle.input}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter country name"
                    ref={inputRef}
                ></input>
                <button className={SearchBarStyle.button} type="submit">
                    <FontAwesomeIcon
                        className={SearchBarStyle.icon}
                        icon={faMagnifyingGlass}
                    />
                </button>
            </form>
            <Autocomplete keyword={keyword} onClick={handleClick} />
        </div>
    );
}

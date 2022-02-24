import React, { useEffect } from "react";
import SearchBarStyle from "../SearchBar/SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Autocomplete from "./Autocomplete.jsx";

export default function SearchBar(props) {

    const [keyword, setKeyword] = React.useState("[]");
    const [country, setCountry] = React.useState("Canada");
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

    function handleSubmit(event) {
        event.preventDefault();
        setCountry(event.target.querySelector(".SearchBar_input__V8-ey").value);
    }

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=7d20d69e5d5abc8385c9ae6416019816`)
            .then(res => res.json())
            .then(data => {props.setApi(data)})
    }, [country]);

    

    return (
        <div className={SearchBarStyle.container} >
            <form className={SearchBarStyle.form} autoComplete="off" type="submit" onSubmit={handleSubmit}>
                <input className={SearchBarStyle.input} onChange={handleChange} type="text" placeholder="Enter country name" ref={inputRef}></input>
                <button className={SearchBarStyle.button} type="submit">
                    <FontAwesomeIcon className={SearchBarStyle.icon} icon={faMagnifyingGlass} />
                </button>
            </form>
            <Autocomplete keyword={keyword} onClick={handleClick}/>
        </div>
    )
}
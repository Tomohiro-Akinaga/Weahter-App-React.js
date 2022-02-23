import SearchBarStyle from "../SearchBar/SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import JSON from "./countryState.json";
// import Autocomplete from "./Autocomplete.jsx";

export default function SearchBar() {
    function handleChange(event) {
        const inputValue = event.target.value;
        const normalizedKeyword = inputValue.trim().toLowerCase();
        if(!normalizedKeyword) {
            return;
        }
        const matchedName = JSON.data.filter(x => 
            x.name.toLowerCase().substr(0, normalizedKeyword.length) === normalizedKeyword);
    }


    return (
        <div className={SearchBarStyle.container}>
            <form className={SearchBarStyle.form} autoComplete="off" type="submit">
                <input className={SearchBarStyle.input} onChange={handleChange} type="text" placeholder="Enter country name"></input>
                <button className={SearchBarStyle.button} type="submit">
                    <FontAwesomeIcon className={SearchBarStyle.icon} icon={faMagnifyingGlass} />
                </button>
            </form>
            {/* <Autocomplete /> */}
        </div>
    )
}
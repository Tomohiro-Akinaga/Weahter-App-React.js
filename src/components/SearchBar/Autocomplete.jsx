import JSON from "./countryState.json";
import SearchBarStyle from "./SearchBar.module.scss";

export default function Autocomplete(props) {
    
    const normalizedKeyword = props.keyword.trim().toLowerCase();
    const suggestedItem = JSON.data.filter(x => x.name.substr(0, normalizedKeyword.length).toLowerCase() === normalizedKeyword);
    console.log(suggestedItem);

    return (
        <div className={SearchBarStyle.autocomplete}>
            <ul className={SearchBarStyle.ul}>
                {suggestedItem.map(item => <li className={SearchBarStyle.li}>{item.name}</li> )}
            </ul>
        </div>
    )
}
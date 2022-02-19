import JSON from "./countryState.json";

export default function AutocompleteModel() {
    const input = document.getElementById("input");
    const normalizedKeyword = input.value.trim().toLowerCase();
    const matchName = JSON.data.filter(x => 
        x.name.toLowerCase().substr(0, normalizedKeyword.length) === normalizedKeyword
    );
    if (!normalizedKeyword) {
        return;
    } else {
        return matchName;
    }
}
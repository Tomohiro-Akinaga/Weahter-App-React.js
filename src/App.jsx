import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DisplayDate from "./components/DisplayDate/DisplayDate.jsx";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <div className="app-top">
        <DisplayDate />
        <SearchBar />
      </div>
      {/* <div className="app-middle">
        <CurrentWeather />
      </div> */}
    </div>
  )
};
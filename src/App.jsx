import React from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DisplayDate from "./components/DisplayDate/DisplayDate.jsx";
import "./App.scss";

export default function App() {

  const [api, setApi] = React.useState("");



  return (
    <div className="app">
      <div className="app-top">
        <DisplayDate />
        <SearchBar setApi={setApi}/>
      </div>
    </div>
  )
};
import React from "react";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import DisplayDate from "./components/DisplayDate/DisplayDate.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <DisplayDate />
      <SearchBar />
    </div>
  )
};
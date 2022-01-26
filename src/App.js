import React from "react"
import ReactDOM from "react-dom"
import Title from "./components/Title"
import ResultCurrentLeft from "./components/ResultCurrentLeft"
import ResultCurrentRight from "./components/ResultCurrentRight"
import ResultForecast from "./components/ResultForecast"

export default function App() {
  return (
    <div className="app">
      <Title />
      <ResultCurrentLeft />
      <ResultCurrentRight />
      <ResultForecast />
    </div>
  )
}

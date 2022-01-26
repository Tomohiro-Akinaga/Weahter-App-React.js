// import React from "react"
// import ReactDOM from 'react-dom'
import TitleForm from "./components/title-form/TitleForm.js"
import ResultCurrent from "./components/result-current/ResultCurrent.js"
import ResultForecast from "./components/result-forecast/ResultForecast.js"

export default function App() {
  return (
    <div className="App">
      <TitleForm />
      <ResultCurrent />
      <ResultForecast />
    </div>
  )
}

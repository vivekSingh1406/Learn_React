import { useState } from "react"
import "./Calculator.css"

function Calculator() {
  const [input, setInput] = useState("")

  const handleClick = (value) => {
    setInput(input + value)
  }

  const calculate = () => {
    try {
      setInput(eval(input).toString())
    } catch {
      setInput("Insert Value")
    }
  }

  const clear = () => {
    setInput("")
  }

  return (
    <div className="calculator-wrapper">
      
      {/* App Title OUTSIDE calculator */}
      <h1 className="app-title">Calculator App</h1>
      <p className="app-subtitle">vivek singh</p>

      {/* Calculator box */}
      <div className="calculator">
        <input type="text" value={input} readOnly />

        <div className="buttons">
          <button onClick={clear} className="clear">C</button>
          <button onClick={() => handleClick("/")}>÷</button>
          <button onClick={() => handleClick("*")}>×</button>
          <button onClick={() => handleClick("-")}>−</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={calculate} className="equal">=</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>

          <button onClick={() => handleClick("0")} className="zero">0</button>
          <button onClick={() => handleClick(".")}>.</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator

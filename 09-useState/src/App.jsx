import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)

  function increaseNum() {
    setnum(num + 1)
  }
  function decreaseNum() {
    setnum(num - 1)
  }
  function jumpBy5() {
    setnum(num + 5)
  }

  return (
    <div className="counter-container">
      <div className="counter-title">Counter</div>
      <h1 className="counter-value">{num}</h1>
      <div className="buttons-row">
        <button className="btn" onClick={decreaseNum}>- Decrease</button>
        <button className="btn btn-primary" onClick={increaseNum}>+ Increase</button>
      </div>
      <div className="buttons-row">
        <button className="btn" onClick={jumpBy5}>Jump by 5</button>
      </div>
    </div>
  )
}

export default App
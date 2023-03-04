import { useState } from 'react'
import './App.css'

function App() {
  const [itemPrice, setItemPrice] = useState(1)
  const [monthlySalary, setMonthlySalary] = useState(15000)
  const [HoursWorkingPerDay, sethoursWorkingPerDay] = useState(8)
  function outputMsg (itemPrice,monthlySalary,HoursWorkingPerDay) {
    const hourRate = monthlySalary/30/HoursWorkingPerDay
    return <span>Time in Hour: {(parseFloat(itemPrice)/(parseFloat(hourRate))).toFixed(2)}
    </span>
  }
  function DSPhourRate (itemPrice,monthlySalary,HoursWorkingPerDay) {
    const hourRate = monthlySalary/30/HoursWorkingPerDay
    return <span>
      Your HourRate : {hourRate.toFixed(2)}
    </span>    
  }
  function DSPworkdays (itemPrice,monthlySalary) {
    const dayRate = monthlySalary/30
    return <span>
      Workdays : {(parseFloat(itemPrice)/(parseFloat(dayRate))).toFixed(2)}
    </span>
  }

  return (
    <div className="App">
      <div className='container'>
        <label htmlFor="itemPrice">Cost of Product/Service</label>
        <input type="number" name="itemPrice" id="itemPrice" min={0} placeholder='###' 
        value={itemPrice} onChange={e => setItemPrice(e.target.value)} />
        <hr />
        <label htmlFor="monthlySalary">Your Monthly Salary</label>
        <input type="number" name="monthlySalary" id="monthlySalary" min={0} placeholder='##,###'
        value={monthlySalary} onChange={e => setMonthlySalary(e.target.value)} />
        <hr />
        <label htmlFor="HoursWorkingPerDay">Your Working Hours a Day</label>
        <input type="number" name="HoursWorkingPerDay" id="HoursWorkingPerDay" min={1} max={24} placeholder='1-24' 
        value={HoursWorkingPerDay} onChange={e => sethoursWorkingPerDay(e.target.value)} />
        <hr />
        <p id='result'>
          {DSPhourRate(itemPrice,monthlySalary,HoursWorkingPerDay)}<br />
          {outputMsg(itemPrice,monthlySalary,HoursWorkingPerDay)}<br />
          {DSPworkdays(itemPrice,monthlySalary)}
        </p>
        
      </div>
    </div>
  )
}

export default App

import { useState } from "react"

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const Feedback = ({ header, setters, values }) => {
  return (
    <>
      <h1>{header}</h1>
      <Button text="good" onClick={() => setters[0](values[0] + 1)} />
      <Button text="neutral" onClick={() => setters[1](values[1] + 1)} />
      <Button text="bad" onClick={() => setters[2](values[2] + 1)} />
    </>

  )
}

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + bad + neutral
  const average = (good * 1 + bad * -1) / sum
  const positive = good * 100 / sum

  return (
    <>
      <h1>Statistics</h1>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <hr />
      <div>All: {sum}</div>
      <div>Average: {average.toFixed(2) || "N.A"}</div>
      <div>Positive: {positive.toFixed(2) + "%" || "N.A"}</div>
    </>

  )
}

const App = () => {
  const [countGood, setCountGood] = useState(0)
  const [countNeutral, setCountNeutral] = useState(0)
  const [countBad, setCountBad] = useState(0)
  const header = "Give Feedback"


  return (
    <div>
      <Feedback header={header} setters={[setCountGood, setCountNeutral, setCountBad]} values={[countGood, countNeutral, countBad]} />
      <Statistics good={countGood} neutral={countNeutral} bad={countBad} />

    </div>
  )
}

export default App

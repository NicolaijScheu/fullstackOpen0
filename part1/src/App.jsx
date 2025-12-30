import { useState } from "react"

const Anecdote = ({ header, text, votes }) => {
  return (
    <>
      <h1>{header}</h1>
      <div>{text}</div>
      <div>has {votes} votes</div>
    </>
  )


}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })

  const highestVoteIndex = Object.keys(votes).reduce((highestIndex, key) => {
    return votes[highestIndex] > votes[key] ? highestIndex : key
  }, 0)

  const voteCount = Object.values(votes).reduce((sum, voteCount) => sum += voteCount)

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const selectNextRandomAnecdote = () => {
    const randomInt = getRandomInt(anecdotes.length)
    setSelected(randomInt)
  }

  const voteCurrentAnecdote = (selected) => {
    const copy = { ...votes }
    copy[selected] += 1

    setVotes(copy)
  }

  return (
    <div>
      <Anecdote header="Anecdote of the Day" text={anecdotes[selected]} votes={votes[selected]} />
      <button onClick={selectNextRandomAnecdote}>next anecdote</button>
      <button onClick={() => voteCurrentAnecdote(selected)}>vote</button>
      {voteCount > 0 ? <Anecdote header="Anecdote with most votes" text={anecdotes[highestVoteIndex]} votes={votes[highestVoteIndex]} /> : ""}
    </div>
  )
}

export default App

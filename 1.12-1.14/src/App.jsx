import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])

  const generateRandomNum = () => {
    let randomNum = Math.floor(Math.random() * 8)
    while (randomNum === selected) {
      randomNum = Math.floor(Math.random() * 8)
    }
    return randomNum
  }

  const incrementVote = () => {
    const voteIndex = anecdotes.findIndex((_, index) => index === selected)
    const newVotes = [...votes]
    newVotes[voteIndex] += 1
    setVotes(newVotes)
    calculateMostVotedAnecdote()
  }
  
  const calculateMostVotedAnecdote = () => {
    const actIndex = anecdotes.findIndex((_, index) => index === selected)
    const maxIndex = votes.reduce((actIndex, value, index) => {
      return votes[actIndex] > value ? actIndex : index
    }, 0)
    return {
      anecdote: anecdotes[maxIndex], 
      maxIndex,
      actIndex
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      <button onClick={() => setSelected(generateRandomNum)}>Generate anecdote</button>
      <button onClick={incrementVote}>Vote</button>
      <p>Has: {votes[calculateMostVotedAnecdote().actIndex]} votes</p>
      <h2>Anecdote with most votes</h2>
      {calculateMostVotedAnecdote().anecdote}
      <p>Has: {votes[calculateMostVotedAnecdote().maxIndex]} votes</p>
    </div>
  )
}

export default App
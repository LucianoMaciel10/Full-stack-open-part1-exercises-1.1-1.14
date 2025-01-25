import StatisticLine from "./StatisticLine"

function Statistics({good, bad, neutral}) {

  const total = good + bad + neutral
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  const positivePercentage = (good/total) * 100

  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div> 
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text={'Good'} value={good} />
          <StatisticLine text={'Neutral'} value={neutral} />
          <StatisticLine text={'Bad'} value={bad} />
          <StatisticLine text={'All'} value={total} />
          <StatisticLine text={'Average'} value={average} />
          <StatisticLine text={'Positive:'} value={positivePercentage} />
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
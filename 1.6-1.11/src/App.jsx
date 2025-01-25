import { useState } from 'react'
import Feedback from './Componets/Feedback'
import Statistics from './Componets/Statistics'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback
        setBad={() => setBad(bad + 1)}
        setGood={() => setGood(good + 1)}
        setNeutral={() => setNeutral(neutral + 1)}
      />
      <Statistics
        bad={bad}
        good={good}
        neutral={neutral}
      />
    </div>
  );
}

export default App
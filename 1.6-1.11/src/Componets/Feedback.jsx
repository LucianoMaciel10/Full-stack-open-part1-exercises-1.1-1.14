import Button from "./Button"


function Feedback({setGood, setNeutral, setBad}) {
  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={setGood} text={'Good'} />
      <Button onClick={setNeutral} text={'Neutral'} />
      <Button onClick={setBad} text={'Bad'} />
    </>
  )
}

export default Feedback
/* eslint-disable react/prop-types */
import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Counter = ({ text, value }) => (
  <p>
    {text}: {value}
  </p>
);

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    console.log("good clicked");
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    console.log("neutral clicked");
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    console.log("bad clicked");
    setBad(bad + 1);
  };

  return (
    <>
      <div>
        <Header text={"Give Feedback"} />
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
      </div>
      <div>
        <Header text={"statistics"} />
        <Counter text="good" value={good} />
        <Counter text="neutral" value={neutral} />
        <Counter text="bad" value={bad} />
      </div>
    </>
  );
};

export default App;

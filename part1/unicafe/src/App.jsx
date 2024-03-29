/* eslint-disable react/prop-types */
import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return total === 0 ? (
    <p>No feedback given yet</p>
  ) : (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="total" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + " %"} />
      </tbody>
    </table>
  );
};

const App = () => {
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
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
};

export default App;

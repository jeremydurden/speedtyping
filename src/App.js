import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({
    textarea: "",
    wordCount: 0,
  });

  const [timeRemaining, setTimeRemaining] = useState(5);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (timeRemaining > 0 && start) {
      setTimeout(() => {
        setTimeRemaining((prevState) => prevState - 1);
      }, 1000);
    }
  }, [timeRemaining, start]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const startGame = () => {
    if (!start) {
      setStart(true);
    }
  };

  const wordCounter = (text) => {
    const words = text.trim().split(" ");
    const count = words.filter((word) => word !== "").length;
    setData((prevState) => {
      return { ...prevState, wordCount: count };
    });
  };

  return (
    <div className="App">
      <h1 className="Title">How fast can you type?</h1>
      <textarea
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
        value={data.textarea}
        onChange={handleChange}
      />
      <h4>Time Left: {timeRemaining}</h4>
      <button onClick={() => wordCounter(data.textarea)}>Count</button>
      <button onClick={startGame}>Start</button>
      <h1>Word Count: {data.wordCount}</h1>
    </div>
  );
}

export default App;

import "./App.css";

import { useState, useEffect, useRef } from "react";

function App() {
  const STARTING_TIME = 5;

  const [data, setData] = useState({
    textarea: "",
    wordCount: 0,
  });

  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [start, setStart] = useState(false);
  const [retry, setRetry] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (timeRemaining > 0 && start) {
      setTimeout(() => {
        setTimeRemaining((prevState) => prevState - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
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
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };

  const endGame = () => {
    setStart(false);
    setRetry(true);
    wordCounter(data.textarea);
  };

  const playAgain = () => {
    setTimeRemaining(STARTING_TIME);
    setData({
      textarea: "",
      wordCount: 0,
    });
    setStart(false);
    setRetry(false);
    startGame();
    console.log("retry");
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
        ref={inputRef}
        disabled={!start}
      />
      <h4>Time Left: {timeRemaining}</h4>
      <button onClick={retry ? playAgain : startGame}>
        {retry ? "Retry" : "Start"}
      </button>
      <h1>Word Count: {data.wordCount}</h1>
    </div>
  );
}

export default App;

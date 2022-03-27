import { useState, useEffect, useRef } from "react";

const useWordGame = (playingTime = 15) => {
  const [data, setData] = useState({
    textarea: "",
    wordCount: 0,
  });

  const [timeRemaining, setTimeRemaining] = useState(playingTime);
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
    setTimeRemaining(playingTime);
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

  return [
    data.textarea,
    handleChange,
    inputRef,
    start,
    timeRemaining,
    retry,
    data.wordCount,
    playAgain,
    startGame,
  ];
};

export default useWordGame;

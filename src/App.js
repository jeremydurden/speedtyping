import "./App.css";
import useWordGame from "./hooks/useWordGame";

function App() {
  const [
    textarea,
    handleChange,
    inputRef,
    start,
    timeRemaining,
    retry,
    wordCount,
    playAgain,
    startGame,
  ] = useWordGame(20);

  return (
    <div className="App">
      <h1 className="Title">How fast can you type?</h1>
      <textarea
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
        value={textarea}
        onChange={handleChange}
        ref={inputRef}
        disabled={!start}
      />
      <h4>Time Left: {timeRemaining}</h4>
      <button onClick={retry ? playAgain : startGame}>
        {retry ? "Retry" : "Start"}
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;

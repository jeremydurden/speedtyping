import "./App.css";

import { useState } from "react";

function App() {
  const [data, setData] = useState({ textarea: "", wordCount: 0 });

  console.log(data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const wordCounter = () => {
    const words = data.textarea.split(" ");
    const count = words.length;
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
      <h4>Time Left: </h4>
      <button onClick={wordCounter}>Start</button>
      <h1>Word Count: {data.wordCount}</h1>
    </div>
  );
}

export default App;

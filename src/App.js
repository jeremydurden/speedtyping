import "./App.css";

import { useState } from "react";

function App() {
  const [data, setData] = useState({ textarea: "" });

  console.log(data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => {
      return { ...prevState, [name]: value };
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
      <button>Start</button>
      <h1>Word Count: </h1>
    </div>
  );
}

export default App;

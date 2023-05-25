import React, { useState } from "react";
import "./wordcounter.scss";

function WordCounter() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const getWordCount = () => {
    if (text.trim() === "") {
      return 0;
    }
    return text.trim().split(/\s+/).length;
  };

  const getCharCount = () => {
    return text.length;
  };

  return (
    <div className="counter">
      <h1>Word & Character counters</h1>
      <textarea value={text} onChange={handleChange} placeholder="ً" />
      <p>Word Count: {getWordCount()}</p>
      <p>Character Count: {getCharCount()}</p>
    </div>
  );
}

export default WordCounter;

import React, { useState } from "react";
import "./text.scss";

function Text() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const removeDiacritics = (text) => {
    return text.normalize("NFKD").replace(/[\u064B-\u065F]/g, "");
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setOutputText(removeDiacritics(event.target.value));
  };

  return (
    <div className="text">
      <h1>Arabic Diacritics Remover</h1>
      <div>
        <label>Text with diacritics </label>
        <textarea
          type="text"
          id="input-text"
          className="form-control"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Text without diacritics</label>
        <textarea
          type="text"
          id="output-text"
          className="form-control"
          value={outputText}
          readOnly
        />
      </div>
    </div>
  );
}

export default Text;

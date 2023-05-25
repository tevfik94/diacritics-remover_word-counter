import React, { useState } from "react";

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

  //   return (
  //     <div>
  //       <h1>Arabic Diacritics Remover</h1>
  //       <label htmlFor="input-text">Input Text:</label>
  //       <input
  //         type="text"
  //         id="input-text"
  //         value={inputText}
  //         onChange={handleInputChange}
  //       />
  //       <br />
  //       <label htmlFor="output-text">Output Text:</label>
  //       <input type="text" id="output-text" value={outputText} readOnly />
  //     </div>
  //   );

  return (
    <div>
      <h1>Arabic Diacritics Remover</h1>
      <div>
        <label>Input Text:</label>
        <textarea
          type="text"
          id="input-text"
          className="form-control"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Output Text:</label>
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

import React, { useState } from "react";
import * as XLSX from "xlsx/xlsx.mjs";
import "./file.scss";

function File() {
  const [inputList, setInputList] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false); // add a state variable to track file upload status

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const inputList = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setInputList(inputList.flat().filter((i) => i && typeof i === "string"));
      setFileUploaded(true); // update the state variable when file is uploaded
    };
    reader.readAsArrayBuffer(file);
  };

  const handleExport = () => {
    const teshkelList = ["َ", "ً", "ُ", "ٌ", "ِ", "ٍ", "ْ", "’", "ّ"];
    const file = document.querySelector('input[type="file"]').files[0];
    const originalFileName = file.name.split(".")[0];
    const fileName = `Output_${originalFileName}.xlsx`;
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(
      inputList.map((line) => {
        try {
          teshkelList.forEach((i) => {
            line = line.replace(new RegExp(i, "g"), "");
          });
          return [line];
        } catch (error) {
          console.log(error);
          return [line];
        }
      })
    );
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className="file">
      <input
        type="file"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={handleFileChange}
      />
      {fileUploaded && <button onClick={handleExport}>Export</button>}
      <p>The file should be Excel and in 1 sheet</p>
    </div>
  );
}

export default File;

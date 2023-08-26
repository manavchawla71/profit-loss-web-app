import React from "react";

const ResultBox = ({ result, status }) => {
  return (
    <div className="result-box">
      <h2>Result:</h2>
      <p>Result: {result}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default ResultBox;

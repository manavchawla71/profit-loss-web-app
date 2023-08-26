import "./styles.css";
import Navbar from "./components/Navbar";
import ResultBox from "./components/ResultBox"; // Import the ResultBox component
import { useState } from "react";

export default function App() {
  const [cost, setCost] = useState(0);
  const [sell, setSell] = useState(0);
  const [result, setResult] = useState(null); // State to store the result
  const [status, setStatus] = useState(""); // State to store the status

  const handleCheck = () => {
    // Convert cost and sell to numbers
    const costValue = parseFloat(cost);
    const sellValue = parseFloat(sell);

    if (isNaN(costValue) || isNaN(sellValue)) {
      // Handle invalid input
      setResult("Invalid input");
      setStatus("Error");
    } else if (costValue > sellValue) {
      setResult("Loss");
      setStatus("Negative");
    } else if (costValue < sellValue) {
      setResult("Profit");
      setStatus("Positive");
    } else {
      setResult("No profit, no loss");
      setStatus("Neutral");
    }
  };

  const handleReset = () => {
    // Reset the inputs and result
    setCost(0);
    setSell(0);
    setResult(null);
    setStatus("");
  };

  return (
    <div className="App">
      <Navbar />
      Cost:
      <input
        type="text"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />{" "}
      <br />
      Sell:
      <input
        type="text"
        value={sell}
        onChange={(e) => setSell(e.target.value)}
      />
      <br />
      <button onClick={handleCheck}>Check</button>
      <button onClick={handleReset}>Reset</button>
      {result !== null && <ResultBox result={result} status={status} />}
    </div>
  );
}

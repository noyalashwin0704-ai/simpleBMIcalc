import { useState } from "react";
import BMIForm from "./components/BMIForm";
import ResultCard from "./components/ResultCard";
import BMIMeter from "./components/BMIMeter";
import "./App.css";

function App() {
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;

    const bmiValue = (
      weight / (heightInMeters * heightInMeters)
    ).toFixed(1);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue < 25) {
      setStatus("Normal");
    } else if (bmiValue < 30) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <div className={`app ${status.toLowerCase()}`}>
      <h1>🏋️ BMI Calculator</h1>

      <BMIForm calculateBMI={calculateBMI} />

      {bmi && (
        <>
          <ResultCard bmi={bmi} status={status} />
          <BMIMeter bmi={bmi} />
        </>
      )}
    </div>
  );
}

export default App;
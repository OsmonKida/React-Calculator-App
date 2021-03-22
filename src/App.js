import "./styles/index.css";
import Button from "./Components/Button";
import Label from "./Components/Label";
import { useState } from "react";
function App() {
  const [label, setLabel] = useState("0");
  const [firstOperand, setFirstOperand] = useState(0);
  const [operator, setOperator] = useState("");

  const handleButton = (value) => {
    if (label === "0" && value === ".") {
      setLabel("0.");
    } else if (label === "0") {
      setLabel(value);
    } else if (label.indexOf(".") === -1 && value === ".") {
      setLabel(label + ".");
    } else if (label.indexOf(".") !== -1 && value === ".") {
    } else {
      setLabel(label + value);
    }
  };

  const handleClear = () => {
    setLabel("0");
  };

  const handleDelete = () => {
    if (label.length === 1) {
      setLabel("0");
    } else {
      setLabel(label.slice(0, -1));
    }
  };

  const handleOperations = (operator) => {
    setOperator(operator);
    setFirstOperand(parseFloat(label));
    setLabel("0");
  };

  const handleEqual = () => {
    // setSecondOperand(parseInt(label));
    let secondOperand = parseFloat(label);
    let sum = 0;
    if (operator === "+") {
      sum = firstOperand + secondOperand;
    }
    if (operator === "-") {
      sum = firstOperand - secondOperand;
    }
    if (operator === "*") {
      sum = firstOperand * secondOperand;
    }
    if (operator === "/") {
      sum = firstOperand / secondOperand;
    }
    setLabel("" + sum);
  };
  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <Label value={label} />
        </div>
        <div className="row">
          <Button handleClear={handleClear}>Clear</Button>
          <Button handleDelete={handleDelete}>Delete</Button>
          <Button>%</Button>
          <Button handleOperations={handleOperations}>/</Button>
        </div>
        <div className="row">
          <Button handleButton={handleButton}>7</Button>
          <Button handleButton={handleButton}>8</Button>
          <Button handleButton={handleButton}>9</Button>
          <Button handleOperations={handleOperations}>*</Button>
        </div>
        <div className="row">
          <Button handleButton={handleButton}>4</Button>
          <Button handleButton={handleButton}>5</Button>
          <Button handleButton={handleButton}>6</Button>
          <Button handleOperations={handleOperations}>-</Button>
        </div>
        <div className="row">
          <Button handleButton={handleButton}>1</Button>
          <Button handleButton={handleButton}>2</Button>
          <Button handleButton={handleButton}>3</Button>
          <Button handleOperations={handleOperations}>+</Button>
        </div>
        <div className="row">
          <Button handleButton={handleButton}>0</Button>
          <Button handleButton={handleButton}>.</Button>
          <Button handleEqual={handleEqual}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;

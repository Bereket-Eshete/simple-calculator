import React, { useState } from "react";
import { evaluate, re } from "mathjs";
const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
  "-",
  "c",
];
const Calculator = () => {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    if (value === "c") {
      setInput("");
    } else if (value === "=") {
      try {
        const result = evaluate(input).toString();
        setInput(result);
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };
  return (
    <div className="calculator">
      <div className="container">
        <div className="display">{input || 0}</div>
        <div className="buttons">
          {buttons.map((value, index) => {
            return (
              <button
                key={index}
                className={
                  value === "c"
                    ? "clear"
                    : value === "="
                    ? "equals"
                    : ["+", "-", "*", "/"].includes(value)
                    ? "opertors"
                    : ""
                }
                onClick={() => handleClick(value)}
              >
                {value}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;

import React, { useState } from "react";

const DynamicInputForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={styles.container}>
      <form>
        <label
          htmlFor="userInput"
          style={styles.label}
        >
          Enter Text:
        </label>
        <input
          type="text"
          id="userInput"
          value={inputValue}
          onChange={handleChange}
          style={styles.input}
        />
      </form>
      <p style={styles.display}>You typed: {inputValue}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  label: {
    fontSize: "18px",
    marginRight: "10px",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  display: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#555",
  },
};

export default DynamicInputForm;

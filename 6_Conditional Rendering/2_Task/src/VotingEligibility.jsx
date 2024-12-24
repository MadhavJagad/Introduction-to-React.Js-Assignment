import React, { useState } from "react";

const VotingEligibility = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const isEligibleToVote = age >= 18;

  return (
    <div style={styles.container}>
      <h1>Voting Eligibility Checker</h1>
      <input
        type="number"
        value={age}
        onChange={handleChange}
        placeholder="Enter your age"
        style={styles.input}
      />
      <p style={styles.message}>
        {isEligibleToVote
          ? "You are eligible to vote."
          : "You are not eligible to vote."}
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  message: {
    fontSize: "18px",
    color: "#555",
  },
};

export default VotingEligibility;

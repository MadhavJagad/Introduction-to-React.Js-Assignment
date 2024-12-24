import React from "react";

const UserCard = ({ name, age, location }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.detail}>Age: {age}</p>
      <p style={styles.detail}>Location: {location}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "300px",
    margin: "10px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  name: {
    margin: "0 0 10px",
    color: "#333",
  },
  detail: {
    margin: "5px 0",
    color: "#555",
  },
};

export default UserCard;

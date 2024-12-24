import React, { useState } from "react";

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={styles.container}>
      <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>
      <button
        onClick={toggleLoginStatus}
        style={{
          ...styles.button,
          backgroundColor: isLoggedIn ? "#dc3545" : "#007bff",
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AuthButton;

import React from "react";

const App = () => {
  const jsxDescription =
    "JSX stands for JavaScript XML, and it's a syntax extension for JavaScript. JSX allows you to write HTML elements in React, making it easier to structure the UI.";
  return (
    <>
      <div>
        <h1>Welcome to JSX</h1>
        <p>{jsxDescription}</p>
      </div>
    </>
  );
};

export default App;

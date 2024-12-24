import React from "react";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div>
      <UserCard
        name="Madhav Jagad"
        age={23}
        location="Surat, India"
      />
      <UserCard
        name="Ramesh Maheta"
        age={30}
        location="Mumbai, India"
      />
    </div>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import { UserProvider, useUser } from "./context/userContext";
import { NumberContext, useNumber } from "./context/numberContext";
import { useState } from "react";
import { useContext } from "react";
import MyNumber from "./MyNumber";
// import {BrowserRouter as Router } from 'react-router-dom';
function App() {
  const { user } = useUser();
  const [myNumber, setMyNumber] = useState(0);
  console.log(user);
  console.log(myNumber);
  return (
    <NumberContext.Provider value={{ number:myNumber }}>
      <div>
        <MyNumber />
        <h1>React Context</h1>
        <h2>user.name: {user.name}</h2>
        <button
          onClick={() => {
            setMyNumber(myNumber + 1);
          }}
          style={{
            padding: ".5rem",
            background: "red",
            borderRadius: ".3rem",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
        >
          +
        </button>
        <MyNumber />
      </div>
    </NumberContext.Provider>
  );
}

export default App;

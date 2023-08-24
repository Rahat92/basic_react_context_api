import logo from "./logo.svg";
import "./App.css";
import { UserProvider, useUser } from "./context/userContext";
// import {BrowserRouter as Router } from 'react-router-dom';
function App() {
  const { user } = useUser();
  console.log(user)
  return (
    <>
      <h1>React Context</h1>
      <h2>user.name: {user.name}</h2>
    </>
  );
}

export default App;

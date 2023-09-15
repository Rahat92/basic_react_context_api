import React from "react";
import YoutubeForm from "./components/YoutubeForm";
import Alert from "./components/Alert.tsx";

function App() {
  return (
    <div>
      <YoutubeForm />
      <Alert color= 'red'>
        <h1>Are you sure you want to delete this item</h1>
      </Alert>
    </div>
  );
}

export default App;

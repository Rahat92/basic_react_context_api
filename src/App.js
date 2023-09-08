import { useEffect, useState } from "react";
import { Audio, FallingLines, TailSpin, Circles } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    setLoading(false);
  }, []);
  if (loading) {
    return (
      <TailSpin
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    );
  }
  return <div>data fetched</div>;
}

export default App;

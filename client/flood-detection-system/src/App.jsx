import { useState } from "react";
import Home from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;

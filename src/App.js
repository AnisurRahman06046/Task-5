import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("click me");
  const [count, setCount] = useState(1);

  const handleBtnClick = () => {
    setCount(count + 1);
    if (count === 3) {
      setText("bang");
      setCount(1);
    } else {
      setText("click me");
    }
  };
  return (
    <div>
      <button
        className="btn btn-primary mx-[500px] my-8"
        onClick={handleBtnClick}
      >
        {text}
      </button>
    </div>
  );
}

export default App;

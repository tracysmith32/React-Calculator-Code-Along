import { evaluate } from "mathjs";
import { useState } from "react";
import "./App.css";
import Displays from "./components/Displays";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";

const App = () => {
  //current state and a function that updates the state.
  const [input, setInput] = useState("");//change to zero when function is written

  const calculate = (button) => {
    if (button === "=") {
      const result = evaluate(input);
      setInput(result);
    } else if (button === "c") {
      setInput("");//change to zero when function is written
    } else {
      setInput(input + button);
    }
  };

  const handleClick = (event) => {
    const display = event.target.innerText;
    calculate(display);
  };

  //function for onClick event, use the event object, target property and innerText property to display our outputs
  // const setZero = (value) => {
  //   if (input === "0") {
  //     setInput(value);
  //     return;
  //   }
  //   setInput(input + value);
  // };

  return (
    <div className="App">
      <h1>Calculator APP</h1>
      <Displays input={input} />
      <Operators handleClick={handleClick} />
      <Numbers handleClick={handleClick} />
    </div>
  );
};

export default App;

import { useState } from "react";
import { fizzBuzz } from "./fizzBuzz";

export default function Main(): JSX.Element {
  const [counter, setCounter] = useState(0);

  const handleAddOne = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h2>Manipulate the counter below to see how Fizz Buzz works!</h2>
      <p>Counter:{counter}</p>
      <button onClick={handleAddOne}>+1</button>
      <hr />
      <button onClick={handleReset}>Reset the counter</button>

      <hr />
      <h1>{fizzBuzz(counter)}</h1>
    </div>
  );
}

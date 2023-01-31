import { useState } from "react";
import "./Counter.scss";

type Props = {};

const Counter = (props: Props) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => setValue((prev) => prev + 1);

  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h1>Count: {value}</h1>
    </div>
  );
};

export default Counter;

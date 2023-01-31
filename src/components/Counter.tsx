import { useState } from "react";
import classes from "./Counter.module.scss";

type Props = {};

const Counter = (props: Props) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => setValue((prev) => prev + 1);

  return (
    <div>
      <button onClick={handleIncrement} className={classes.button}>
        +
      </button>
      <h1>Count: {value}</h1>
    </div>
  );
};

export default Counter;

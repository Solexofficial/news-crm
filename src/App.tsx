import React from "react";
import Counter from "./components/counter";
import "./index.scss";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="app">
      hello
      <Counter />
    </div>
  );
};

export default App;

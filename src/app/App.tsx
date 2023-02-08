import { useTheme } from "app/providers/ThemeProvider";
import { Routing } from "pages";
import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <Routing />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};

export default App;

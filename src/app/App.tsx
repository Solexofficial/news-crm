import { useTheme } from "app/providers/ThemeProvider";
import { AboutPageAsync } from "pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "pages/MainPage/MainPage.async";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "shared/config/lib/classnames/classNames";
import "./styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>

      <button onClick={toggleTheme}>TOGGLE</button>

      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

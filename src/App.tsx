import { Routes, Route, Link } from "react-router-dom";
import "./index.scss";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="app">
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Routes>
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/"} element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default App;

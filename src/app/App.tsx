import { useTheme } from "app/providers/ThemeProvider";
import { Routing } from "pages";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <Routing />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

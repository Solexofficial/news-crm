import { useTheme } from "app/providers/ThemeProvider";
import { Routing } from "pages";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import "./styles/index.scss";

const Component = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div>
      <button onClick={toggleLang}>{t("Перевод")}</button>
      {t("Тестовый пример")}
    </div>
  );
};

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Component />
        <div className="content-page">
          <Sidebar />
          <Routing />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

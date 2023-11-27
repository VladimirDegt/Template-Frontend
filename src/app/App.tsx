import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button type="button" onClick={toggleTheme}>
        Переключити тему
      </button>
      <Link to="/">Головна</Link>
      <Link to="/about">Про сайт</Link>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

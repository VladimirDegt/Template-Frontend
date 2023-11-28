import {  Link } from "react-router-dom";
import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import AppRouter from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
      <div className={classNames("app", {}, [theme])}>
          <button type="button" onClick={toggleTheme}>
              Переключити тему
          </button>
          <Link to="/">Головна</Link>
          <Link to="/about">Про сайт</Link>
          <AppRouter />
      </div>
  );
};

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/light.svg";
import DarkIcon from "shared/assets/icons/dark.svg";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className = "" }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  return (
    <button className={classNames(cls.themeSwitcher, {}, [className])} onClick={toggleTheme}>
      Сменить тему
    </button>
  );
};

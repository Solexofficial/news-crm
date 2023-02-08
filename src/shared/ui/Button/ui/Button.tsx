import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className = "",
  children,
  variant = ThemeButton.CLEAR,
  ...otherProps
}) => {
  return (
    <button className={classNames(cls.button, {}, [className, cls[variant]])} {...otherProps}>
      {children}
    </button>
  );
};

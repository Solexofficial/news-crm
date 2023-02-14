import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  PRIMARY = 'primary',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className = '',
  children,
  variant = ThemeButton.PRIMARY,
  ...otherProps
}) => {
  return (
    <button
      type="button"
      className={classNames(cls.button, {}, [className, cls[variant]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

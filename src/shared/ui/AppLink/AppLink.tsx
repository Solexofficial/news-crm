import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type AppLinkProps = LinkProps & {
  className?: string;
  theme?: AppLinkTheme;
};

export const AppLink: FC<AppLinkProps> = ({
  to = '/',
  className = '',
  children,
  theme = AppLinkTheme.PRIMARY,
  ...otherProps
}) => {
  return (
    <Link {...otherProps} to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
};

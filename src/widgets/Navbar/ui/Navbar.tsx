import { FC } from "react";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classnames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

type NavbarProps = {
  className?: string;
};

export const Navbar: FC<NavbarProps> = ({ className = "" }) => {
  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={"/"} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          О сайте
        </AppLink>
      </div>
    </nav>
  );
};

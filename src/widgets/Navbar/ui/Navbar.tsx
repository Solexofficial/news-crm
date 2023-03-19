import { LoginModal } from 'features/AuthByUsername';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModalOpen(true);
  }, []);

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          {t('Главная')}
        </AppLink>
        <Button variant={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
          {t('Войти')}
        </Button>

        <LoginModal isOpen={isAuthModalOpen} onClose={onCloseModal} />
      </div>
    </nav>
  );
};

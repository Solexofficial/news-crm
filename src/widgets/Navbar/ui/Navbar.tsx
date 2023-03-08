import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar: FC<NavbarProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModalOpen((prev) => !prev);
  }, []);

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          {t('Главная')}
        </AppLink>
        <Button variant={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
          {t('Войти')}
        </Button>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quibusdam nesciunt
          delectus corrupti, odit molestias dolorum a! Obcaecati, ratione fugiat dolores inventore,
          dignissimos aut dolor, delectus sed temporibus tempora dolorem!
        </Modal>
      </div>
    </nav>
  );
};

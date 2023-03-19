import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

type LoginFormProps = {
  className?: string;
};

export const LoginForm: FC<LoginFormProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input className={cls.input} type="text" placeholder={t('Введите имя')} autoFocus />
      <Input className={cls.input} type="text" placeholder={t('"Введите пароль"')} />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};

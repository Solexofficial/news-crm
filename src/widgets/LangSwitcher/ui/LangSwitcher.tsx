import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className = '' }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch((err) => {
      console.error(err);
    });
  };
  return (
    <Button
      variant={ThemeButton.CLEAR}
      onClick={toggleLang}
      className={classNames('', {}, [className, cls[theme]])}
    >
      {t('Язык')}
    </Button>
  );
};

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className = '' }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch((err) => {
      console.error(err);
    });
  };
  return (
    <Button
      variant={ThemeButton.CLEAR}
      onClick={toggleLang}
      className={classNames('', {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};

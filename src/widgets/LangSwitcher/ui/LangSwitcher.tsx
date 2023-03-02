import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className = '', short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').catch((err) => {
      console.error(err);
    });
  };
  return (
    <Button
      variant={ButtonTheme.CLEAR}
      onClick={toggleLang}
      className={classNames('', {}, [className])}
    >
      {short ? t('Короткий Язык') : t('Язык')}
    </Button>
  );
};

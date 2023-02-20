import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames2/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      variant={ThemeButton.CLEAR}
    >
      {theme === Theme.LIGHT ? <LightIcon fill="#ffffff" /> : <DarkIcon fill="#ffffff" />}
    </Button>
  );
};

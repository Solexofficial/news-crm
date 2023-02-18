/* eslint-disable i18next/no-literal-string */
import { Button } from 'shared/ui/Button';
import { render, screen } from '@testing-library/react';
import { ThemeButton } from './Button';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    render(<Button variant={ThemeButton.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
    screen.debug();
  });
});

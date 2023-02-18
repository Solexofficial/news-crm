import { Button } from 'shared/ui/Button';
import { render, screen } from '@testing-library/react';

describe('classNames', () => {
  test('with only first param', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});

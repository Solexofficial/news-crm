import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export function componentRender(Component: ReactNode) {
  return render(
    <MemoryRouter>
      <I18nextProvider i18n={i18nForTests}>{Component}</I18nextProvider>
    </MemoryRouter>,
  );
}

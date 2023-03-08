import { type FC, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './ThemeProvider';
import { ErrorBoundary } from './ErrorBoundary';
// import { StoreProvider } from './StoreProvider';
import 'shared/config/i18n/i18n';

export const Providers: FC = ({ children }) => {
  return (
    <BrowserRouter>
      {/* <StoreProvider> */}
      <Suspense fallback="">
        <ErrorBoundary>
          <ThemeProvider>{children}</ThemeProvider>
        </ErrorBoundary>
      </Suspense>
      {/* </StoreProvider> */}
    </BrowserRouter>
  );
};

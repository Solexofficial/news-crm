import { NotFoundPage } from 'pages/NotFoundPage';
import { lazy, Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { AppRoutes, RouterPath } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const MainPage = lazy(() => import('./MainPage'));
const AboutPage = lazy(() => import('./AboutPage'));

export const routes: RouteProps[] = [
  {
    path: RouterPath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  {
    path: RouterPath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  {
    path: RouterPath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
];

export const Routing = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">{element}</div>
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

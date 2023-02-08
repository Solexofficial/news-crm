import { lazy, Suspense } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";
import { AppRoutes, RouterPath } from "shared/config/routeConfig/routeConfig";

const MainPage = lazy(() => import("./MainPage"));
const AboutPage = lazy(() => import("./AboutPage"));

export const routes: RouteProps[] = [
  {
    path: RouterPath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  {
    path: RouterPath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
];

export const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

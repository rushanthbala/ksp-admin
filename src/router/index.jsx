import { createBrowserRouter } from "react-router-dom";
import { routes, publicRoute } from "./routes";
import React from "react";
import RootLayout from "../components/layouts/RootLayout";
import ErrorBoundary from "../pages/Error/error";
// import { isAuthData } from '../utils/utils';

const finalRoutes = false
  ? routes.map((route) => {
      return {
        ...route,
        element:
          route.layout === "blank" ? (
            <div>{route.element}</div>
          ) : (
            <RootLayout>{route.element}</RootLayout>
          ),
      };
    })
  : publicRoute.map((route) => {
      return {
        ...route,
        element:
          route.layout === "blank" ? (
            <div>{route.element}</div>
          ) : (
            <ErrorBoundary>
              <RootLayout>{route.element}</RootLayout>
            </ErrorBoundary>
          ),
      };
    });

const router = createBrowserRouter(finalRoutes);

export default router;

import React, { lazy } from "react";

import { allRoutesPath } from "./routesPath";
import NewProduct from "../pages/newProduct";
import Orders from "../pages/orders";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Upcoming = lazy(() => import("../pages/Upcoming"));

// add all routes to publicRoute array before login

const publicRoute = [
  {
    path: allRoutesPath.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: allRoutesPath.NEWPRODUCT,
    element: <NewProduct />,
  },
  {
    path: allRoutesPath.ORDERS,
    element: <Orders />,
  },
  

  {
    path: "*",
    element: <Upcoming />,
  },
];
const routes = [
  // dashboard
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <Upcoming />,
  },
];

export { routes, publicRoute };

import React from "react";

const HomePage = React.lazy(() => import("homePage/HomePage"));
const ListPage = React.lazy(() => import("listPage/ListPage"));
const NotFound = React.lazy(() => import("../components/NotFound"));

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;

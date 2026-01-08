import { lazy } from "react";
import MainLayout from "@/router/layouts/MainLayout";

const Home = lazy(() => import("@/component/homePage/BodyHomePage"));

const NotFound = lazy(() => import("@/component/pages/misc/error404"));

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

import { lazy } from "react";
import MainLayout from "@/router/layouts/MainLayout";

const Home = lazy(() => import("@/component/homePage/BodyHomePage"));
const NotFound = lazy(() => import("@/component/pages/misc/error404"));
const AllProduct = lazy(() => import("@/component/pages/product/AllProduct"));

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <AllProduct /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

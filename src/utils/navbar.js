import React from "react";
import SignIn from "../components/SignIn";
import useId from "../hooks/useId";
import Loader from "../components/Loader";
// import HomePage from "../pages/Home";
const PropertiesPage = React.lazy(() => import("../pages/Properties"));
const HomePage = React.lazy(() => import("../pages/Home"));
const HouseItemPage = React.lazy(() => import("../pages/HouseItem"));

// import PropertiesPage from "../pages/Properties";

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<Loader />}>
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<Loader />}>
        <PropertiesPage />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<Loader />}>
        <HouseItemPage />
      </React.Suspense>
    ),
    title: "Single House",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <SignIn />,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
];

import { protectedLoader } from "@/lib/reactRouter";
import ProtectedRoute from "@/lib/reactRouter/ProtectedRoute/ProtectedRoute";
import Auth from "@/pages/auth/Auth";
import Signin from "@/pages/auth/singin/Signin";
import Signup from "@/pages/auth/signup/Signup";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";
import Categories from "@/pages/home/categories/Categories";
import Accounts from "@/pages/home/accounts/Accounts";
import Overview from "@/pages/home/overview/Overview";
import Operations from "@/pages/home/operations/Operations";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    loader: protectedLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Overview />,
          },
          {
            path: "/categories",
            element: <Categories />,
          },
          {
            path: "/accounts",
            element: <Accounts />,
          },
          {
            path: "/operations",
            element: <Operations />,
          },
          {
            path: "/dynamic",
            element: <Operations />,
          },
        ],
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/accounts",
        element: <Accounts />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;

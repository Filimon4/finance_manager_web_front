import { protectedLoader } from "@/lib/reactRouter";
import ProtectedRoute from "@/lib/reactRouter/ProtectedRoute/ProtectedRoute";
import Auth from "@/pages/auth/Auth";
import Signin from "@/pages/auth/singin/Signin";
import Signup from "@/pages/auth/signup/Signup";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    loader: protectedLoader,
    children: [
      {
        path: "/",
        element: <Home />,
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

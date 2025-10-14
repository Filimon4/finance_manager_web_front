import { protectedLoader } from "@/lib/react-router";
import ProtectedRoute from "@/lib/react-router/ProtectedRoute/ProtectedRoute";
import Auth from "@/pages/auth/Auth";
import Signin from "@/pages/auth/singin/Signin";
import Signup from "@/pages/auth/signup/Signup";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
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
]);

export default router;

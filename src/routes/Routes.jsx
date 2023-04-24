import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Career from "../pages/Career";
import Category from "../components/Category";
import News from "../pages/news/News";
import NewsLayout from "../layout/NewsLayout";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "career",
        element: <Career />,
      },
    ],
  },
  {
    path: "category",
    element: <Main />,

    children: [
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;

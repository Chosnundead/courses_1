import { About } from "../pages/About";
import { Error } from "../pages/Error";
import { LoginPage } from "../pages/LoginPage";
import { PostIdPage } from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const routes = [
  { path: "/about", element: <About></About>, exact: true },
  { path: "/posts", element: <Posts></Posts>, exact: true },
  { path: "/posts/:id", element: <PostIdPage></PostIdPage>, exact: true },
  { path: "/error", element: <Error></Error>, exact: true },
];

export const publicRoutes = [
  { path: "/error", element: <Error></Error>, exact: true },
  { path: "/login", element: <LoginPage></LoginPage>, exact: true },
];

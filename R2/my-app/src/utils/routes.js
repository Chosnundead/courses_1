import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";

export const routes = [
  { path: "/about", element: <About></About>, exact: true },
  { path: "/projects", element: <Projects></Projects>, exact: true },
  { path: "/", element: <Home></Home>, exact: true },
];

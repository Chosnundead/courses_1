import { Route, Routes } from "react-router-dom";
import { routes } from "../utils/routes";

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          exact={item.exact}
          element={item.element}
        />
      ))}
    </Routes>
  );
};

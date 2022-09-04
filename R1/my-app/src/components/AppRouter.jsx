import React from "react";
import { About } from "../pages/About";
import { Error } from "../pages/Error";
import Posts from "../pages/Posts";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import { PostIdPage } from "../pages/PostIdPage";
import { publicRoutes, routes } from "../routes/routes";
import { useContext } from "react";
import { AuthContext } from "../context/context";

export const AppRouter = () => {
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }
  return isAuth ? (
    <Routes>
      {routes.map((item) => (
        <Route path={item.path} exact={item.exact} element={item.element} />
      ))}
      <Route path="/login" element={<Navigate to="/posts" replace />} />
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((item) => (
        <Route path={item.path} exact={item.exact} element={item.element} />
      ))}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/error" replace />} />
    </Routes>
  );
};

import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "./components/UI/Navbar/Navbar";
import { About } from "./pages/About";
import Posts from "./pages/Posts";
import "./styles/App.css";
import { Error } from "./pages/Error";
import { AppRouter } from "./components/AppRouter";
import { AuthContext } from "./context/context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar></Navbar>
        {/* <Navbar></Navbar>Скрыть можно через стили display:none */}
        <AppRouter></AppRouter>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;

import React from "react";
import classes from "./Navbar.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/context";

export const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const router = useNavigate();
  return (
    <div className={classes["navBar"]}>
      {isAuth ? (
        <text
          style={{ textDecoration: "underline", cursor: "pointer" }}
          className={classes["navBar_item"]}
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem("auth");
            setIsAuth(false);
            router("/login");
          }}
        >
          Exit
        </text>
      ) : (
        <Link to="/login" className={classes["navBar_item"]}>
          Login
        </Link>
      )}
      <Link to="/posts" className={classes["navBar_item"]}>
        Posts
      </Link>
      <Link to="/about" className={classes["navBar_item"]}>
        About
      </Link>
    </div>
  );
};

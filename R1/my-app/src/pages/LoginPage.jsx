import React from "react";
import { MyButton } from "../components/UI/button/MyButton";
import { MyInput } from "../components/UI/input/MyInput";
import { useContext } from "react";
import { AuthContext } from "../context/context";

export const LoginPage = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login: </h2>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <MyInput placeholder="Login"></MyInput>
        <MyInput type="password" placeholder="Password"></MyInput>
        <MyButton
          style={{ marginTop: "15px" }}
          onClick={(e) => {
            e.preventDefault();
            localStorage.setItem("auth", true);
            setIsAuth(true);
          }}
        >
          Enter
        </MyButton>
      </form>
    </div>
  );
};

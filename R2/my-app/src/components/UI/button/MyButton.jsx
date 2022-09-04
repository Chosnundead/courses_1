import React from "react";
import classes from "./MyButton.module.css";

export const MyButton = ({ children, another, ...props }) => {
  return (
    <button
      {...props}
      className={another ? classes.anotherButton : classes.button}
    >
      {children}
    </button>
  );
};

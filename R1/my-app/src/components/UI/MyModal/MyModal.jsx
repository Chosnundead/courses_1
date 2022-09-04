import React from "react";
import classes from "./MyModal.module.css";

export const MyModal = ({ children, visible, getVisible }) => {
  const classesArr = [classes.modal];
  if (visible) {
    classesArr.push(classes.active);
  }

  return (
    <div className={classesArr.join(" ")} onClick={(e) => getVisible(false)}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

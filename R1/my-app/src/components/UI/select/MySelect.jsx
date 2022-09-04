import React from "react";
import classes from "./MySelect.module.css";

export const MySelect = ({ options, defaultValue, change, ...props }) => {
  return (
    <select {...props} className={classes.select}>
      <option disabled>{defaultValue}</option>
      {options.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

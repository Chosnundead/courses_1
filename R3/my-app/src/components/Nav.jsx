import React from "react";
import { useState } from "react";

export const Nav = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ul
      style={{
        listStyleType: "none",
        transitionProperty: "min-height",
        transitionDuration: "1s",
        transitionTimingFunction: "linear",
        minHeight: isOpen ? "200px" : "20px",
      }}
      onMouseEnter={(e) => {
        setIsOpen(true);
      }}
      onMouseLeave={(e) => {
        setIsOpen(false);
      }}
    >
      <li>Menu</li>
      {isOpen &&
        list.map((item) => {
          return <li>{item.title}</li>;
        })}
    </ul>
  );
};

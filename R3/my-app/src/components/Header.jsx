import React from "react";

export const Header = ({ link, children }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row-reverse",
        backgroundColor: "black",
        margin: "0px",
        padding: "21px",
      }}
    >
      <img
        src={link}
        width={150}
        height={150}
        style={{ borderRadius: "50%" }}
      />
      <text style={{ color: "white" }}>{children}</text>
    </header>
  );
};

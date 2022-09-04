import React from "react";
import project1 from "../images/project1.png";
import { MyButton } from "./UI/button/MyButton";

export const ProjectItem = () => {
  return (
    <div className="projectItem">
      <img src={project1} width="410" height="220"></img>
      <div style={{ position: "absolute", textAlign: "center" }}>text</div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <MyButton style={{ margin: "21px", padding: "21px" }} another>
          LIVE DEMO
        </MyButton>
        <MyButton style={{ margin: "21px", padding: "21px" }}>GIT HUB</MyButton>
      </div>
    </div>
  );
};

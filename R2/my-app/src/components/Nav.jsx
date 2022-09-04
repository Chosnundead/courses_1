import { useNavigate } from "react-router-dom";
import projects from "../images/doc-svgrepo-com.svg";
import home from "../images/homepage-svgrepo-com.svg";
import person from "../images/mine-svgrepo-com.svg";

export const Nav = () => {
  const router = useNavigate();
  return (
    <nav className="nav">
      <a
        onClick={(e) => {
          router("/");
        }}
      >
        <img src={home}></img>
      </a>
      <a
        onClick={(e) => {
          router("/projects");
        }}
      >
        <img src={projects}></img>
      </a>
      <a
        onClick={(e) => {
          router("/about");
        }}
      >
        <img src={person}></img>
      </a>
    </nav>
  );
};

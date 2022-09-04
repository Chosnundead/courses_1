import { MyButton } from "../components/UI/button/MyButton";
import github from "../images/github-svgrepo-com.svg";

export const Home = () => {
  return (
    <div>
      <div className="flexHeadBlock">
        <div>
          <a href="https://github.com/Kaltblotsin">
            <img src={github} width="21px"></img>
          </a>
        </div>
        <div>
          <h5 className="text">Hello, i'm</h5>
          <h2 className="text bigText">Denis Solodkiy</h2>
          <h5 className="text text2">Junior react developer</h5>
          <div>
            <MyButton style={{ margin: "21px", padding: "21px" }}>
              ABOUT ME
            </MyButton>
            <MyButton style={{ margin: "21px", padding: "21px" }} another>
              MY PROJECTS
            </MyButton>
          </div>
        </div>
        <div className="rightText">Let's talk:{")"}</div>
      </div>
    </div>
  );
};

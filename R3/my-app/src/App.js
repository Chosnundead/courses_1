import "./styles/index.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

function App() {
  return (
    // <Header link="https://www.kraftwerk.at/app/uploads/fly-images/962/reference-img-worlds-of-adventure-park-4-1920x9999.jpg">
    //   2121
    // </Header>
    <Nav
      list={[
        { title: "test", link: "test.org" },
        { title: "test1", link: "test.org" },
        { title: "test2", link: "test.org" },
      ]}
    ></Nav>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import "./styles/App.css";
import { Nav } from "./components/Nav";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Hello u there;)");
  }, []);

  return (
    <BrowserRouter>
      <AppRouter></AppRouter>
      <Nav></Nav>
    </BrowserRouter>
  );
}
export default App;

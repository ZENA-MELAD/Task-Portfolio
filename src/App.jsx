import "./App.css";
import Portfolio from "./pages/Portfolio/Portfolio";
import Img from "../src/assets/images/Group 1166.png";
function App() {
  return (
    <div className="w-full h-screen py-10">
      <Portfolio />
      <div className=" w-20  relative  top-48 left-1 md:w-28 md:top-64 md:left-4 lg:top-72">
        <img src={Img} />
      </div>
    </div>
  );
}

export default App;

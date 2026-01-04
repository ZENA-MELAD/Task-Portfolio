import "./App.css";
import Portfolio from "./pages/Portfolio/Portfolio";
import Img from "../src/assets/images/Group 1166.png";
function App() {
  return (
    <div className="w-full h-screen py-6 relative flex flex-col items-center">
      <Portfolio />
      <div className=" w-20 absolute  bottom-0 left-0 md:w-28">
        <img src={Img} />
      </div>
    </div>
  );
}

export default App;






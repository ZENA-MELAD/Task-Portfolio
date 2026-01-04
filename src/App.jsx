import "./App.css";
import Portfolio from "./pages/Portfolio/Portfolio";
import Img from "../src/assets/images/Group 1166.png";
function App() {
  return (
    <div className="w-full h-screen py-6 relative">
      <Portfolio />
      <div className=" w-20 absolute  top-48 left-1 md:w-28 md:top-64 md:left-4 lg:top-72">
        <img src={Img} />
      </div>
    </div>
  );
}

export default App;





//  <svg width="0" height="0" className="absolute">
//           <defs>
//             <clipPath id="refinedCurve" clipPathUnits="objectBoundingBox">
//               <path
//                 d="M 0.5,0 
//                        H 0.8 C 0.9,0 1,0.05 1,0.1 
//                        V 0.4 
//                        C 0.8,0.42 0.8,0.58 1,0.6 
//                        V 0.9 C 1,0.95 0.9,1 0.8,1 
//                        H 0.2 C 0.1,1 0,0.95 0,0.9 
//                        V 0.1 C 0,0.05 0.1,0 0.2,0 
//                        Z"
//               />
//             </clipPath>
//           </defs>
//         </svg>
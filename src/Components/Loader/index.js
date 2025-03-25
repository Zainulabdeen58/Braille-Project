import React from "react";
import "./style.css";
import logo from "../../Assets/Image/logo_30.png";
// import Navbar from "../Navbar";

function Loader() {
  // const [percentage, setPercentage] = useState(0);

  // useEffect(() => {
  //   let interval;

  //   // Simulate loading progress
  //   if (percentage < 100) {
  //     interval = setInterval(() => {
  //       setPercentage((prev) => Math.min(prev + 5, 100));
  //     }, 50);
  //   } else {
  //     clearInterval(interval);
  //   }

  //   return () => clearInterval(interval);
  // }, [percentage]);
  return (
    <>
    {/* <Navbar/> */}
      <div className="flex flex-col justify-center items-center w-full h-[100dvh] bg-black">
        <img src={logo} alt="" height={300} width={300} />
        <span class="loader mt-12"></span>
      </div>
     
    </>
  );
}

export default Loader;

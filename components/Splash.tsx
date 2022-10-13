import Lottie from "lottie-react";
import React from "react";
import logo from "../assests/twiiter.json";

function Splash() {
  return (
    <div className="h-screen w-full items-center">
      <Lottie
        className="h-full w-full self-center bg-twitter"
        animationData={logo}
      />
    </div>
  );
}

export default Splash;

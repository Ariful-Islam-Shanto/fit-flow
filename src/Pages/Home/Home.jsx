import React from "react";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar";
import Login from "../Login/Login";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-tr py-6 px-36 from-[#f1fdc5] to-[#fcfcfb] w-full h-[100vh]">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <div>
        <Login></Login>
      </div>
    </div>
  );
};

export default Home;

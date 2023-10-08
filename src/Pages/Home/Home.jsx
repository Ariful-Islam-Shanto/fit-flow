import React from "react";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Login from "../Login/Login";
import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-tr py-6 px-36 from-[#f1fdc5] to-[#fcfcfb] w-full h-[100vh]">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Services></Services>
    </div>
  );
};

export default Home;

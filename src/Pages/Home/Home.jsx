import React, { createContext, useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Login from "../Login/Login";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";
import bg from '../../assets/images/bg.jpg';
import './Home.css';
import Quote from "../../Components/QuoteSection/Quote";
import UpcommingEve from "../../Components/Upcomming Event/UpcommingEve";

export const InfoContext = createContext(null);

const Home = () => {
    const [detaisId, setDetailsId] = useState(null);
    
    const handleDetails = (id) => {
        setDetailsId(id);
    }

    const AuthInfo = {handleDetails}
    
  return (
    <InfoContext.Provider value={AuthInfo}>
    <div className="">
      <div  className=" py-6 md:px-12 lg:px-24 xl:px-36  bg-[#04040a] backdrop-blur-xl from-black to-[#0b0b0b] w-full h-[80vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh]">

        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Services ></Services>
      <Quote></Quote>
      <UpcommingEve></UpcommingEve>
      {/* <Footer></Footer> */}
    </div>
    </InfoContext.Provider>
  );
};

export default Home;

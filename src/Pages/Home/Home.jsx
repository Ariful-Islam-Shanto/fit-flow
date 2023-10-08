import React from "react";
import Banner from "../../Components/Banner/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Login from "../Login/Login";
import Services from "../../Components/Services/Services";
import Footer from "../../Components/Footer/Footer";
import bg from '../../assets/images/bg.jpg';
import './Home.css';
import Quote from "../../Components/QuoteSection/Quote";
import UpcommingEve from "../../Components/Upcomming Event/UpcommingEve";


const Home = () => {
    
  return (
    <div className="">
      <div  className="bg py-6 px-36 bg-cover from-[#f1fdc5] to-[#fcfcfb] w-full h-[100vh]">
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
      <Services></Services>
      <Quote></Quote>
      <UpcommingEve></UpcommingEve>
      <Footer></Footer>
    </div>
  );
};

export default Home;

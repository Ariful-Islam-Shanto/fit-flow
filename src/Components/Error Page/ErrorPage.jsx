import React from "react";
import { useNavigate } from "react-router-dom";
import errorImg from '../../assets/images/Error_page-removebg-preview.png';


const ErrorPage = () => {

    const navigate = useNavigate();
  return (
    <div className="h-[100vh] bg-white px-8">
        <div className="flex text-center items-center justify-center flex-col w-full h-full">
        
      <p className="text-sky-800 text-7xl font-medium">Opps!</p>
      <p className="text-gray-700 text-6xl font-thin">Page not found</p>
      <img src={errorImg} alt="" className="w-full md:w-full lg:w-full xl:w-1/2" />
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-gray-600 text-4xl font-medium">The page you're trying to reach isn't available.</h1>
        <button onClick={() => navigate('/')} className="bg-sky-400 text-white rounded-md px-5 py-2 border-none">Go Home</button>
      </div>
      </div>
    
    </div>
  );
};

export default ErrorPage;

import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";

const Details = () => {
  const [allData, setAllData] = useState({});
  const [detailsData, setDetailsData] = useState([]);
  const { id: paramId } = useParams();

  useEffect(() => {
    fetch("/fitness.json")
      .then((res) => res.json())
      .then((data) => {
        if(data) {
            setAllData(data);
            const newData = data.find((singleData) => singleData.id == paramId);
            setDetailsData(newData || {});
        }
        return;
      });
  }, [paramId]);

  const { id, image,name, price, description,button, details : Details } = detailsData || {};

  const { service, benefits } = Details || {};
  
  console.log(detailsData);

  return (
    <div className="px-36  py-6 bg-gradient-to-tr from-blue-100 to-pink-50">

      <div className="space-y-6">
      <Navbar></Navbar>
        <img src={image} alt="" className="w-full"/>
        <div className="grid grid-cols-3 gap-5">

        <div className="flex flex-col text-right  col-span-2 gap-2 items-center justify-between">
        <h1 className="text-7xl text-black font-bold">{name}</h1>
        <p  className="text-black text-xl font-medium">Price: {price}</p>
        
        <p className="text-left">{description}</p>
        
        <button className="px-7 py-2 text-white bg-blue-600 rounded-md border-none">Learn More</button>
      
        </div>

        <div>
        <div className="flex gap-4">

          <div className="bg-white shadow-md rounded-md p-4 flex-1">
            <h4 className="text-2xl font-bold text-pink-600">Service </h4>
            <p className=" text-gray-500 ">{service}</p>
          </div>
        
          <div className="bg-white shadow-md rounded-md p-4 flex-1">
            <h4 className="text-2xl font-bold text-pink-600">Benefits </h4>
            <p className=" text-gray-500 font-medium">{benefits}</p>
          </div>
        </div>
        </div>
      </div>


      </div>
    </div>
  );
};

export default Details;

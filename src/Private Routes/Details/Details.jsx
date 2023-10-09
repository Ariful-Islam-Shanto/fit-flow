import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useParams } from "react-router-dom";

const Details = () => {
  const [showAll, setShowAll] = useState(false);
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

  const handleLearnMore = () => {
    setShowAll(!showAll);
  }

  return (
    <div className="px-6 md:px-12 lg:px-24 xl:px-36  py-6 bg-gradient-to-tr from-blue-100 to-pink-50">

      <div className="space-y-6">
      <Navbar></Navbar>
        <img src={image} alt="" className="w-full"/>
        <div className={`grid ${showAll ? 'grid-cols-1' : 'grid-cols-2'}  gap-5`}>

        <div className="flex flex-col text-right  gap-2 items-center justify-between">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-black font-bold">{name}</h1>
        <p  className="text-black text-xl font-medium">Price: {price}</p>
        
        {
          showAll ?  
          <p className="text-left">{description}</p>
          : 
          <p className="text-left">{description?.slice(0, 350)}</p>
        }
        <div className="flex w-full items-center justify-start">
        
        <button onClick={handleLearnMore} className="px-7 py-2 text-white bg-blue-600 rounded-md border-none">{showAll ? "Learn Less" : 'Learn More'}</button>
        </div>
      
        </div>

        <div className="w-full">
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-4 w-full ">

          <div className="bg-white shadow-md w-full rounded-md p-4 ">
            <h4 className="text-2xl font-bold text-pink-600">Service </h4>
            <p className=" text-gray-500 ">{service}</p>
          </div>
        
          <div className="bg-white shadow-md w-full rounded-md p-4 ">
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

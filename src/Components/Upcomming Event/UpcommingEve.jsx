import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const UpcommingEve = () => {
  return (
    <div className="space-y-12 py-12 md:px-24  lg:px-36 xl:px-36 bg-black">
      <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-center text-white ">Upcoming Events</h1>
      <div className="space-y-10">
        <div className=" flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between">
            <h1 className="text-2xl md:mr-5 lg:mr-0 text-white">01.</h1>
          <h1 className="md:text-3xl lg:text-2xl xl:text-4xl text-white ">
            Menla Mountain Retreat Center: Catskills, NY
            <span className="block text-sm text-gray-400">
              November 26, 2023 @ 8:00 am - April 24, 2025 @ 5:00 pm
            </span>
            </h1>
            <FaArrowRight className="text-2xl text-white"></FaArrowRight>
        </div>
         <hr />
        <div className=" flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between">
        <h1 className="text-2xl text-white md:mr-5 lg:mr-0">02.</h1>
          <h1 className="md:text-3xl lg:text-2xl xl:text-4xl text-white ">
            Yogadance 101: A Series of 5 classes
            <span className="block text-sm text-gray-400">
              December 16, 2023 - March 25, 2025
            </span>
          </h1>
          <FaArrowRight className="text-2xl text-white"></FaArrowRight>
        </div>
<hr />
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between">
        <h1 className="text-2xl text-white md:mr-5 lg:mr-0">03.</h1>
          <h1 className="md:text-3xl lg:text-2xl xl:text-4xl text-white ">
            Yoga Retreat at the Terme Manzi Hotel
            <span className="block text-sm text-gray-400">
              December 16, 2023 @ 8:00 am - April 18, 2025 @ 4:00 pm
            </span>
          </h1>
          <FaArrowRight className="text-2xl text-white"></FaArrowRight>
        </div>
<hr />
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between">
        <h1 className="text-2xl text-white md:mr-5 lg:mr-0">04.</h1>
          <h1 className="md:text-3xl lg:text-2xl xl:text-4xl text-white ">
            Menla Mountain Retreat Center: Catskills, NY
            <span className="block text-sm text-gray-400">
              November 26, 2023 @ 8:00 am - April 24, 2025 @ 5:00 pm
            </span>
          </h1>
          <FaArrowRight className="text-2xl text-white"></FaArrowRight>
        </div>
<hr />
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between">
        <h1 className="text-2xl text-white md:mr-5 lg:mr-0">05.</h1>
          <h1 className="md:text-3xl lg:text-2xl xl:text-4xl text-white ">
            Yogadance 101: A Series of 5 classes
            <span className="block text-sm text-gray-400">
              December 16, 2023 - March 25, 2025
            </span>
          </h1>
          <FaArrowRight className="text-2xl text-white"></FaArrowRight>
        </div>
<hr />
        <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between">
        <h1 className="text-2xl text-white md:mr-5 lg:mr-0">06.</h1>
        <div className="text-left">
          <h1 className="md:text-3xl lg:text-2xl xl:text-4xl text-white ">
            Yoga Retreat at the Terme Manzi Hotel
            <span className="block text-sm text-gray-400">
              December 16, 2023 @ 8:00 am - April 18, 2025 @ 4:00 pm
            </span>
          </h1>
          </div>
          <FaArrowRight className="text-2xl text-white"></FaArrowRight>
        </div>
      </div>
    </div>
  );
};

export default UpcommingEve;

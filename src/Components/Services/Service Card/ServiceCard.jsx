import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ServiceCard = ({service}) => {

  useEffect(() => {
    AOS.init();
  }, []);

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();


    const {
        id,
        name,
        image,
        price,
        description,
        button,
        details} = service;

    return (
        <div data-aos="fade-left" data-aos-duration="800">
           <div className="relative flex h-full  flex-col w-full  mx-auto  bg-clip-border rounded-md text-gray-700 drop-shadow-lg hover:-translate-y-4 duration-300 ease-in-out hover:shadow-2xl justify-between">
  <div className="relative overflow-hidden rounded-t-md bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 w-full h-full">
    <img
      src={image }
      alt="ui/ux review check"
      className='w-full h-[270px]'
    />
    <div className="to-bg-black-10 absolute inset-0 h-full  w-[300px]bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
    <button
      className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
      <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-6 w-6"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
        </svg>
      </span>
    </button>
  </div>
  <div className="p-4 flex flex-col flex-grow items-left justify-between">
    <div className="mb-3 flex-grow flex flex-col justify-between gap-2  ">
      <h5 className="block  text-2xl flex-grow text-left font-sans shadow-inner font-extrabold leading-snug tracking-normal text-white antialiased truncate-overflow">
        {name}
      </h5>

      <p className="  gap-1.5 text-left font-sans text-gray-200 font-normal leading-relaxed flex-grow text-blue-gray-900 antialiased">
      
        {price}
      </p>
    </div>
    <p className="block font-sans text-base font-light leading-relaxed text-gray-200 antialiased text-left flex-grow">
      {description?.slice(0, 60)}...
    </p>
  
  <div className=" pt-3">
    <button onClick={() => {
      navigate(`/details/${id}`);
}}
      className="block w-full select-none rounded-lg bg-[#25AB75] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      View details
    </button>
  </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;
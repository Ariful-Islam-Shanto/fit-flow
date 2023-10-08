import React from 'react';

const ServiceCard = ({service}) => {

    const {name,
        image,
        price,
        description,
        button,
        details} = service;

    return (
        <div>
           <div className="relative flex flex-col w-full  mx-auto rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
  <div className="relative overflow-hidden rounded-md bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 w-full h-full">
    <img
      src={image}
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
  <div className="p-6 flex flex-col items-left  justify-center">
    <div className="mb-3 flex flex-col gap-2 text-left items-center justify-between">
      <h5 className="block text-2xl  font-sans  font-semibold leading-snug tracking-normal text-pink-600 antialiased">
        {name}
      </h5>

      <p className="flex justify-center items-center gap-1.5 font-sans text-base font-normal leading-relaxed flex-grow text-blue-gray-900 antialiased">
      
        {price}
      </p>
    </div>
    <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased text-left flex-grow">
      {description}
    </p>
  
  <div className=" pt-3">
    <button
      className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
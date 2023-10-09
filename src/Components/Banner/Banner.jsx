import React from 'react';
import banner from '../../assets/images/banner.png';

const Banner = () => {
    return (
        <div className='flex py-6 flex-col-reverse  md:flex-row lg:flex-row xl:flex-row  h-full  md:h-[50vh] lg:h-[60vh] xl:h-[80vh] relative'>
            
            <div className='flex text-center md:text-left lg:text-left xl:text-xl flex-col items-center md:items-start lg:items-start xl:items-start leading-snug  space-y-6 justify-center'>
                <h1 className=' text-5xl md:text-6xl lg:text-8xl xl:text-9xl uppercase tracking-widest text-white font-bold '>Unlock Your  <br /><span className='bg-gradient-to-r from-[#25AB75] to-[#25AB75] bg-clip-text text-transparent'>Best Self</span></h1>
                <p className='text-gray-400  md:text-sm  lg:text-sm xl:text-md w-3/4 tracking-wide '>Welcome to the premier destination for organizing and managing Yoga and Fitness retreats. We specialize in crafting unforgettable retreat experiences that harmonize mind, body, and spirit. Our expert event management team takes care of all the details, allowing you to focus on creating meaningful and transformative retreats.</p>
                <div className='flex gap-7'>
                <button className='bg-[#25AB75] px-7 py-3 rounded-md hover:bg-[#1c8058] text-sm   text-white border-none'>Get Started</button>
                <button className='bg-gray-800 px-7 py-3 rounded-md hover:from-blue-200 hover:to-teal-50 hover:text-gray-600 text-sm   text-white'>Get Started</button>
                </div>
            </div>
            <img src={banner} alt="" className='md:w-2/5 lg:w-2/5 h-[400px] md:h-full lg:h-3/3 xl:w-1/3 xl:h-full static  md:absolute lg:absolute xl:absolute  lg:bottom-[5%] xl:bottom-[5%]  right-0'/>
           
            {/* <div className='bg-gradient-to-tr -mr-4 relative shadow-2xl border-white border-2 rounded-full from-[#deecf9] to-[#b6cce3] h-[400px] w-[400px] mx-auto my-auto flex items-center justify-center'>
                <img src={banner} alt="" className='w-full'/>
                <div className='bg-black absolute bottom-16 left-1/3 rounded-full opacity-20 w-2/5 mx-auto h-4 backdrop-blur-xl '></div>


            </div> */}
            {/* <div className='absolute top-2/3 left-[60%] bg-white p-6 drop-shadow-lg rounded-lg w-[200px]'>
                <h1 className='text-lg text-black font-medium'>The body achieves what the mind believes.
</h1>
<p className='block text-right text-gray-600 text-sm'>— Napoleon Hill</p>
            </div> */}
           
            
       
        </div>
    );
};

export default Banner;
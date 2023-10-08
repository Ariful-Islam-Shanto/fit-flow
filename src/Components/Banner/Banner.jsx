import React from 'react';
import banner from '../../assets/images/banner.png';

const Banner = () => {
    return (
        <div className='flex py-6 h-[80vh] relative'>
            
            <div className='flex text-left flex-col leading-snug  space-y-6 justify-center'>
                <h1 className='text-8xl uppercase tracking-widest text-white font-bold '>Unlock Your  <br /><span className='bg-gradient-to-r from-[#25AB75] to-[#25AB75] bg-clip-text text-transparent'>Best Self</span></h1>
                <p className='text-base-200 text-xl w-3/4 tracking-wide '>Transform Your Life Through Fitness and Wellness. Join us on a journey to a healthier, stronger, and happier you. Discover expert guidance, nutrition tips, and workouts tailored just for you.</p>
                <div>
                <button className='bg-[#25AB75] px-7 py-3 rounded-md hover:from-blue-200 hover:to-teal-50 hover:text-gray-600   text-white border-none'>Get Started</button>
                </div>
            </div>
            <img src={banner} alt="" className='w-1/3 h-full absolute bottom-0 right-0'/>
           
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
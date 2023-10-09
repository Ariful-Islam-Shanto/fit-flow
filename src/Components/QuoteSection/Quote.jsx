import React from 'react';
import Bg from '../../assets/images/plank-bg-2.jpg';

const Quote = () => {
    return (
        <div style={
            {
                backgroundImage: `url(${Bg})`
            }
        } className= ' md:h-[350px] lg:h-[500px] xl:h-[500px] flex items-start justify-center flex-col py-16 md:py-0 lg:py-0 xl:py-0 px-8 md:px-16 lg:px-28 xl:px-40 gap-3 md:gap-10 lg:gap-10 xl:gap-10 w-full bg-contain bg-center'>
            <h1 className='text-2xl md:text-4xl  lg:text-6xl xl:text-7xl text-left font-thin text-[#f9fff3] '>Center your body and mind.</h1>
            <h1 className='text-2xl md:text-4xl lg:text-6xl xl:text-7xl text-left text-[#f9fdf5] font-thin'>Stretch the possibilities.</h1>
            <p className='text-gray-100 font-thin md:text-xl lg:text-2xl xl:text-2xl text-left'>Mary Sheldon. Kundalini Trainer</p>
        </div>
    );
};

export default Quote;
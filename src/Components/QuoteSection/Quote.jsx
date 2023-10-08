import React from 'react';
import Bg from '../../assets/images/plank-bg-2.jpg';

const Quote = () => {
    return (
        <div style={
            {
                backgroundImage: `url(${Bg})`
            }
        } className='h-[500px] flex items-end justify-center flex-col px-40 gap-10 w-full bg-contain bg-center'>
            <h1 className='text-7xl text-right font-thin text-pink-600 '>Center your body and mind.</h1>
            <h1 className='text-7xl text-right text-blue-400 font-thin'>Stretch the possibilities.</h1>
            <p className='text-gray-100 font-thin  text-2xl text-right'>Mary Sheldon. Kundalini Trainer</p>
        </div>
    );
};

export default Quote;
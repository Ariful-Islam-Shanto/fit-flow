import React from 'react';
import Event from '../../assets/images/geert-pieters-3RnkZpDqsEI-unsplash.jpg';
import './createEvent.css';
import Navbar from '../../Components/Navbar/Navbar';
import { FaChartBar, FaDollarSign, FaHammer, FaMobile, FaStar, FaTicket } from 'react-icons/fa6';


const CreateEvent = () => {
    return (
        <div className='py-6 px-36 space-y-8'>
            <Navbar></Navbar>
            <div className='bg-[#201e49] relative'>
                <div className='  h-[30vh]  bg-white'>

                </div>
                <div className=' h-[70vh]'>
 
                </div>
                
            <img src={Event} alt="" className='h-[90vh] absolute top-0 px-12 w-full' />
            <div className='absolute top-[50%] left-[7%] flex items-center justify-center flex-col gap-6'>
            <h1 className='text-white  text-6xl font-bold text-center'>Where Event Organizers Grow</h1>
            <p className='text-white font-medium'>The all-in-one platform trusted by millions of organisers and attendees worldwide</p>
            <button className='bg-orange-600  text-white px-5 py-2 border-none text-center rounded-md'>
                Get started for free
            </button>
            </div>
      
            </div>

            {/* <div className='w-full'>
            <h1 className='text-[#201e49]  text-6xl text font-bold text-left'>UPCOMING RETREATS
           </h1>
            </div> */}

            <div className='py-20 '>
                <h1 className='text-6xl text-black font-bold text-center mb-8'>All the tools you need to host an event & grow your community</h1>
                <h3 className='text-2xl text-gray-800 font-medium text-center'>Easily create and manage events on a platform that attendees love and trust</h3>
                <div className='grid grid-cols-3 text-left p-8'>
                <div className='p-10 text-left space-y-4'>
                <div className='bg-orange-300 h-10 w-10 rounded-full flex items-center  justify-center'>
                    <FaTicket></FaTicket>
                    </div>
                    <h3 className='text-2xl border-b-2 border-orange-600 pb-2 text-gray-800 font-medium '>Event Ticketing</h3>
                    <p>Sell more tickets with customisable event pages and a seamless checkout experience for attendees on a trusted platform</p>
                    
                </div>
                <div className='p-10 text-left space-y-4'>
                <div className='bg-orange-300 h-10 w-10 rounded-full flex items-center justify-center'>
                    <FaChartBar></FaChartBar>
                    </div>
                    <h3 className='text-2xl border-b-2 border-orange-600 pb-2 text-gray-800 font-medium '>Reporting & Analytics</h3>
                    <p>Learn more about your buyers and discover where sales are coming from with real-time analytics</p>

                </div>
                <div className='p-10 text-left space-y-4'>
                    <div className='bg-orange-300 h-10 w-10 rounded-full flex items-center justify-center'>
                    <FaMobile></FaMobile>
                    </div>
                    <h3 className='text-2xl border-b-2 border-orange-600 pb-2 text-gray-800 font-medium '>Organizer App</h3>
                    <p>Check guests in, sell tickets at the door, and track data with our easy-to-use Eventbrite Organizer App</p>

                </div>
                <div className='p-10 text-left space-y-4'>
                <div className='bg-orange-300 h-10 w-10 rounded-full flex items-center  justify-center'>
                <FaHammer></FaHammer>
                    </div>
                    <h3 className='text-2xl border-b-2 border-orange-600 pb-2 text-gray-800 font-medium '>Marketing Tools</h3>
                    <p>All the event marketing tools you need in one place</p>
                    
                </div>
                <div className='p-10 text-left space-y-4'>
                <div className='bg-orange-300 h-10 w-10 rounded-full flex items-center justify-center'>
                    <FaStar></FaStar>
                    </div>
                    <h3 className='text-2xl border-b-2 border-orange-600 pb-2 text-gray-800 font-medium '>Eventbrite Ads</h3>
                    <p>Create no-hassle ads that promote your event on Eventbrite</p>
                    
                </div>
                <div className='p-10 text-left space-y-4'>
                <div className='bg-orange-300 h-10 w-10 rounded-full flex items-center justify-center'>
                    <FaDollarSign></FaDollarSign>
                    </div>
                    <h3 className='text-2xl border-b-2 border-orange-600 pb-2 text-gray-800 font-medium '>Payments</h3>
                    <p>Easily collect and simplify event payments</p>
                    
                </div>
                </div>

                <div className='flex items-center justify-center'>
                <button className=' text-orange-600 font-medium px-5 py-2 border-2 border-orange-600 text-center rounded-md'>
                Create Event
              </button>
              </div>
            </div>
        </div>
    );
};

export default CreateEvent;
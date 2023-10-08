import React, { useEffect, useState } from 'react';
import ServiceCard from './Service Card/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fitness.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    console.log(services);
    return (
        <div className='w-full bg-black'>
        <div className=' w-full py-16 space-y-16 max-w-6xl mx-auto' >
            <h1 className='text-6xl  text-center text-black font-medium'>Our Holistic Wellness Services</h1>
            <div className='grid grid-cols-3 gap-8'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Services;
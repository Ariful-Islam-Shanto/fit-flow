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
        <div className='w-full bg-black px-6 md:px-12 lg:px-24 xl:px-36'>
        <div className=' w-full py-16 space-y-16 max-w-6xl mx-auto' >
            <h1 className='text-4xl text-center md:text-left lg:text-left xl:text-left text-white font-medium'>Event Management Excellence</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default Services;
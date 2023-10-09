import React, { useContext } from 'react';
import './dashboard.css';
import user from '../../assets/images/user1.jpg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import auth from '../../firebase/firebase.config';

const Dashboard = () => {
    const {logOut} = useContext(AuthContext);

    const handleSingOut = () => {
        logOut(auth)
        .then(() => {

        })
        .catch(err => {

        })
    }

    return (
        <div className='dashBg h-full w-full grid grid-cols-4 '>
            <div className='h-[100vh] space-y-4 col-span-1 w-full py-4 bg-transparent backdrop-blur-xl flex flex-col items-center'>
                <div>
                <img src={user} alt="" className='h-24 w-24 rounded-full mx-auto'/>
                <div className='flex items-center justify-center'>
                <h1 className='text-2xl text-black font-medium'>
                    Ariful Islam</h1>   
                    <Link to={'/login'} onClick={handleSingOut} className="bg-[#25AB75]   text-white rounded-md py-2 px-7">Sign out</Link>
                    </div>
                </div>
                <div className='w-full px-4 '>
                <Link to={'/'} className='block w-full bg-blue-100 text-center py-4 rounded-lg text-sm font-medium'>Home</Link>
                </div>
            </div>
            <div>
                <h1 className='text-2xl rounded-lg p-5 bg-blue-600 text-center text-white font-bold'>Yoga & Fitness Membership Levels: Elevate Your Practice</h1>


                
            </div>
        </div>
    );
};

export default Dashboard;
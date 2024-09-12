import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import img1 from '../assets/img1.svg';
import logo from '../assets/logo.svg';

const Home = () => {
    return (
        <div className='w-full px-20 h-screen'>
            <div className='w-full py-6'>
                <img src={logo} alt="logo" />
            </div>
            <div className='flex flex-row items-center gap-20'>
                <div className='space-y-12'>
                    <header className='text-5xl font-semibold font-sans'>
                        job <span className='text-[#3B82F6]'>Tracking</span>App
                    </header>
                    <p>
                        Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy<br />
                        craft beer. Brunch bitters synth, VHS crucifix heirloom<br />
                        meggings bicycle rights.
                    </p>
                    <Link to="/login">
                        <button className='bg-[#3B82F6] text-white rounded-md text-xl font-semibold px-6 py-1'>
                            Login/Register
                        </button>
                    </Link>
                </div>
                <div>
                    <img className='h' src={img1} alt="" height="" />
                </div>
            </div>
        </div>
    );
}

export default Home;

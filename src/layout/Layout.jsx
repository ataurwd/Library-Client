import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBer from '../components/Navbar';
import Footer from './../components/Footer';

const Layout = () => {
    return (
        <div>
            <NavBer/>
            <div className='min-h-[calc(100vh-120px)]'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
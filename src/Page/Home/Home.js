import React from 'react';
import Banner from './Banner';
import Content from './Content';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <MakeAppoinment />
            <Testimonials />
            <Content />
            <Footer />
        </div>
    );
};

export default Home;
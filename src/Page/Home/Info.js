import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
            <InfoCard cardTitle="Opening Hours" bgColor="bg-gradient-to-r from-primary to-secondary" img={clock} />
            <InfoCard cardTitle="Our Location" bgColor="bg-[#3A4256]" img={marker} />
            <InfoCard cardTitle="Contact Us" bgColor="bg-gradient-to-r from-primary to-secondary" img={phone} />
        </div>
    );
};

export default Info;
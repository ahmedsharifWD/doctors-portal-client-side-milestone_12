import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold pb-2'>Appointment</h3>
                <h2 className='text-white text-3xl pb-2'>Make an Appointment</h2>
                <p className='text-white pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sequi fugiat voluptate tempore minus, placeat ut molestias quo, corrupti veniam repellat dolor voluptas quod obcaecati, eligendi nam perferendis. Eaque facilis ipsam voluptatibus assumenda ullam, ipsum quam veritatis voluptatum minima quia!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;
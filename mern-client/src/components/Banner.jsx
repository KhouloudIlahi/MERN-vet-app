import React from 'react';
import BannerCard from '../home/BannerCard';

const Banner = () => {
  return (
    <div className='px-6 lg:px-32 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 flex items-center'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 py-16 md:py-24'>
            {/** Left side */}
            <div className='md:w-1/2 space-y-6'>
                <h2 className='text-4xl md:text-5xl font-extrabold leading-tight text-gray-900'>
                    Simplifiez la gestion des rendez-vous
                    <span className='text-teal-500'> vétérinaires</span>
                </h2>
                <p className='text-lg md:text-xl text-gray-700'>
                    Notre plateforme en ligne vous aide à gérer efficacement les rendez-vous, les dossiers médicaux, et bien plus encore pour vos animaux.
                </p>
                <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6'>
                    <input 
                      type="search" 
                      name='search' 
                      id='search' 
                      placeholder='Cherchez des conseils' 
                      className='py-3 px-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300'
                    />
                    <button className='bg-teal-500 px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-all duration-300'>
                        Rechercher
                    </button>
                </div>
            </div>
            {/** Right side */}
            <div className='md:w-1/2'>
                <BannerCard />
            </div>
        </div>
    </div>
  );
};

export default Banner;

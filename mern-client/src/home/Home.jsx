import React from 'react'
import Banner from '../components/Banner'
import ConseilsSection from '../components/ConseilsSection'
import AppointmentSection from '../components/appointmentSection'
import Footer from '../components/Footer'
import Se_Connecter from '../components/Se_Connecter'
const Home = () => {
  return (
    <div className=''>
      <Banner/>
      <ConseilsSection/>
      <AppointmentSection/>
      
      <Footer/>
    </div>
  )
}

export default Home

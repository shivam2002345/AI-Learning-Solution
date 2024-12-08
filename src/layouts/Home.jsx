import React from 'react'
import MainLayout from './MainLayout'
import AboutusSection from './AboutusSection'
import OfferingsSection from './OfferingsSection'
import FooterSection from './FooterSection'
import WebinarsSection from './WebinarsSection'
import DeliveriesSection from './DeliveriesSection'
import TestimonialSection from './TestimonialSection'
import YoutubeSection from './YoutubeSection'


const Home = () => {
  return (
    <div>
      <MainLayout/>
      <AboutusSection/>
      <OfferingsSection/>
      <WebinarsSection/>
      <DeliveriesSection/>
      <TestimonialSection/>
      <YoutubeSection/>
      <FooterSection/>
    </div>
  )
}

export default Home

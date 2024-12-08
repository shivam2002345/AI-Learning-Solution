import React from 'react'
import HeroSection from '../Webinar/HeroSection/HeroSection';
import WebinarCard from '../Webinar/WebinarCard/WebinarCard';
import Footer from '../HomePage/footer/Footer';
import Header from '../HomePage/Header/Header';

const WebinarPage = () => {
  return (
    <div>
    <Header/>
    <HeroSection></HeroSection>
    <WebinarCard></WebinarCard>
    <Footer></Footer>   
   </div>
  )
}

export default WebinarPage

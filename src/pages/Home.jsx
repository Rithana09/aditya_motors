import React from 'react'
import Banner from '../partials/Banner'
import ServiceIntroduction from '../partials/ServiceIntroduction'
import Performance from '../partials/Perfomance'
import ProfessionalService from '../partials/ProfessionalService'
import ProfessionalGearSection from '../partials/ProfessionalGearSection'
import HeroSection from '../partials/HeroSection'
import Footer from '../partials/Footer'
import Layout from '../partials/Layout';
import Checklist from '../partials/Checklist'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
    <Layout>
       <div>
        <Helmet>
        <title>Aditya Motors | Home</title> 
        </Helmet>
   <Banner />
   <Checklist />
   <ServiceIntroduction />
   <Performance />
   <ProfessionalService />
   <ProfessionalGearSection />
   <HeroSection />
   <Footer />
      </div>
      </Layout>
    </>
  )
}

export default Home

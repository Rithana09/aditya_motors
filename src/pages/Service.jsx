import React from 'react'
import TopBanner from  '../partials/TopBanner';
import DreamMotorBike from '../partials/DreamMotorBike';
import ExpertiseSection from '../partials/ExpertiseSection';
import Advantages from '../partials/Advantages';
import Footer from '../partials/Footer';


const Service = () => {
  return (
    <>
    
       <div>
       <TopBanner
  title=" WHAT WE OFFER"
  subtitle="SERVICES"
  image="/servicebanner.jpg"
  showHeader={true}
/>

        <DreamMotorBike />
        <ExpertiseSection />
        <Advantages />
        <Footer />
      </div>
    </>
  )
}

export default Service;

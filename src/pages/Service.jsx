import React, { useEffect } from 'react';
import TopBanner from '../partials/TopBanner';
import DreamMotorBike from '../partials/DreamMotorBike';
import ExpertiseSection from '../partials/ExpertiseSection';
import Advantages from '../partials/Advantages';
import Footer from '../partials/Footer';

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page on load
  }, []);  // Empty dependency array ensures this only runs on initial render

  return (
    <>
      <div>
        <TopBanner
          title="WHAT WE OFFER"
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
  );
}

export default Service;

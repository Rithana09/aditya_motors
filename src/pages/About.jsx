import React, { useEffect } from 'react';
import TopBanner from '../partials/TopBanner';
import CustomerService from '../partials/CustomerService';
import Ideas from '../partials/Ideas';
import Maintenance from '../partials/Maintenance';
import Testimonial from '../partials/Testimonial';
import PartnerSection from '../partials/PartnerSection';
import Footer from '../partials/Footer';
import { Helmet } from 'react-helmet';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // This will scroll the page to the top
  }, []);  // Empty dependency array ensures it runs only on component mount

  return (
    <>
      <div>
        <Helmet>
          <title>Aditya Motors | About Us</title> {/* Added Title */}
        </Helmet>
        <TopBanner
          title="ABOUT US"
          subtitle="HISTORY OF GARAGE"
          image="/bike.png"
          showHeader={true}
        />

        <CustomerService />
        <Ideas />
        <Maintenance />
        <Testimonial />
        <PartnerSection />
        <Footer />
      </div>
    </>
  );
}

export default About;

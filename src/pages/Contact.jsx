import React, { useEffect } from 'react';
import TopBanner from '../partials/TopBanner';
import ContactSection from '../partials/ContactSection';
import MapLocation from '../partials/MapLocation';
import Footer from '../partials/Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // This scrolls the page to the top when the component mounts
  }, []);  // Empty dependency array ensures this only runs on initial render

  return (
    <>
      <div>
        <TopBanner
          title="GET IN TOUCH"
          subtitle="CONTACT US"
          image="/contact1.jpg"
          showHeader={true}
        />
        <ContactSection />
        <MapLocation />
        <Footer />
      </div>
    </>
  );
}

export default Contact;

import React, { useEffect } from 'react';
import TopBanner from '../partials/TopBanner';
import HondaService from '../partials/HondaService';
import HondaBikeServices from '../partials/HondaBikeServices';
import HondaServicesShowcase from '../partials/HondaServicesShowcase';
import Footer from '../partials/Footer';
import { Helmet } from 'react-helmet';

const Honda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page on load
  }, []);  // Empty dependency array ensures it runs only when the component mounts

  return (
    <>
      <div>
        <Helmet>
          <title>Aditya Motors | Honda</title>
        </Helmet>
        <TopBanner
          title="WHAT WE DO"
          subtitle="HONDA"
          image="/blog1.jpg"
          showHeader={true}
        />
        <HondaService />
        <HondaBikeServices />
        <HondaServicesShowcase />
        <Footer />
      </div>
    </>
  );
}

export default Honda;

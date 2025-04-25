import React from 'react'
import TopBanner from '../partials/TopBanner'
import ContactSection from '../partials/ContactSection'
import MapLocation from '../partials/MapLocation'
import Footer from '../partials/Footer'

const Contact = () => {
  return (
    <>
      <div>
        <TopBanner
          title=" GET IN TOUCH"
          subtitle="CONTACT US"
          image="/contact1.jpg"
          showHeader={true}
        />
        <ContactSection />
        <MapLocation />
        <Footer />
      </div>
    </>
  )
}

export default Contact

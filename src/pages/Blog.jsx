import React from 'react';
import TopBanner from '../partials/TopBanner';
import BlogSection from '../partials/Blogsection';
import Footer from '../partials/Footer';


const Blog = () => {
  return (
    <>
       <div>
       <TopBanner
  title=" BLOG AND NEWS"
  subtitle="RECENT NEWS"
  image="/blog1.jpg"
  showHeader={true}
/>
<BlogSection />
<Footer />
      </div>
    </>
  )
}

export default Blog

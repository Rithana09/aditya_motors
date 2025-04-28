import React, { useEffect } from 'react';
import TopBanner from '../partials/TopBanner';
import BlogSection from '../partials/Blogsection';
import Footer from '../partials/Footer';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page on load
  }, []);  // Empty dependency array ensures it runs only when the component is first mounted

  return (
    <>
      <div>
        <TopBanner
          title="BLOG AND NEWS"
          subtitle="RECENT NEWS"
          image="/blog1.jpg"
          showHeader={true}
        />
        <BlogSection />
        <Footer />
      </div>
    </>
  );
}

export default Blog;

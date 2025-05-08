import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ScrollToTopLink = ({ to, children, ...props }) => {
  const location = useLocation();
  
  const handleClick = () => {
    if (location.pathname === to) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
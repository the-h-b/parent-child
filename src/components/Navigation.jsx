import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <nav className="nav">
      <motion.a 
        href="/" 
        className="logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        3D Experience
      </motion.a>
      
      <div className="nav-links">
        {['Features', 'Pricing', 'About', 'Contact'].map((item, index) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
          >
            {item}
          </motion.a>
        ))}
      </div>
      
      <motion.a
        href="#get-started"
        className="get-app-button"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Get the App
      </motion.a>
    </nav>
  );
};

export default Navigation;

// src/App.jsx
import React from "react";
import { motion, useAnimation } from 'framer-motion';
import './App.css';
import { LuStar } from 'react-icons/lu';
import { RiWallet3Line, RiShieldCheckLine, RiLightbulbLine, RiVisaLine, RiCheckboxCircleLine } from 'react-icons/ri';
import MoneySection from './components/MoneySection';
const mobileImg = '/mobile.png';

const features = [
  {
    icon: <RiWallet3Line />,
    title: "Instant Digital Wallet",
    description: "Store, send, and receive money safely — no physical cash needed.",
  },
  {
    icon: <RiShieldCheckLine />,
    title: "Parental Controls & Oversight",
    description: "Parents can track transactions, set budgets & control spend patterns.",
  },
  {
    icon: <RiLightbulbLine />,
    title: "Financial Learning Tools",
    description: "Educational content and tools to help students understand spending, saving, and budgeting.",
  },
  {
    icon: <RiVisaLine />,
    title: "Seamless UPI, QR & Card Payments",
    description: "Use Stackintel across online, offline, UPI, and card channels without hassles.",
  },
  {
    icon: <RiCheckboxCircleLine />,
    title: "Zero Hidden Fees",
    description: "Transparent fees, clear terms — what you see is what you get.",
  },
];

function App() {
  const controls = useAnimation();
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    // Animate elements in sequence when component mounts
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0 });
    };
    sequence();
  }, [controls]);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Solution', href: '#' },
    { name: 'Company', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '100px 0 0'
      }}>

        <section 
          className="hero" 
          style={{
            width: '100%',
            background: 'radial-gradient(ellipse at top, #1a1a1a 0%, #000000 100%)',
            color: '#fff',
            padding: '80px 40px 60px',
            borderRadius: '40px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: '60px',
            position: 'relative',
            zIndex: 10,
            padding: '20px 0',
          }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            style={{ 
              fontWeight: 'bold', 
              fontSize: '1.8rem',
              background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
              fontFamily: '"Poppins", sans-serif',
              letterSpacing: '1px'
            }}
          >
            Hedwig
          </motion.div>
          
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            margin: 0, 
            padding: 0, 
            gap: '30px',
          }}>
            {['Home', 'Features', 'Solution', 'Company', 'Blog'].map((item, index) => (
              <motion.li 
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                <a 
                  href="#" 
                  style={{ 
                    color: '#fff', 
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    position: 'relative',
                    padding: '5px 0',
                  }}
                  className="nav-link"
                >
                  {item}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                    transition: 'width 0.3s ease',
                  }} className="nav-underline"></span>
                </a>
              </motion.li>
            ))}
          </ul>
          
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0, 119, 255, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              padding: '12px 30px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 119, 255, 0.2)',
            }}
          >
            Get the App
          </motion.button>
        </motion.nav>

        {/* Main Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          zIndex: 2,
          padding: '0 20px',
          boxSizing: 'border-box'
        }}>
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              maxWidth: '900px',
              width: '100%',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0 auto',
              padding: '0 20px',
            }}
          >
            <motion.h1 
              style={{
                fontSize: '4rem',
                fontWeight: 800,
                lineHeight: '1.1',
                margin: '2rem 0 1.5rem',
                background: 'linear-gradient(to right, #fff, #e0e0e0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: '"Poppins", sans-serif',
                textAlign: 'center',
                maxWidth: '900px'
              }}
            >
              Big transfer, <span style={{ color: '#4facfe' }}>bigger save</span>
            </motion.h1>
            
            <motion.p 
              style={{
                fontSize: '1.2rem',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.85)',
                maxWidth: '600px',
                marginBottom: '2.5rem',
              }}
            >
              Split your purchase into 4 interest-free payments. Pay nothing upfront and make payments every 2nd Friday. Track rewards, purchases, and payments in the app.
            </motion.p>
            
            <div style={{ marginTop: '40px' }}></div>
          </motion.div>
        </div>
      </section>
      
      {/* App Store and Play Store Ratings */}
      <div style={{
        maxWidth: '1600px',
        margin: '60px auto 0',
        padding: '0 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#333',
        position: 'relative',
        zIndex: 10,
        flexWrap: 'wrap',
        gap: '20px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <p style={{
          fontSize: '1.2rem',
          margin: 0,
          color: '#666',
          order: 1,
          textAlign: 'left',
          flex: 1
        }}>250,000+ happy customers</p>
        
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px',
          order: 3
        }}>
          {/* Play Store Rating */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '4px 0'
          }}>
            <div style={{ 
              display: 'flex',
              gap: '4px'
            }}>
              {[...Array(5)].map((_, i) => (
                <span key={`play-${i}`} style={{ 
                  color: '#000000', 
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  lineHeight: '1'
                }}>★</span>
              ))}
            </div>
            <span style={{ 
              fontWeight: '500',
              fontSize: '1.1rem'
            }}>4.7 Score on Play Store</span>
          </div>
          
          {/* App Store Rating */}
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '4px 0'
          }}>
            <div style={{ 
              display: 'flex',
              gap: '4px'
            }}>
              {[...Array(5)].map((_, i) => (
                <span key={`app-${i}`} style={{ 
                  color: '#000000', 
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  lineHeight: '1'
                }}>★</span>
              ))}
            </div>
            <span style={{ 
              fontWeight: '500',
              fontSize: '1.1rem'
            }}>4.8 Score on App Store</span>
          </div>
        </div>
      </div>

      <div style={{ height: '60px' }}></div>

      <section className="help-section" style={{ padding: '100px 0', backgroundColor: '#f8f9fa', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', display: 'flex', gap: '60px' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '60px', color: '#111827' }}>
              Help your child grow into a financially responsible adult
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '24px',
                    padding: '0 20px'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px',
                    background: '#f0f9ff',
                    color: '#3b82f6',
                    fontSize: '28px',
                    flexShrink: 0
                  }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 style={{
                      margin: '0 0 12px 0',
                      fontSize: '1.75rem',
                      color: '#111827',
                      fontWeight: 600,
                      lineHeight: '1.3'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      margin: 0,
                      color: '#4b5563',
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      maxWidth: '600px'
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Mobile Images */}
          <div style={{
            position: 'sticky',
            top: '120px',
            height: 'fit-content',
            width: '400px',
            flexShrink: 0,
            marginTop: '60px'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '9/18',
                maxWidth: '300px',
                margin: '0 auto'
              }}
            >
              <img 
                src={mobileImg} 
                alt="Mobile app interface" 
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  zIndex: 1,
                  borderRadius: '30px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <div style={{ height: '80px' }}></div>

      <MoneySection />
    </div>
    </div>
  );
}

export default App;

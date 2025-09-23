import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import Footer from './Footer';

export default function MoneySection() {
  const [isYearly, setIsYearly] = useState(false  )
  const sectionRef = useRef(null  )
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  }  )

  const pricingPlans = {
    monthly: [
      {
        name: 'Free',
        price: '$0',
        description: 'Perfect for trying out Stackinel',
        features: [
          'Basic card features',
          'Up to 2 child accounts',
          'Basic transaction history'
        ],
        cta: 'Get Started',
        featured: false
      },
      {
        name: 'Family',
        price: '$6.99',
        description: 'Perfect for growing families',
        features: [
          'Everything in Free, plus:',
          'Up to 5 child accounts',
          'Advanced spending controls',
          'Savings goals & allowances',
          'Priority customer support'
        ],
        cta: 'Start Free Trial',
        featured: true
      },
      {
        name: 'Premium',
        price: '$14.99',
        description: 'For the ultimate family experience',
        features: [
          'Everything in Family, plus:',
          'Unlimited child accounts',
          'Advanced financial insights',
          'Custom card designs',
          'Exclusive rewards & cashback',
          '24/7 VIP support'
        ],
        cta: 'Get Premium',
        featured: false
      }
    ],
    yearly: [
      {
        name: 'Free',
        price: '$0',
        description: 'Perfect for trying out Stackinel',
        features: [
          'Basic card features',
          'Up to 2 child accounts',
          'Basic transaction history'
        ],
        cta: 'Get Started',
        featured: false
      },
      {
        name: 'Family',
        price: '$4.99',
        description: 'Perfect for growing families',
        features: [
          'Everything in Free, plus:',
          'Up to 5 child accounts',
          'Advanced spending controls',
          'Savings goals & allowances',
          'Priority customer support',
          '2 months free (save 20%)'
        ],
        cta: 'Start Free Trial',
        featured: true
      },
      {
        name: 'Premium',
        price: '$9.99',
        description: 'For the ultimate family experience',
        features: [
          'Everything in Family, plus:',
          'Unlimited child accounts',
          'Advanced financial insights',
          'Custom card designs',
          'Exclusive rewards & cashback',
          '24/7 VIP support',
          '3 months free (save 20%)'
        ],
        cta: 'Get Premium',
        featured: false
      }
    ]
  };

  const plans = isYearly ? pricingPlans.yearly : pricingPlans.monthly;

  // Track scroll progress for the section with custom range for smoother entry/exit
  const sectionProgress = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 0, 1, 0]
    )

  // Animate x position based on scroll (right to left)
  const xAnim = useTransform(
    sectionProgress,
    [0, 1],
    [300, 0] // Start from right (300px off-screen) and move to 0 (final position)
    )

  // Keep y position fixed (no vertical movement)
  const yAnim = useTransform(
    sectionProgress,
    [0, 1],
    [0, 0]
    )

  // Add a subtle scale effect on entry/exit
  const scaleAnim = useTransform(
    sectionProgress,
    [0, 1],
    [0.9, 1] // Slight scale up as it enters
    )

  // Animate opacity based on scroll
  const opacity = useTransform(
    sectionProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0] // Fade in quickly, stay visible, then fade out
    )

  // Reset animation when back in view
  const resetAnimation = () => {
    // No need to manually set values as they're controlled by scroll
  };

  // Setup intersection observer to detect when section is back in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            resetAnimation(  )
          }
        }  )
      },
      { threshold: 0.1 }
      )

    if (sectionRef.current) {
      observer.observe(sectionRef.current  )
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current  )
      }
    };
  }, []  )

  return (
    <div className="pt-4 pb-16 bg-white px-4">
      <div className="w-full mx-auto px-8" style={{ maxWidth: '1800px' }}>
        <h2 className="text-5xl font-bold text-black text-left mb-12 max-w-5xl">
          Get the most out of your money
        </h2>
        
        {/* Two Cards Row */}
        <div className="relative w-full mb-4" style={{ minHeight: '400px' }}>
          {/* Card 1 - White - Smaller Width */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ 
              x: '0%',
              opacity: 1,
              transition: { 
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }
            }}
            viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
            style={{
              width: '570px',
              height: '390px',
              overflow: 'hidden',
              padding: '40px 32px 32px 32px',
              borderRadius: '36px',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 5,
              left: '40%',
              transform: 'translateX(-100%)',
              background: 'white',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-black mb-6">Simplicity of a credit card</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Give your child the power of a prepaid smart card — safe, cashless, and easy to use online or offline.
              </p>
            </div>
            <div className="mt-auto flex justify-end">
              <img 
                src="/1.png" 
                alt="Credit Card" 
                className="h-48 w-auto object-contain"
              />
            </div>
          </motion.div>
          
          {/* Card 2 - Black - Wider Width */}
          <motion.div
            className="absolute top-0 overflow-hidden"
            initial={{ x: '100%', opacity: 0 }}
            whileInView={{ 
              x: '20px',
              opacity: 1,
              transition: { 
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.2
              }
            }}
            viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
            style={{
              width: '850px',
              height: '390px',
              borderRadius: '36px',
              background: 'linear-gradient(90deg, #111111, #222222)',
              padding: '2.5rem',
              zIndex: 5,
              left: '40%',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex-1 z-10">
                <h3 className="text-3xl font-bold text-white mb-6">Personalized & Secure Payments</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  From UPI to card swipes, our platform makes payments seamless while giving parents full control and real-time tracking.
                </p>
              </div>
              <div className="absolute inset-0 z-0">
                <img 
                  src="/2.png" 
                  alt="Secure Payments" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0.9
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Wallet & Phone Section */}
        <motion.div 
          className="bg-white rounded-3xl p-14 shadow-xl border border-gray-100 w-full mx-auto mt-0 ml-0.5" 
          style={{ maxWidth: '1600px' }}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ 
            y: 0, 
            opacity: 1,
            transition: { 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] // Custom easing for smooth deceleration
            }
          }}
          viewport={{ once: true, margin: '-20% 0px -10% 0px' }}
        >
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 pr-12">
              <h3 className="text-4xl font-bold text-black mb-8">Your child's wallet, always at your fingertips</h3>
              <p className="text-gray-600 text-xl leading-relaxed mb-10 max-w-2xl">
                Easily load money, track every spend, and set limits — all from our app. A simple way to teach financial discipline while keeping payments hassle-free.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <img 
                  src="/app-store.png" 
                  alt="Download on App Store" 
                  className="h-14 w-auto cursor-pointer hover:opacity-90 transition-opacity"
                />
                <img 
                  src="/google-play.png" 
                  alt="Get it on Google Play" 
                  className="h-14 w-auto cursor-pointer hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
              <img 
                src="/3rd.png" 
                alt="Wallet App Preview" 
                className="h-96 w-auto object-contain"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Money Made Simple Section */}
        <div className="py-24">
          <div className="w-full mx-auto px-8" style={{ maxWidth: '1800px' }}>
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-black mb-6">Money made simple for families</h2>
              <p className="text-2xl text-gray-600">Empowering kids, while giving parents complete control.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left side - Text content */}
              <div className="lg:w-1/2">
                <h2 className="text-5xl font-bold text-black mb-6">Your child's money, in your hands</h2>
              <p className="text-lg text-gray-600 mb-10">
                Stay in control while giving your kids the independence of their own smart card. Junio makes pocket money digital, safe, and fun.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Set flexible spend limits for your child</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Instant reloads from your Stackintel app</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">No worries about cash loss or theft</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Track every transaction in real time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Rewards & offers designed just for kids</span>
                </li>
              </ul>
            </div>
            
            {/* Right side - Empty space for image */}
            <div className="lg:w-1/2 h-96 bg-gray-100 rounded-3xl flex items-center justify-center">
              <span className="text-gray-400">Image Space</span>
            </div>
          </div>
          </div>
        </div>

        {/* Smart Spending Section */}
        <div className="py-24 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left side - Image */}
              <div className="lg:w-1/2">
                <img 
                  src="/5.png" 
                  alt="Smart spending with Junio"
                  className="rounded-3xl w-full h-auto"
                />
              </div>
              
              {/* Right side - Content */}
              <div className="lg:w-1/2">
                <h2 className="text-5xl font-bold text-black mb-6">Smart spending starts here</h2>
                <p className="text-xl text-gray-600 mb-10">
                  Teach money management early with Junio. Kids learn the value of money 
                  while enjoying the convenience of digital payments.
                </p>
                
                <ul className="space-y-5">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 text-lg">UPI & card payments made simple</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 text-lg">Savings & goals tracking for kids</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 text-lg">Notifications for every transaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 text-lg">Empower kids with financial literacy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span className="text-gray-700 text-lg">Designed for families, made for kids</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tap Pay Section - Updated Layout */}
        <div ref={sectionRef} className="relative py-20 bg-black text-white overflow-hidden w-screen -ml-[5%] -mr-[1%] pl-[5%] pr-[1.5%]">
          {/* Background gradient - full width */}
          <div className="absolute inset-0 w-[110%] -left-[5%] bg-gradient-to-b from-gray-900 to-black"></div>
          
          {/* Hand image in top right with text below */}
          <div className="absolute top-32 right-40 z-20 flex flex-col items-end">
            <motion.div
              style={{
                x: xAnim,
                y: yAnim,
                scale: scaleAnim,
                opacity,
                willChange: 'transform, opacity',
                transformOrigin: 'right center', // Makes the animation originate from the right
              }}
              initial={{ x: 300, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                mass: 0.5
              }}
            >
              <img 
                src="/hand.png" 
                alt="Paying with smartwatch"
                className="h-64 w-auto object-contain"
                style={{
                  filter: 'drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3))',
                  maxWidth: '100%',
                  height: 'auto',
                  marginBottom: '1.5rem'
                }}
              />
            </motion.div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl text-right">
              Stackinel makes transactions smarter and faster. Kids can pay instantly using their smartwatch with UPI integration, while parents enjoy the same level of security and control as with the Stackinel card and app.
            </p>
          </div>
          
          <div className="relative z-10 w-full max-w-[2400px] mx-auto pl-8">
            {/* Title in top-left corner */}
            <div className="absolute top-3 left-3 z-20">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Tap. Pay. <span className="block">Done.</span>
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mt-4">PayNOW</h2>
            </div>
            
            <div className="relative min-h-[60vh] w-full flex flex-col items-start justify-between pt-40 pb-12">
              {/* Spacer to push button to bottom */}
              <div className="flex-1"></div>
              
              {/* Sign up button at bottom left */}
              <div className="w-full max-w-2xl z-20">
                <div className="space-y-6 max-w-xl">
                  <div className="pt-2">
                    <button className="bg-white hover:bg-gray-100 text-black font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                      Sign up for free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Section */}
      <div className="py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Choose the plan that works best for your family. Cancel anytime, no questions asked.
          </p>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center mb-16">
            <span className={`text-lg font-medium mr-4 ${!isYearly ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              <div className="w-16 h-8 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300">
                <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${isYearly ? 'transform translate-x-8' : ''}`}></div>
              </div>
              <span className={`ml-3 text-lg font-medium ${isYearly ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                Yearly
              </span>
            </label>
            {isYearly && (
              <span className="ml-4 px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
                Save 20%
              </span>
            )}
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch relative">
            {plans.map((plan, index) => (
              <motion.div 
                key={plan.name}
                className={`relative flex flex-col h-full rounded-2xl p-8 transition-all duration-500 ${isYearly ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl' : 'bg-white border border-gray-200 text-gray-900'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  height: 'auto',
                  minHeight: '650px',
                  x: 0, // Explicitly set x position to prevent movement
                  width: '100%' // Ensure consistent width
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  height: { duration: 0.3 }, // Smooth height transitions
                  x: { duration: 0 }, // Prevent x-axis animation
                  width: { duration: 0 } // Prevent width animation
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: isYearly ? '0 20px 25px -5px rgba(0, 0, 0, 0.3)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100%',
                  width: '100%',
                  position: 'relative' // Ensure proper positioning
                }}>
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${isYearly ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${isYearly ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className={`text-4xl font-bold ${isYearly ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 ${isYearly ? 'text-gray-400' : 'text-gray-500'}`}>
                    /month
                  </span>
                  <p className={`text-sm mt-1 ${isYearly ? 'text-gray-400' : 'text-gray-500'}`}>
                    {isYearly ? 'Billed annually' : 'Billed monthly'}
                  </p>
                </div>
                <ul className="space-y-3 text-left mb-8 flex-grow min-h-[240px]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        className="h-5 w-5 flex-shrink-0 mt-0.5 mr-2" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke={i === 0 && (feature.includes('Free') || feature.includes('Family')) ? (isYearly ? '#3B82F6' : '#10B981') : (isYearly ? '#60A5FA' : '#10B981')}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={i === 0 && (feature.includes('Free') || feature.includes('Family')) ? (isYearly ? 'text-blue-400 font-medium' : 'text-green-600 font-medium') : (isYearly ? 'text-gray-300' : 'text-gray-700')}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 w-full">
                  <motion.button
                    className={`w-full py-3 px-6 font-medium rounded-lg transition-colors duration-300 ${
                      plan.featured 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : isYearly 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Need help choosing a plan?</p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Compare all features →
            </a>
          </div>
        </div>
      </div>
      
      {/* Pocket Money & Smart Payments Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-xl">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" aria-hidden="true"></div>
              
              <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2 lg:pr-12">
                  <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    <span className="block">Pocket Money &</span>
                    <span className="block text-blue-400">Smart Payments</span>
                    <span className="block">for Students</span>
                  </h2>
                  <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                    Join thousands of students and parents who are making money management simple and secure.
                  </p>
                  
                  <div className="mt-10">
                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="flex-1 px-6 py-4 rounded-full bg-gray-800/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                      />
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-full transition-colors duration-300 whitespace-nowrap">
                        Subscribe
                      </button>
                    </div>
                    
                    <div className="mt-4 flex items-center text-sm text-gray-400">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>No credit card required</span>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Placeholder for image */}
                <div className="mt-16 lg:mt-0 lg:ml-16 lg:flex-shrink-0">
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm p-8">
                      <div className="text-center">
                        <div className="text-6xl mb-4">📱</div>
                        <p className="text-gray-300">Mobile app preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Footer Section */}
    <Footer />
  )
}

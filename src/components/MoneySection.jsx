import React from 'react';
import { motion } from 'framer-motion';

export default function MoneySection() {
  return (<>
    <section className="pt-4 pb-16 bg-white px-4">
      <div className="w-full mx-auto px-8" style={{ maxWidth: '1800px' }}>
        <h2 className="text-5xl font-bold text-black text-left mb-12 max-w-5xl">
          Get the most out of your money
        </h2>
        
        {/* Two Cards Row */}
        <div className="relative w-full mb-4" style={{ minHeight: '400px' }}>
          {/* Card 1 - White - Smaller Width */}
          <div
            className="absolute top-0 bg-white shadow-md border border-gray-100"
            style={{
              width: '570px',
              height: '390px',
              overflow: 'hidden',
              opacity: 1,
              padding: '40px 32px 32px 32px',
              borderRadius: '36px',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 5,
              left: '40%',
              transform: 'translateX(calc(-100% - 20px))'
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
          </div>
          
          {/* Card 2 - Black - Wider Width */}
          <div
            className="absolute top-0 overflow-hidden"
            style={{
              width: '900px',
              height: '390px',
              opacity: 1,
              borderRadius: '36px',
              background: 'linear-gradient(90deg, #111111, #222222)',
              padding: '2.5rem',
              zIndex: 5,
              left: '40%',
              transform: 'translateX(20px)'
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
          </div>
        </div>
        
        {/* Wallet & Phone Section */}
        <div className="bg-white rounded-3xl p-14 shadow-xl border border-gray-100 w-full mx-auto mt-0 ml-0.5" style={{ maxWidth: '1600px' }}>
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
        <div className="relative py-20 bg-black text-white overflow-hidden w-full px-0">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
          
          {/* Hand image in top right with text below */}
          <div className="absolute top-32 right-16 z-20 flex flex-col items-end">
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 0.9 }}
              transition={{ 
                type: 'spring',
                stiffness: 30,
                damping: 12,
                mass: 1,
                delay: 0.5,
                duration: 1.2
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
          
          <div className="relative z-10 w-full max-w-[2000px] mx-auto px-8">
            {/* Title in top-left corner */}
            <div className="absolute top-32 left-16 z-20">
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
    </section>
  </>
);
}

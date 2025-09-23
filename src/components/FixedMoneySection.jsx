import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Footer from './Footer';

export default function MoneySection() {
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

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
  const sectionProgress = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 0, 1, 0]);
  const xAnim = useTransform(sectionProgress, [0, 1], [300, 0]);
  const yAnim = useTransform(sectionProgress, [0, 1], [0, 0]);
  const scaleAnim = useTransform(sectionProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(sectionProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div className="bg-white">
      <div className="pt-4 pb-16 px-4">
        <div className="w-full mx-auto px-8" style={{ maxWidth: '1800px' }}>
          {/* Content sections go here */}
          
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
                ease: [0.16, 1, 0.3, 1]
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
          </motion.div>
        </div>
      </div>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

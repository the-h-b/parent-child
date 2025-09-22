import React from 'react';

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
      </div>
    </section>
  </>);
}

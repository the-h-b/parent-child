import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-left">Home</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-left">Features</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-left">Pricing</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-left">Sign up</button></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-left">Blog</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-left">Documentation</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-left">About</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer text-left">Terms & Conditions</button></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get in touch</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 mb-2">Customer service 7 days a week -</p>
                <p className="text-gray-400">from 8 a.m. to 8 p.m. by phone and 24</p>
                <p className="text-gray-400">hours a day by e-mail and chat</p>
              </div>
              
              <div>
                <p className="text-gray-400">#201, 2nd Floor, Arc Plaza</p>
                <p className="text-gray-400">Industrial Estate, Veera Desai Road,</p>
                <p className="text-gray-400">Andheri West, Mumbai-400053</p>
              </div>
              
              <div className="space-y-2">
                <p className="text-gray-400">+91 81948 66666</p>
                <p className="text-gray-400">info@Stackintel.in</p>
              </div>
              
              <div className="pt-4">
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            Hand Made by Stackintel Ltd
          </div>
          <div className="text-gray-400 text-sm">
            Powered by Stackintel Private Limited
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

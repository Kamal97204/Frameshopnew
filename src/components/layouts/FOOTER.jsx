import React from 'react'

function FOOTER() {
  return (
    <div>
{/* Footer Section */}
<footer className="bg-gray-900 text-white pt-12 pb-6">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Shop Information */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <i className="fas fa-border-all text-2xl mr-2 text-accent" />
          <span className="text-xl font-bold">Frame Genius</span>
        </div>
        <p className="text-gray-400 mb-4">
          Your one-stop shop for premium picture frames, eyeglass frames, and custom framing solutions.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-pinterest-p" />
          </a>
        </div>
      </div>
      {/* Quick Links */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Shop Categories</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-accent">Picture Frames</a></li>
          <li><a href="#" className="text-gray-400 hover:text-accent">Photo Frames</a></li>
          <li><a href="#" className="text-gray-400 hover:text-accent">Eyeglass Frames</a></li>
          <li><a href="#" className="text-gray-400 hover:text-accent">Sunglasses</a></li>
          <li><a href="#" className="text-gray-400 hover:text-accent">Custom Frames</a></li>
          <li><a href="#" className="text-gray-400 hover:text-accent">Frame Accessories</a></li>
        </ul>
      </div>
      {/* Customer Service */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Customer Service</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-accent">Contact Us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-accent">FAQs</a></li>
          <li><a href="#" className="text-gray-400 hover:text-accent">Shipping Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-accent">Returns &amp; Exchanges</a></li>
          <li><a href="#" className="text-gray-400 hover:text-accent">Size Guide</a></li>
          <li><a href="#" className="text-gray-400 hover:text-accent">Privacy Policy</a></li>
        </ul>
      </div>
      {/* Contact & Newsletter */}
      <div>
        <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Stay Updated</h3>
        <div className="mb-6">
          <p className="text-gray-400 mb-2">Subscribe to our newsletter for the latest frame designs and special offers.</p>
          <form className="flex">
            <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-1 focus:ring-accent text-gray-900" />
            <button type="submit" className="bg-accent hover:bg-orange-500 px-4 py-2 rounded-r-md">
              <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
        <div>
          <h4 className="font-medium mb-2">Contact Info</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center">
              <i className="fas fa-map-marker-alt mr-2 text-accent" />
              123 Frame Street, Art District, NY 10001
            </li>
            <li className="flex items-center">
              <i className="fas fa-phone-alt mr-2 text-accent" />
              (123) 456-7890
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope mr-2 text-accent" />
              info@framegenius.com
            </li>
            <li className="flex items-center">
              <i className="fas fa-clock mr-2 text-accent" />
              Mon-Fri: 9AM-6PM | Sat: 10AM-4PM
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Payment Methods & Copyright */}
    <div className="border-t border-gray-800 mt-8 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400 text-sm">
            © 2023 FrameCraft. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <img src="https://via.placeholder.com/40x25?text=VISA" alt="Visa" className="h-6" />
          <img src="https://via.placeholder.com/40x25?text=MC" alt="Mastercard" className="h-6" />
          <img src="https://via.placeholder.com/40x25?text=AMEX" alt="American Express" className="h-6" />
          <img src="https://via.placeholder.com/40x25?text=PP" alt="PayPal" className="h-6" />
          <img src="https://via.placeholder.com/40x25?text=AP" alt="Apple Pay" className="h-6" />
        </div>
      </div>
    </div>
  </div>
</footer>





    </div>
  )
}

export default FOOTER
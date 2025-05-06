import React from 'react'

function NAVBAR() {
  return (
    <div>
<div>
  {/* Top Announcement Bar */}
  <div className="bg-primary text-white text-center py-2 px-4 text-sm">
    🚚 Free shipping on orders over $50 | 📞 Call us: (123) 456-7890
  </div>
  {/* Main Navbar */}
  <nav className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        {/* Left side - Logo and main links */}
        <div className="flex items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <i className="fas fa-border-all text-2xl mr-2 text-accent" />
            <span className="text-xl font-bold text-gray-800">Frame Genius </span>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:ml-8 md:flex md:space-x-6">
            <a href="#" className="px-1 py-2 text-sm font-medium text-gray-900 border-b-2 border-accent">Home</a>
            <a href="#" className="px-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-accent">Picture Frames</a>
            <a href="#" className="px-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-accent">Eyeglass Frames</a>
            <a href="#" className="px-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-accent">Custom Frames</a>
            <a href="#" className="px-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-accent">About Us</a>
          </div>
        </div>
        {/* Right side - Icons */}
        <div className="flex items-center">
          {/* Search */}
          <div className="relative mx-4 hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400" />
            </div>
            <input className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent" placeholder="Search frames..." />
          </div>
          {/* Icons */}
          <div className="flex space-x-4">
            <a href="#" className="p-1 text-gray-500 hover:text-accent">
              <i className="fas fa-user" />
              <span className="sr-only">Account</span>
            </a>
            <a href="#" className="p-1 text-gray-500 hover:text-accent">
              <i className="fas fa-heart" />
              <span className="sr-only">Wishlist</span>
            </a>
            <a href="#" className="p-1 text-gray-500 hover:text-accent relative">
              <i className="fas fa-shopping-cart" />
              <span className="sr-only">Cart</span>
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="ml-4 flex items-center md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent" id="mobile-menu-button">
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Mobile menu (hidden by default) */}
    <div className="md:hidden hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <div className="relative mt-2 mb-4">
          <input className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent" placeholder="Search frames..." />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-search text-gray-400" />
          </div>
        </div>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary">Home</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Picture Frames</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Eyeglass Frames</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">Custom Frames</a>
        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">About Us</a>
      </div>
    </div>
  </nav>
</div>



         
    </div>
  )
}

export default NAVBAR
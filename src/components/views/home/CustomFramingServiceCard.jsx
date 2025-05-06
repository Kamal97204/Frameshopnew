import React from 'react'

function CustomFramingServiceCard() {
  return (
    <div>

<div className="bg-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Custom Framing Services
        </h2>
        <p className="mt-3 max-w-3xl text-lg text-gray-500">
          Our expert framers will help you create the perfect custom frame for your special artwork, photos, or memorabilia.
        </p>
        <div className="mt-8 sm:flex">
          <div className="rounded-md shadow">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              Start Your Project
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:mt-0">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-indigo-600 opacity-25" />
          <img className="relative w-full rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="Custom framing workshop" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h3 className="text-lg font-medium text-white">Expert Craftsmanship</h3>
            <p className="mt-1 text-sm text-indigo-200">Handmade with precision for your most valuable pieces</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>





    </div>
  )
}

export default CustomFramingServiceCard
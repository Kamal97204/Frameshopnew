import React from 'react'

function FeaturedFramesCarousel() {
  return (
    <div> 
<div className="bg-white py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Featured Collections
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
        Our most popular frame styles this season
      </p>
    </div>
    <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {/* Frame 1 */}
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="https://images.unsplash.com/photo-1616486338815-18dfb00052c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Modern black frame" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                Modern Black Gallery Frame
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">8×10, 11×14, 16×20</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$29.99</p>
        </div>
      </div>
      {/* Frame 2 */}
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Vintage gold frame" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                Vintage Gold Ornate Frame
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">5×7, 8×10, 11×14</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$39.99</p>
        </div>
      </div>
      {/* Frame 3 */}
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80" alt="Minimalist wood frame" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                Natural Wood Float Frame
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">8×10, 11×14, 16×20, 18×24</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$34.99</p>
        </div>
      </div>
      {/* Frame 4 */}
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img src="https://images.unsplash.com/photo-1600566752229-250ed79470a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Sleek metal frame" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                Sleek Silver Metal Frame
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">8×10, 11×14, 16×20</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$27.99</p>
        </div>
      </div>
    </div>
  </div>
</div>




         
    </div>
  )
}

export default FeaturedFramesCarousel
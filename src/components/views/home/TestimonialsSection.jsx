import React from 'react'

function TestimonialsSection() {
  return (
    <div>
<div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        What Our Customers Say
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
        Don't just take our word for it - hear from our satisfied customers
      </p>
    </div>
    <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Testimonial 1 */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sarah Johnson" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-900">Sarah Johnson</h3>
            <div className="flex text-yellow-400 mt-1">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-base text-gray-600">
            "The custom frame I ordered for my grandmother's painting was absolutely perfect. The craftsmanship is exceptional and it arrived well-packaged and on time."
          </p>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Michael Chen" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-900">Michael Chen</h3>
            <div className="flex text-yellow-400 mt-1">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-base text-gray-600">
            "I've purchased several frames from Frame Genius for my photography business. The quality is consistently excellent and really makes my work stand out."
          </p>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="David Rodriguez" />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-900">David Rodriguez</h3>
            <div className="flex text-yellow-400 mt-1">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-base text-gray-600">
            "The team helped me choose the perfect frames for my office gallery wall. The consultation was free and they really understood my vision."
          </p>
        </div>
      </div>
    </div>
  </div>
</div>





    </div>
  )
}

export default TestimonialsSection
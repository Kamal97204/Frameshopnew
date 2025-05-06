import React from 'react'

function FrameSelectionHelper() {
  return (
    <div>
<div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Frame Size Guide
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
        Not sure what size you need? Use our handy guide below
      </p>
    </div>
    <div className="mt-10">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 bg-gray-50">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Standard Photo Frame Sizes
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Common dimensions for photos and artwork
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Frame Size</dt>
              <dt className="text-sm font-medium text-gray-500">Image Size</dt>
              <dt className="text-sm font-medium text-gray-500">Best For</dt>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-gray-200">
              <dd className="text-sm text-gray-900">4×6 inches</dd>
              <dd className="text-sm text-gray-500 mt-1 sm:mt-0">4×6 inches</dd>
              <dd className="text-sm text-gray-500 mt-1 sm:mt-0">Standard photos, postcards</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-gray-200">
              <dd className="text-sm text-gray-900">5×7 inches</dd>
              <dd className="text-sm text-gray-500 mt-1 sm:mt-0">5×7 inches</dd>
              <dd className="text-sm text-gray-500 mt-1 sm:mt-0">Portraits, invitations</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-gray-200">
              <dd className="text-sm text-gray-900">8×10 inches</dd>
              <dd className="text-sm text-gray-500 mt-1 sm:mt-0">8×10 inches</dd>
              <dd className="text-sm text-gray-500 mt-1 sm:mt-0">Larger photos, certificates</dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-gray-200">
              <dd className="text-sm text-gray-900">11×14 inches</dd>
              <dd className="text-sm text-gray-500 mt-1 sm:mt-0">11×14 inches</dd>
              <dd className="text-sm text-gray-500 mt-1 sm:mt-0">Art prints, posters</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-gray-200">
              <dd className="text-sm text-gray-900">16×20 inches</dd>
              <dd className="text-sm text-gray-500 mt-1 sm:mt-0">16×20 inches</dd>
              <dd className="text-sm text-gray-500 mt-1 sm:mt-0">Large artwork, diplomas</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 bg-gray-50">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Custom Sizes Available
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            We can create frames in any size you need
          </p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
              <i className="fas fa-ruler-combined text-white text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Need a different size?</h3>
              <div className="mt-2 text-sm text-gray-500">
                <p>Contact us for custom framing options in any dimension. Our team can help you find or create the perfect frame for your unique piece.</p>
              </div>
              <div className="mt-3">
                <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  Request custom size <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>






    </div>
  )
}

export default FrameSelectionHelper
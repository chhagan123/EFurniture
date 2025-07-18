
import React from 'react'

export const Tosleep = () => {
  return (
    <div className='width-full height-auto '>

        <div>
            <img 
            src='./sleep.jpeg'
            />
        </div>
        <div className="w-full px-6 md:px-20 py-10 space-y-12">
      
      {/* Section 1: Full-width text */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Benefits Of Getting Good Sleep
        </h2>
        <p className="text-gray-700 leading-relaxed">
          When we sleep, our body restore, rejuvenate, and regenerate. It is a time to recover from the previous day while repairing and preparing for the next. Adequate sleep reduces stress and illness, balances our emotions, and improves our overall well-being. Sleep helps us conserve our energy resources to ensure maximum performance throughout the day.
        </p>
      </div>

      {/* Section 2: Text + Image (Side-by-side) */}
      <div className="md:flex md:items-center gap-6">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            How Do You Know When It's Time For a New Mattress?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Don't look at your warranty to tell you how long to keep your mattress. The warranty on a mattress is not an indicator of how long the product should be used before replacement. Normally, a mattress provides optimum service for about six to eight years of nightly use. If your mattress is no longer comfortable or supportive, and you're waking up tired, stiff, cranky, and with aching muscles and joints, it could be time for a new mattress.
          </p>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <img
            src="/sleep2.jpg"
            alt="Woman sleeping"
            className="rounded-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Section 3: Full-width text */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Health Benefits Of A Quality Mattress
        </h2>
        <p className="text-gray-700 leading-relaxed">
          When it comes to getting adequate sleep, six hours of uninterrupted sleep is better than eight or nine of fragmented sleep. Research shows that a mattress can either rob you of sleep, or encourage it. If it's doing its job, it will reduce tossing and turning, provide proper spinal support, improve circulation, and cushion the body's pressure points. A comfortable, supportive mattress can provide significant relief to those with health issues and improve your chances of getting adequate uninterrupted sleep.
        </p>
      </div>
    </div>

    </div>
  )
}

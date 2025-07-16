
        
       
             
   
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Customer feedback array
  const customerFeedbacks = [
    {
      id: 1,
      feedback: "I was skeptical about buying a mattress online, but Restin exceeded my expectations. Comfortable, arrived quickly, and easy to set up.",
      name: "Sarah J.",
      role: "Verified Customer",
      rating: 5
    },
    {
      id: 2,
      feedback: "As someone with chronic back pain, Restin has been a game-changer - perfect balance of support and comfort. My pain has decreased significantly.",
      name: "Michael T.",
      role: "Restin Royale Owner",
      rating: 5
    },
    {
      id: 3,
      feedback: "Customer service is exceptional. Their team spent time helping me choose the right mattress. Sleep quality has transformed!",
      name: "Emily R.",
      role: "Restin Classic Owner",
      rating: 5
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % customerFeedbacks.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextFeedback = () => {
    setCurrentIndex(prev => (prev + 1) % customerFeedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentIndex(prev => (prev - 1 + customerFeedbacks.length) % customerFeedbacks.length);
  };

  return (
    <div className="h-auto flex items-center justify-center ">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Customer Feedback
          </h1>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Feedback Slider */}
        <div className="relative  rounded-xl shadow-sm p-6 md:p-8">
          {/* Navigation Arrows */}
          <button 
            onClick={prevFeedback}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            aria-label="Previous feedback"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          
          <button 
            onClick={nextFeedback}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
            aria-label="Next feedback"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
          
          {/* Feedback Content */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={`mx-1 ${i < customerFeedbacks[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            
            <p className="text-gray-700 italic mb-8">
              "{customerFeedbacks[currentIndex].feedback}"
            </p>
            
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-16 h-16 mb-3" />
              <h3 className="font-bold text-gray-900">{customerFeedbacks[currentIndex].name}</h3>
              <p className="text-sm text-gray-600">{customerFeedbacks[currentIndex].role}</p>
            </div>
          </div>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {customerFeedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
       
      </div>
    </div>
  );
};

export default Feedback;
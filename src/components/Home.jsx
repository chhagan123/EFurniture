


import React, { useEffect, useState } from "react";
import Feedback from "./Feedback";
import { Recent } from "./Recent";
import Footer from "./Footer";

// Array of images
const images = [
  { id: 1, src: "/image1.png", des: "The slip is the best meditation", alt: "Image 1" },
  { id: 2, src: "/image2.png", des: "The slip is the best meditation", alt: "Image 2" },
];

const newimg = [
  { id: 1, src: "/img3.png", alt: "Product 1", title: "Memory Foam Mattress" },
  { id: 2, src: "/img4.png", alt: "Product 2", title: "Spring Mattress" },
  { id: 3, src: "/img5.png", alt: "Product 3", title: "Hybrid Mattress" },
];

const icon = [
  { id: 1, src: "/icon-1.png", alt: "Free Shipping", label: "Free Shipping" },
  { id: 2, src: "/icon-2.png", alt: "Easy Returns", label: "Easy Returns" },
  { id: 3, src: "/icon-3.png", alt: "Secure Payment", label: "Secure Payment" },
  { id: 4, src: "/icon-4.png", alt: "24/7 Support", label: "24/7 Support" },
];

const mat = [
  { id: 1, src: "/mat1.png", alt: "onyx", label: "Free Shipping" },
  { id: 2, src: "/mat2.png", alt: "Royal Memory", label: "Easy Returns" },
  { id: 3, src: "/mat3.png", alt: "Pearl", label: "Secure Payment" },

]

const customerFeedbacks = [
  {
    id: 1,
    name: "Aarav Sharma",
    feedback: "The mattress is incredibly comfortable. I haven't slept this well in years!"
  },
  {
    id: 2,
    name: "Sneha Patel",
    feedback: "Amazing product quality and fast delivery. Highly recommend to others."
  },
  {
    id: 3,
    name: "Rahul Verma",
    feedback: "Good value for money. The support team was also very helpful with my questions."
  },
  {
    id: 4,
    name: "Priya Desai",
    feedback: "Loved the packaging and the softness of the mattress. Worth every rupee!"
  },
  {
    id: 5,
    name: "Karan Mehta",
    feedback: "The size fit perfectly on my bed frame. Will definitely buy again."
  },
  {
    id: 6,
    name: "Isha Rane",
    feedback: "It really improved my sleep posture. Thank you for such a great product!"
  }
];


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count,setcount] = useState(0);



  // const handlechange = () => {
  //   setcount(count+1)
  //   if(count > customerFeedbacks.length-1 ){
  //       setcount(0)
  //   }
  // }

  // Change slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Carousel Section */}
      <div className="w-full overflow-hidden h-[300px] md:h-[400px] lg:h-[520px] relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img) => (
            <div key={img.id} className="w-full flex-shrink-0 relative">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-6 py-3 rounded-lg">
                <p className="text-lg md:text-xl font-medium">{img.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newimg.map((imgg) => (
            <div
              key={imgg.id}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <div className="h-48 md:h-60 overflow-hidden">
                <img
                  src={imgg.src}
                  alt={imgg.alt}
                  className="w-full h-full object-cover transition group-hover:scale-105 group-hover:brightness-75 duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{imgg.title}</h3>
                <button
                  className="w-full py-2 bg-orange-500 text-white rounded-lg opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Icons Grid */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose Us</h2>
            <div className="grid grid-cols-2 gap-6">
              {icon.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gray-100 p-4 rounded-full mb-3">
                    <img src={item.src} alt={item.alt} className="w-16 h-16 object-contain" />
                  </div>
                  <span className="text-md font-semibold text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="/overlape_img.png"
                alt="Comfort Guarantee"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="bg-white p-4">
                <h3 className="text-xl font-bold mb-2">Sleep Comfort Guarantee</h3>
                <p className="text-gray-600">
                  We stand by the quality of our mattresses with a 100-night sleep trial and a 10-year warranty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Video */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              >
                <source src="/restin.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Are you planning to buy a new mattress?
            </h1>
            <p className="text-gray-700">
              Choosing the right mattress can be confusing as there are plenty of brands available in the market. Many people may not even be aware of the types, and qualities required for the right mattress. A mattress can impact a person's sleep, and provide proper support to the body, in turn, ensuring healthy sleep posture.
            </p>
            <p className="text-gray-700 mt-4">
              When you visit your local mattress store, you have hundreds of options for mattress designs and materials. You can choose between mattresses of various firmness levels, and have the choice of a memory foam mattress, spring mattress, latex mattress, or an organic, all-natural mattress. You can also find mattresses with advanced features that allow you to adjust the position of the bed to improve your posture and sleep.
            </p>
          </div>
        </div>
      </div>

  <Feedback/>
  <Recent/>
  
     
  
</div>


        

     

    
  );
};

export default Home;
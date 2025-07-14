import React, { useEffect, useState } from "react";

// Array of images
const images = [
  { id: 1, src: "/image1.png", des:"The slip is the best meditation" ,alt: "Image 1" },
  { id: 2, src: "/image2.png", des:"The slip is the best meditation", alt: "Image 2" },
//   { id: 3, src: "/image3.jpg", alt: "Image 3" },
];

const newimg = [
    { id: 1, src: "/img3.png", alt: "Image 1" },
    { id: 2, src: "/img4.png", alt: "Image 2" },
    { id: 3, src: "/img5.png", alt: "Image 3" },
]

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">
       <div className="w-full overflow-hidden h-[520px] relative">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img) => (
          <img
            key={img.id}
            
            src={img.src}
            alt={img.alt}
            className="w-full flex-shrink-0 object-cover h-full"
          />
        ))}
      </div>
    </div>
    <div className="w-full flex mt-[50px] justify-evenly  h-[500px]">
        {newimg.map((imgg) => (
            <img
             key={imgg.id}
             src={imgg.src}
             className="w-[284px] h-[250px]"
            />
        ))}
    </div>

    </div>
   
  );
};

export default Home


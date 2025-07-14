import React from 'react'
import { useState,useEffect } from 'react'
const images = [
    {
      id: 1,
      src: "/image1.png",  // put these in the public/images folder
      alt: "Image 1",
    },
    {
      id: 2,
      src: "/image2.png",
      alt: "Image 2",
    }
   
  ];

export const Home = () => {
  
  const [count,setcount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setcount(() => (count+1)% images.length)
    },8000)
   
  })
//   if(count == images.length-1){
//      setcount(0)
//   }

 

  return (
    <div className="w-full h-[429px] pt-10px overflow-hidden relative">
    {images.map((image, index) => (
      <img
        key={image.id}
        src={image.src}
        alt={image.alt}
        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
          index === count ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}
  </div>
  )
}

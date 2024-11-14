import React from 'react';
import banner from '../../assets/Image/Rectangle 1 - Copy.jpg';

const Banner = () => {
  return (
    <div
      className="w-full h-[500px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Optional content inside the banner */}
      <div className="flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl  lg:w-1/3 text-center font-bold">Discover an exceptional cooking class tailored for you!</h1>
        <p className='mt-2'>"Find a personalized cooking class that suits your needs and interests!"</p>
       <div className='space-x-6 mt-5'>
       <button className="btn  bg-[#0BE58A] border-none rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
        <button className="btn btn-xs sm:btn-sm rounded-full glass text-white md:btn-md lg:btn-lg">Responsive</button>
       </div>
        <p></p>
      </div>
    </div>
  );
};

export default Banner;

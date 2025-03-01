import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoColorWandSharp } from "react-icons/io5";
import { Hero } from '../assets';
const HeroSec = () => {
  return (
    <div className='relative py-10'>
      <div className="py-28 flex gap-6 items-center flex-col justify-center">
          <div className="">
          <h1>
              <span className='text-6xl opacity-60'>
              Future of
              </span>
              <span className='text-6xl opacity-80'>
                {} DevOps is  
              </span>
              <span className='text-[#D3FFCA] italic text-5xl'>
                {}  Green
              </span>
             </h1>
          </div>
          <div className="">
              <h3 className='opacity-55  leading-7'>
              AI-powered analytics to transform your GitHub pipelines— <br/>
        track inefficiencies, reduce emissions, and deploy with precision
              </h3>
          </div>
          <div className="">
              <div className="flex gap-4">
                  <button className="border-white border flex items-center gap-2 text-white  p-3 rounded-4xl">
                      <FaGithub />
                  Connect with Github
                  </button>
                  <button className="bg-green-200 flex items-center gap-2 font-bold text-black  p-3 px-4 rounded-4xl">
                    <IoColorWandSharp />
                  Optimize Code
              </button>
              </div>
      </div>
      <img className='absolute top-0' src={Hero} />
      </div>
    </div>
  )
}

export default HeroSec
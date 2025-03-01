import React from 'react'
import { Card1, Card2, Card3 } from '../assets'
const Get = () => {
  return (
      <div className='pb-40'>
          <div className="text-center">
          <button className='bg-[#D3FFCA1A] text-center px-10 py-4 rounded-4xl'>
         What you’ll get
          </button>
          </div>
          <h3 className='text-5xl text-center px-52 py-4  opacity-70'>
              © 2025 OPT/CI. All Rights Reserved
          </h3>
          <div className="flex gap-6 justify-center py-4">
              <div className='border max-w-sm rounded-xl px-4 py-6 border-gray-500 flex flex-col'>
                  <img src={Card1} />
                  <div>
                      <h1 className='text-2xl opacity-70'>
                          Reduce CO2 emissions
                      </h1>
                      <p className='font-light opacity-40'>
                          Optimize your workflows to  lower your carbon footprint—because clean code should mean a cleaner planet.
                      </p>
                  </div>
              </div>
               <div className='border max-w-sm rounded-xl px-4 py-6 border-gray-500 flex flex-col'>
                  <img src={Card2} />
                  <div>
                      <h1 className='text-2xl opacity-70'>
                         Code edit history
                          
                      </h1>
                      <p className='font-light opacity-40'>
                         Track, analyze, and refine your development history with AI-driven insights for smarter, more efficient coding decisions.
                      </p>
                  </div>
              </div>
               <div className='border max-w-sm rounded-xl px-4 py-6 border-gray-500 flex flex-col'>
                  <img src={Card3} />
                  <div>
                      <h1 className='text-2xl opacity-70'>
                          CPU/GPU usage
                      </h1>
                      <p className='font-light opacity-40'>
                          Improve hardware efficiency to prevent unnecessary strain, and run your workflows smoothly.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Get
import React from 'react'

// import services data
import { services } from '../data'

const Services = () => {
  return (
    <section id='services' className='section bg-gray-50'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-red-600  text-semi-bold text-center text-3xl py-6 md:py-0 md:mt-0 font-bold mb-4'>
            What We do for our student
          </h2>
          <p className='subtitle text-black text-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          {services.map((service, index) => {
            const { icon, name, description } = service
            return (
              <div className='bg-violet-900 p-6 rounded-2xl' key={index}>
                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                  {icon}
                </div>
                <h4 className='text-xl font-medium mb-2'>{name}</h4>
                <p className='text-white text-lg'>{description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

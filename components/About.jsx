import React from 'react'
import Image from 'next/image'
import { urlFor } from '../lib/client'

// import img
// import AboutImage from '../assets/img/LoctechBuilding.jpg'

const About = ({ AboutData }) => {
  const src = urlFor(AboutData.image).url()
  console.log(AboutData)
  return (
    <section className='section bg-gray-200' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <Image
            loader={() => src}
            src={src}
            alt='Image'
            width={600}
            height={500}
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 text-red-600 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                {AboutData.largeText}
              </h2>
              <p className='mb-4 text-violet-700 md:text-2xl'>
                {AboutData.introText}
              </p>
              <hr className='mb-8  divide-black' />
              <p className='mb-8 text-black md:text-xl'>{AboutData.desc}</p>
            </div>
            <button className='btn btn-md bg-purple-800 hover:bg-secondary-hover transition-all text-white'>
              {AboutData.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

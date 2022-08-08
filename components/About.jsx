import React from 'react'
import Image from 'next/image'
import { urlFor } from '../lib/client'

// import img
import AboutImage from '../assets/img/LoctechBuilding.jpg'

const About = ({ AboutData }) => {
  console.log(AboutData)
  return (
    <section className='section bg-[#2E0249]' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          {AboutData.map((about) => {
            const src = urlFor(about.image).url()
            return (
              <div className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'>
                <Image
                  loader={() => src}
                  src={src}
                  alt=''
                  width={600}
                  height={500}
                />
              </div>
            )
          })}

          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                {AboutData.map((about) => {
                  return <div>{about.largeText}</div>
                })}
              </h2>
              <p className='mb-4 text-white'>
                {AboutData.map((about) => {
                  return <div>{about.introText}</div>
                })}
              </p>
              <hr className='mb-8  divide-white' />
              <p className='mb-8 text-white'>
                {AboutData.map((about) => {
                  return <div>{about.desc}</div>
                })}
              </p>
            </div>
            <button className='btn btn-md bg-purple-800 hover:bg-secondary-hover transition-all text-white'>
              {AboutData.map((about) => {
                return <div>{about.buttonText}</div>
              })}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

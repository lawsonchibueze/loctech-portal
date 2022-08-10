import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/client'

// import woman image
import WomanImg from '../assets/img/banner-woman2.webp'

const Hero = ({ HeroData }) => {
  const src = urlFor(HeroData.image).url()
  console.log(HeroData)
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-[#2E0249] lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-white text-md mb-[22px] '>
              {HeroData.introText} 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              <div>
                {HeroData.largeText} <br />
              </div>

              <div className='text-pink-600'>{HeroData.largeText2}</div>
            </h1>
            <p className='text-white pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              {HeroData.desc}{' '}
            </p>
            <div>
              <Link href='/#'>
                <button className='btn btn-md bg-purple-800 hover:bg-secondary-hover md:btn-lg transition-all'>
                  {HeroData.buttonText}
                </button>
              </Link>
            </div>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <Image
              loader={() => src}
              src={src}
              alt='Hero Image'
              height={500}
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

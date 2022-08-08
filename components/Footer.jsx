import React from 'react'
import Image from 'next/image'

// import social data
import { social } from '../data'

// import logo
import Logo from '../assets/img/logo4.png'

const Footer = () => {
  return (
    <footer className='bg-purple-800 py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item
              return (
                <a className='text-white text-base' href={href} key={index}>
                  {icon}
                </a>
              )
            })}
          </div>
          <div>
            <Image src={Logo} alt='' />
          </div>
          <p className=' opacity-80 text-[15px] text-white'>
            &copy; 2022 Loctech Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

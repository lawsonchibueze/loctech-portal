import React, { useState, useEffect } from 'react'
import Logo from '../assets/img/logo1.png'
import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })
  return (
    <header
      className={`${
        bg ? 'bg-gray-100 h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-black z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <Link href='/'>
          <a href=''>
            <Image src={Logo} alt='' width={100} height={50} />
          </a>
        </Link>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* Socials */}
        <div className='hidden lg:block bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'>
          <Link href='/'>
            <a href=''>Sign up</a>
          </Link>
          {/* <Socials /> */}
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header

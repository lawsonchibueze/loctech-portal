import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ item }) => {
  return (
    <section>
      <div className='flex flex-col items-center text-center'>
        <div className='p-2 bg-purple-600 rounded-md' key={item.id}>
          <Image src={item.image} className='h-52 w-full object-cover' />
          <div className='text-center mt-2 mb-2'>
            <strong className='font-bold text-white'>{item.category}</strong>
            <p className='text-white'>
              A plain white t-shirt perfect for summer
            </p>
            <p className='text-lg font-bold italic mt-2 mb-2 text-white'>
              from $9.99
            </p>
            <button className='hover:bg-stone-600 transition-all hover:scale-110 rounded-md p-2 bg-stone-900 text-white font-bold text-lg cursor-pointer'>
              View item
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project

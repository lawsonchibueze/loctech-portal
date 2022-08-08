import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ item }) => {
  return (
    <div key={item.id} className='flex flex-col items-center text-center '>
      <div className='mb-8'>
        <Image className='rounded-2xl' src={item.image} alt='' />
      </div>
      <div className='border-white border-opacity-50 z-50'>
        <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
        <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
        <p className='text-white max-w-md text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
          obcaecati ipsam.Lorem ipsum dolor sit amet, consectetur adipisicing
          elit veniam obcaecati ipsam.
        </p>
        <div className='flex  flex-wrap tracking-wide items-center gap-64 md:gap-60 pt-4 border-pink-500 text-pink-400'>
          <Link href='/'>
            <p className='  text-left'>learn more</p>
          </Link>

          <Link href='/#'>
            <button className='text-white hover:bg-secondary-hover m-2'>
              N5000
            </button>
          </Link>
        </div>
      </div>
    </div>
    // <section classname='text-gray-600 body-font'>
    //   <div classname='container px-5 py-24 mx-auto'>
    //     <div classname='flex flex-wrap -m-4'>
    //       <div classname='p-4 md:w-1/3'>
    //         <div classname='h-full border-2 border-white  rounded-lg overflow-hidden'>
    //           <img
    //             classname='lg:h-48 md:h-36 w-full object-cover object-center'
    //             src='https://dummyimage.com/720x400'
    //             alt='blog'
    //             width={720}
    //             height={400}
    //           />
    //           <div classname='p-6'>
    //             <h2 classname='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
    //               CATEGORY
    //             </h2>
    //             <h1 classname='title-font text-lg font-medium text-gray-900 mb-3'>
    //               The Catalyzer
    //             </h1>
    //             <p classname='leading-relaxed mb-3'>
    //               Photo booth fam kinfolk cold-pressed sriracha leggings
    //               jianbing microdosing tousled waistcoat.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Project

import React from 'react'
import Image from 'next/image'
import { urlFor } from '../lib/client'
// import { urlFor } from '../lib/client'

// import brands data
// import { brands } from '../data'

const Brands = ({ BrandData }) => {
  // const src = urlFor(BrandData.image).url()
  console.log(BrandData)
  return (
    <section className='min-h-[146px] bg-purple-800 flex items-center'>
      <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
        {BrandData.map((brand) => {
          const src = urlFor(brand.image).url()

          return (
            <div
              key={brand._id}
              style={{ position: 'relative', height: '50px', width: '150px' }}
            >
              <Image
                className='ImageWrapper'
                loader={() => src}
                src={src}
                alt='Hero Image'
                objectFit='cover'
                layout='fill'
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Brands

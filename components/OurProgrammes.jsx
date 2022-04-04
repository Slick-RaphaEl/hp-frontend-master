import Image from 'next/image'
import React from 'react'
import BtnFull from './BtnFull'

const OurProgrammes = ({image, heading, paragraph}) => {
  return (
    <div
        className='w-[90%] md:w-[80%] mx-auto flex flex-row my-10'
    >
        <div
            className="w-[60%] md:w-[50%] mx-auto"
        >
            <Image
                src={image}
                alt='programme'
                width={700}
                height={500}
                className="rounded-md"
            />
        </div>
        <div
            className="flex flex-col px-10 w-[40%] md:w-[50%] mx-auto"
        >
            <h2 
                className="text-2xl font-semibold uppercase text-center mb-5 text-green-500"
            >
                {heading}
            </h2>
            <p
                className="text-base"
            >
                {paragraph}
            </p>
            <BtnFull
                action={'Read More'}
                onClick={() => {}}
            />
        </div>

    </div>
  )
}

export default OurProgrammes
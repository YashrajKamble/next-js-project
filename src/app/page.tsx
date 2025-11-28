import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 gap-5 sm:p-20">
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>
          Welcome to contact manager
        </h1>
        <p className='mt-2 text-lg font-bold'>
          manage your contact easily and efficiently
        </p>
      </div>
      <Image
        src="/contact.jpeg"
        alt="contact manager"
        width={300}
        height={300}
        className="rounded-lg 
           shadow-lg justify-center items-center"
      />

      <div className='text-center'>
        <p className='mt-2 text-lg font-bold'>
          start managing your contacts today!
        </p>
      </div>

    </div>
  )
}

export default Home

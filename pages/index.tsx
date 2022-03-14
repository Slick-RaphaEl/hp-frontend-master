import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from '../components/Header'
import {GiCardPickup, GiReceiveMoney} from 'react-icons/gi'
import {BsCheckLg, BsPencilSquare} from 'react-icons/bs'
import Footer from '../components/Footer';


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div
        className='w-full h-[60vh]'
      >
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={true}
          stopOnHover={true}
          swipeable={true}
          centerMode={true}
          centerSlidePercentage={50}
          className='w-full h-full'
        >
          <div className='mx-10'>
            <Image
              src={require('../images/hero_1.jpeg')}
              alt="hero slider"
              width={800}
              height={500}
            />
          </div>
          <div className='mx-10'>
            <Image
              src={require('../images/hero_2.jpeg')}
              alt="hero slider"
              width={800}
              height={500}
            />
          </div>
          <div className='mx-10'>
            <Image
              src={require('../images/hero_3.jpeg')}
              alt="hero slider"
              width={800}
              height={500}
            />
          </div>
        </Carousel>

      </div>
      <div
        className='flex flex-col justify-center items-center '
      >
        <h2
          className='font-bold text-2xl text-center font-serif mb-5'
        >
          Dont have enough capital for your business?
        </h2>
        <p
          className='text-center text-base'
        >
          <span
            className='font-bold block'
          >
            Dont worry, we got you covered
          </span>
          Start a business with as low as zero capital.<br/>
          Apply for any of our offers and get your business up and running in no time.
        </p>
        <div
          className='flex flex-col h-[50vh] w-[60%] mx-auto justify-center items-center mt-10 relative bg-gray-300'
        >
          <button
            className='bg-[#16FF02] hover:bg-[#16FF02] text-white font-bold py-2 px-4 rounded-full'
          >
            Apply Now
          </button>
        </div>
      </div>
      <div
        className='flex flex-col my-20 w-[80%] mx-auto justify-center items-center'
      >
        <div
          className='flex flex-col items-center md:flex-row px-10'
        >
          <div
            className='flex flex-col w-[50%]'
          >
            <h2
              className='font-bold text-2xl text-center font-serif mb-5'
            >
              Get going in 4 easy steps
            </h2>
            <div
              className='flex flex-col px-5 text-2xl w-[70%] mx-auto'
            >
              <div
                className='flex flex-row justify-start mb-6'
              >
                <GiCardPickup 
                  className='text-4xl text-green-500 mr-2'
                />
                <span>
                  Pick a program
                </span>
              </div>
              <div
                className='flex flex-row justify-start mb-6'
              >
                <BsPencilSquare 
                  className='text-4xl text-green-500 mr-2'
                />
                <span>
                  Apply
                </span>
              </div>
              <div
                className='flex flex-row justify-start mb-6'
              >
                <BsCheckLg
                  className='text-4xl text-green-500 mr-2'
                />
                <span>
                  Get approved
                </span>
              </div>
              <div
                className='flex flex-row justify-start mb-6'
              >
                <GiReceiveMoney
                  className='text-4xl text-green-500 mr-2'
                />
                <span>
                  Start earning
                </span>
              </div>
            </div>
          </div>
          <div
            className='h-[40vh] w-[50%]'
          >
            <Image
              src={require('../images/undraw_mobile_payments_re_7udl.svg')}
              alt='apply'
             
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home

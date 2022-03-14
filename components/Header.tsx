import { useState } from "react";
import {AiOutlineClose} from 'react-icons/ai'
import { HiMenu} from 'react-icons/hi'

const Header = () => {
    const [mobileNav, setmobileNav] = useState<boolean>(false);
    const toggleMobileNav = () => {
        setmobileNav(!mobileNav);
    }

  return (
    <div
        className="flex flex-row justify-between h-16 bg-gray-300 p-4"
    >
        <a
            className="text-gray-900 font-bold text-xl flex flex-row"
        >
            <span
                className="text-green-500 pr-2"
            >
                Hire
            </span>
            Purchase
        </a>
        <div
            className="hidden md:flex flex-row text-gray-600 font-semibold text-base"
        >
            <a
                className="pr-4"
            >
                HOME
            </a>
            <a
                className="pr-4"
            >
                PROFILE
            </a>
            <a
                className="pr-4"
            >
                CONTACT US
            </a>
            <a
                className="pr-4"
            >
                APPLY
            </a>
            <a
                className="pr-4"
            >
                REVIEWS
            </a>
        </div>
        <HiMenu 
            className='text-3xl md:hidden ml-5 hover:text-white'
            onClick={toggleMobileNav}
        />
        {
            mobileNav && (
                <div
                    className="flex flex-col h-screen w-[55%] fixed right-0 top-0 bottom-0 bg-black z-50 text-yellow-800 pt-10 text-lg md:text-xl px-10"
                >
                    <AiOutlineClose
                        className='absolute top-0 right-0 mr-5 mt-5 cursor-pointer text-xl text-yellow-800 hover:text-white'
                        onClick={toggleMobileNav}
                    />
                    <a
                        href='/'
                        className='flex justify-center mt-10 mb-5'
                    >
                        HOME
                    </a>
                    <a
                        href='/'
                        className='flex justify-center mb-5'
                    >
                        PROFILE
                    </a>
                    <a
                        href='/'
                        className='flex justify-center mb-5'
                    >
                        CONTACT US
                    </a>
                    <a
                        href='/'
                        className='flex justify-center mb-5'
                    >
                        APPLY
                    </a>
                    <a
                        href='/'
                        className='flex justify-center mb-5'
                    >
                        REVIEWS
                    </a>
                </div>
            )
        }
    </div>
  )
}

export default Header
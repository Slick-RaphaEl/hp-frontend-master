import {
    FaPhoneAlt,
    FaHome,
    FaRegNewspaper
} from 'react-icons/fa'
import {FiPhone} from 'react-icons/fi'
import {
    HiIdentification,
    HiOutlineLocationMarker
} from 'react-icons/hi'
import { GiFullFolder} from 'react-icons/gi'

const Footer = () => {
  return (
    <div
        className='flex flex-row bg-[#C4C4C4] p-10'
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
            className='flex flex-col md:flex-row w-[60%] md:w-full justify-evenly text-center px-4 md:px-4 py-2 text-sm text-green-600'
        >
            <a
                    href='/'
                    className='flex flex-row justify-end pb-1 text-left pl-5'
                >
                    <div
                        className="flex flex-row place-content-center hover:text-yellow-800 "
                    >
                        <FaHome 
                            className='mt-1 mr-1'
                        />
                        <span
                            className='font-semibold'
                        >
                            HOME
                        </span>
                    </div>
                </a>
                <a
                    href='/about'
                    className='flex flex-row justify-end pb-1 text-left pl-5'
                >
                    <div
                        className="flex flex-row hover:text-yellow-800 "
                    >
                        <HiIdentification 
                            className='mt-1 mr-1'
                        />
                        <span
                            className='font-semibold'
                        >
                            ABOUT
                        </span>
                    </div>
                </a>
                <a
                    href='/activities'
                    className='flex flex-row justify-end pb-1 text-left pl-5'
                >
                    <div
                        className="flex flex-row place-content-center hover:text-yellow-800 "
                    >
                        <GiFullFolder 
                            className='mt-1 mr-1'
                        />
                        <span
                            className='font-semibold'
                        >
                            ACTIVITES
                        </span>
                    </div>
                </a>
                <a
                    href='/contactUs'
                    className='flex flex-row justify-end pb-1 text-left pl-5'
                >
                    <div
                        className="flex flex-row place-content-center hover:text-yellow-800 "
                    >
                        <FaPhoneAlt 
                            className='mt-1 mr-1'
                        />
                        <span
                            className='font-semibold'
                        >
                            CONTACT 
                        </span>
                    </div>
                </a>
                <a
                    href='/affiliates'
                    className='flex flex-row justify-end pb-1 text-left pl-5'
                >
                    <div
                        className="flex flex-row place-content-center hover:text-yellow-800 "
                    >
                        <FaRegNewspaper 
                            className='mt-1 mr-1'
                        />
                        <span
                            className='font-semibold'
                        >
                            AFFILIATES
                        </span>
                    </div>
                </a>
        </div>

    </div>
  )
}

export default Footer
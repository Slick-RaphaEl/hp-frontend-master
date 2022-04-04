import React from 'react'

const BtnFull = ({action, onClick}) => {
  return (
    <button
        onClick={onClick}
        className='bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded uppercase w-[30%] my-10 mx-auto'
    >
        {action}
    </button>
  )
}

export default BtnFull
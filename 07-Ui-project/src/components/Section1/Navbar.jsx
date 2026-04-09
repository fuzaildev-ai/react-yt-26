import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 py-8 px-6 lg:px-18'>
            <h4 className='bg-black text-white text-center sm:text-left uppercase px-6 py-2 rounded-full'>Traget Audience</h4>
            <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm'>
                digital Banking platform
            </button>
        </div>
    )
}

export default Navbar
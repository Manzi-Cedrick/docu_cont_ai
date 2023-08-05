import React from 'react'

const QuoteSlider = () => {
    return (
        <div className='max-w-[30vw] relative bg-primary px-10 h-screen hidden lg:flex'>
            <div className='bg-white opacity-10 absolute rounded-full top-0 -right-16 h-44 w-44'></div>
            <div className='flex flex-col justify-center items-center gap-6'>
                <p className='text-white py-10'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                </p>
                <div className='items-center text-center flex-col flex gap-4'>
                    <img src='/assets/logo-algebra.svg' className='rounded-full h-24 w-24 bg-white object-contain'/>
                    <span className='font-bold text-white text-base'>Manzi Cedrick
                        <span className='text-[#ffffff8d] text-[12px] font-semibold'>,Managing Director at FoodBundles</span>
                    </span>
                </div>
            </div>
            <div className='bg-white opacity-10 absolute rounded-full bottom-0 -left-16 h-44 w-44'></div>
        </div>
    )
}

export default QuoteSlider
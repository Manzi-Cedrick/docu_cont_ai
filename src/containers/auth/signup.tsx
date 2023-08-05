import React from 'react'
import QuoteSlider from '../../components/ui/QuoteSlider'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='flex flex-row items-start h-screen w-full bg-white'>
            <QuoteSlider/>
            <div className='flex flex-col items-center relative p-6 md:p-20 bg-inherit w-full h-full'>
                <div>
                    <img src='/assets/logo-algebra.svg' className='rounded-full bg-white'/>
                </div>
                <div className='md:w-[30vw]'>
                    <h1 className='lg:text-4xl text-2xl font-normal text-slate-600'>Try Alegra 15 days for free!</h1>
                    <form className='flex flex-col gap-4 py-10'>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <input type='text' id='username' placeholder='Username' className='border focus:outline-primary border-slate-200 rounded-md p-4 w-full'/>
                            </div>
                            <div>
                                <input type='email' id='email' placeholder='Email' className='border focus:outline-primary border-slate-200 rounded-md p-4 w-full'/>
                            </div>
                            <div>
                                <input type='password' id='password' placeholder='Password' className='border focus:outline-primary border-slate-200 rounded-md p-4 w-full'/>
                            </div>
                        </div>
                        <div className='pt-10'>
                            <button className='w-full py-5 text-white bg-primary hover:bg-[#73bcb3] rounded-md font-semibold uppercase text-sm'>Create Account</button>
                        </div>
                    </form>
                    <div className='items-center flex flex-col'>
                        <div className='py-4'>
                            <button className='w-full py-3 text-black border-2 border-bdr hover:bg-[#e4e4e43e] rounded-xl font-semibold uppercase text-sm'>Signup with Google</button>
                            <span className='font-light text-sm text-center'>Start your free trial with credit card</span>
                        </div>
                        <span className='text-center text-sm absolute bottom-4'>Already have an account ?
                            <span className='text-primary'>
                                <Link to={'/auth/login'}>Login here</Link>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
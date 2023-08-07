import { CheckBadgeIcon } from '@heroicons/react/20/solid'
import React from 'react'

const AddEventCalendar = () => {
    return (
        <div className='bg-white shadow-xl p-8'>
            <div>
                <h2 className='font-medium text-lg text-slate-800'>Add Event</h2>
                <form className='pt-6'>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="date" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required/>
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date</label>
                    </div>
                    <div className='flex flex-row items-center gap-4'>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required/>
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Time</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="time" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required/>
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Time</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required/>
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <textarea className="block h-32 resize-none px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" "></textarea>
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Note</label>
                    </div>
                    <div className='w-full py-4'>
                        <button className='flex w-full h-16 rounded-md font-semibold justify-center flex-row items-center gap-6 bg-primary text-white hover:bg-[#68e5d6] transition-all duration-400 hover:cursor-pointer'>
                            <span>{<CheckBadgeIcon className='text-white h-8 w-8'/>}</span>
                            Add Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEventCalendar

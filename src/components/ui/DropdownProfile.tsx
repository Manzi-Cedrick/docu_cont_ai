import React from 'react'
import { FaUser } from 'react-icons/fa'

const DropdownProfile = () => {
    return (
        <div>
            <div className='flex flex-row items-center gap-4 bg-white p-4'>
                <div className='w-10 h-10 flex items-center flex-col justify-center rounded-full bg-white border-2 border-bdr'>
                    <span className='text-sm text-slate-800'><FaUser/></span>
                </div>
                <div>
                    <span className='text-base font-semibold'>Manzi cedrick</span>
                    <p className='text-slate-400 text-[10px]'>Admin</p>
                </div>
            </div>
        </div>
    )
}

export default DropdownProfile

import React from 'react'
import DropdownNotification from '../ui/DropdownNotifications'
import DropdownProfile from '../ui/DropdownProfile'

const Header = () => {
    return (
        <div className='h-16 bg-slate-50 w-full flex flex-row items-center justify-between px-10'>
            <div className='w-[30vw]'>
                <input type='text' id='search' placeholder='Search' className='border focus:outline-primary border-slate-200 rounded-md py-2 px-4 w-full'/>
            </div>
            <div className='flex flex-row gap-6 items-center'>
                <DropdownNotification/>
                <DropdownProfile/>
            </div>
        </div>
    )
}

export default Header

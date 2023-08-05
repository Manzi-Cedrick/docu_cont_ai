import React from 'react'
import {Link} from 'react-router-dom'
import {sideBarLinks} from '../../utils/contants'

const Sidebar = () => {
    return (
        <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
            <Link to="#">
                <img className="w-full h-6 sm:h-7" src="/assets/logo-algebra.svg" alt=""/>
            </Link>
            <div className="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    <div className='flex flex-col gap-4'>
                    {sideBarLinks.slice(0,5).map((link) => (
                        <Link className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md " to={link.path}>
                            {link.icon}
                            <span className="mx-4 font-medium">{link.name}</span>
                        </Link>
                    ))}
                    </div>
                    <hr className="my-6 border-gray-200 "/>
                    <div className='flex flex-col gap-4'>
                    {sideBarLinks.slice(5).map((link) => (
                        <Link className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md " to={link.path}>
                            {link.icon}
                            <span className="mx-4 font-medium">{link.name}</span>
                        </Link>
                    ))}
                    </div>
                </nav>
                <a href="#" className="flex items-center px-4 -mx-2">
                    <img className="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar"/>
                    <span className="mx-2 font-medium text-gray-800 ">John Doe</span>
                </a>
            </div>
        </aside>
    )
}

export default Sidebar

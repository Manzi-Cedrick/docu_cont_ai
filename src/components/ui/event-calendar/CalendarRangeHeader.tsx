import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'

const CalendarRangeHeader = () => {
    return (
        <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300" aria-hidden="true"/>
            <button type="button" className="flex items-center justify-center rounded-l-md py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50">
                <span className="sr-only">Previous week</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true"/>
            </button>
            <button type="button" className="hidden px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block">
                Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"/>
            <button type="button" className="flex items-center justify-center rounded-r-md py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50">
                <span className="sr-only">Next week</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true"/>
            </button>
        </div>
    )
}

export default CalendarRangeHeader

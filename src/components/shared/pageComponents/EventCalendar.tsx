import React from 'react'
import CalendarRangeHeader from '../../ui/event-calendar/CalendarRangeHeader'
import CalendarPeriodRange from '../../ui/event-calendar/CalendarPeriodRange'
import CalendarOpenRange from '../../ui/event-calendar/CalendarOpenRange'
import CalendarEventZone from '../../ui/event-calendar/CalendarEventZone'

const EventCalendar = ({showAddEvent, setShowAddEvent} : {
    showAddEvent: boolean,
    setShowAddEvent: React.Dispatch < React.SetStateAction < boolean >>
}) => {
    return (
        <div className="flex bg-white shadow-xl w-full h-full flex-col">
            <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
                <h1 className="text-base font-semibold leading-6 text-gray-900">
                    <time dateTime="2022-01">January 2022</time>
                </h1>
                <div className="flex items-center">
                    <CalendarRangeHeader/>
                    <CalendarPeriodRange/>
                    <div className="ml-6 h-6 w-px bg-gray-300"/>
                    <button onClick={
                            () => setShowAddEvent((prev)=> !prev)
                        }
                        type="button"
                        className="ml-6 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {showAddEvent ? 'Close' : 'Add Event'}
                    </button>
                </div>
                <CalendarOpenRange/>
            </header>
            <CalendarEventZone/>
        </div>
    )
}

export default EventCalendar

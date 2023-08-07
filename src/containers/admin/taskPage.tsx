import React from 'react'
import PageHeader from '../../components/shared/pageComponents/PageHeader'
import AddEventCalendar from '../../components/shared/pageComponents/AddEventCalendar'
import EventCalendar from '../../components/shared/pageComponents/EventCalendar'

const TaskPage = () => {
    const [showAddEvent, setShowAddEvent] = React.useState(false)
    return (
        <div>
            <PageHeader header='Task' subheader='All data containing the task of the admin'/>
            <div className={
                `${
                    showAddEvent ? 'flex' : ''
                } flex-row gap-6 py-5`
            }>
                <div className={`${showAddEvent ? 'min-w-[50vw]': 'w-full'}`}>
                    <EventCalendar showAddEvent={showAddEvent}
                        setShowAddEvent={setShowAddEvent}/>
                </div>
                <div className='w-full'>
                    <AddEventCalendar/>
                </div>
            </div>
        </div>
    )
}

export default TaskPage

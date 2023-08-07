import React from 'react'
import PageHeader from '../../components/pageComponents/PageHeader'
import EventCalendar from '../../components/pageComponents/EventCalendar'
import AddEventCalendar from '../../components/pageComponents/AddEventCalendar'

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
                <div className={`${showAddEvent ? 'block' : ' hidden'} w-full`}>
                    <AddEventCalendar/>
                </div>
            </div>
        </div>
    )
}

export default TaskPage

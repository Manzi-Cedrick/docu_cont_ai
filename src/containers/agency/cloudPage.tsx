import React from 'react'
import PageHeader from '../../components/shared/pageComponents/PageHeader'
import ReportTable from '../../components/shared/pageComponents/ReportTable'

const CloudPage = () => {
    return (
        <div>
            <PageHeader header='Cloud' subheader='All data containing the cloud of the agency'/>
            <div className='py-10'>
                <ReportTable/>
            </div>
        </div>
    )
}

export default CloudPage

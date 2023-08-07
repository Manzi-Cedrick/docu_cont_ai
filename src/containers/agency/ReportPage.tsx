import React from 'react'
import PageHeader from '../../components/shared/pageComponents/PageHeader'
import ReportTable from '../../components/shared/pageComponents/ReportTable'

const ReportPage = () => {
    return (
        <div>
            <PageHeader header='Report' subheader='All data containing the report of the agency'/>
            <div className='py-10'>
                <ReportTable/>
            </div>
        </div>
    )
}

export default ReportPage

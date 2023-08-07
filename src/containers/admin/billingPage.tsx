import React from 'react'
import UsageChartGraph from '../../components/charts/UsageChartGraph'
import ProfitChartGraph from '../../components/charts/ProfitChartGraph'
import CostGraph from '../../components/charts/CostBasedGraph'
import PageHeader from '../../components/pageComponents/PageHeader'
import AgencyAdminTable from '../../components/pageComponents/AgencyAdminTable'

const BillingPage = () => {
    return (
        <div>
            <PageHeader header='Billing' subheader='All data containing the agency clients'/>
            <div className='flex flex-row gap-4 py-10 items-center'>
                <div className='w-[50vw] h-[40vh]'>
                    <UsageChartGraph/>
                </div>
                <div className='w-[30vw] h-[40vh]'>
                    <ProfitChartGraph/>
                </div>
            </div>
            <div>
                <h2 className='font-medium text-base'>Current Commercial Outputs</h2>
                <p className='font-normal text-slate-500 text-sm'>All data containing the agency clients</p>
            </div>
            <div className='flex flex-row gap-4 py-10'>
                <div className='w-[50vw] h-[40vh]'>
                    <AgencyAdminTable/>
                </div>
                <div className='w-[30vw] h-[30vh]'>
                    <CostGraph/>
                </div>
            </div>
        </div>
    )
}

export default BillingPage

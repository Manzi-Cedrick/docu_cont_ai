import React from 'react'
import PageHeader from '../../components/shared/pageComponents/PageHeader'
import UsageChartGraph from '../../components/shared/charts/UsageChartGraph'
import ProfitChartGraph from '../../components/shared/charts/ProfitChartGraph'
import CostBasedGraph from '../../components/shared/charts/CostBasedGraph'
import CostGraph from '../../components/shared/charts/CostBasedGraph'
import AgencyAdminTable from '../../components/shared/pageComponents/AgencyAdminTable'

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

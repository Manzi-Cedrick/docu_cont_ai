import React from 'react'
import { optionCards } from '../../utils/contants'
import AgencyAdminTable from '../../components/shared/pageComponents/AgencyAdminTable'

const Dashboard = () => {
    return (
        <div>
            <div>
                <h1 className='font-semibold text-xl'>Overview</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 place-content-stretch lg:grid-cols-4 gap-6 py-6'>
                {optionCards.map((card, index) => (
                  <div key={index} className='bg-white rounded-lg flex flex-col p-5 border-2 border-primary border-solid'>
                    <div className='flex gap-4 place-items-center pb-4'>
                        <div className='p-5 text-primary border-2 border-primary border-solid rounded-full text-linearG'>
                            {card.icon}
                        </div>
                        <div>
                            <h1 className='text-black font-bold'>{card.data}</h1>
                            <p className='text-sm text-slate-500'>No of {card.title}</p>
                        </div>
                    </div>
                    <div className='border-t-2 border-[#00000012] border-solid flex '>
                        <div className='border-r-2 w-1/2 flex flex-col py-2 border-[#00000012] border-solid place-items-center'>
                            <h1 className='text-black font-bold text-sm'>
                                <span className='text-primary'>+</span>{card.week_info}%</h1>
                            <p className='text-[10px] text-slate-500'>Last Week</p>
                        </div>
                        <div className=' w-1/2 flex flex-col py-2 place-items-center'>
                            <h1 className='text-black font-bold text-sm'>
                                <span className='text-primary'>+</span>{card.month_info}%</h1>
                            <p className='text-[10px] text-slate-500'>Last Month</p>
                        </div>
                    </div>
                </div>
                  ))}
            </div>
            <div>
                <h2 className='font-medium text-base'>Recent Statistics</h2>
                <p className='font-normal text-slate-500 text-sm'>All data containing the agency clients</p>
            </div>
            <div className='py-10'>
              <AgencyAdminTable/>
            </div>
        </div>
    )
}

export default Dashboard

import React from 'react'
import AgencyAdminTable from '../../components/shared/pageComponents/AgencyAdminTable'
import UserAdminTable from '../../components/shared/pageComponents/UserAdminTable'

const UserAgency = () => {
    return (
        <div>
            <div>
                <h1 className='font-semibold text-xl'>User Agency</h1>
                <p className='font-normal text-slate-500 text-sm'>All data containing the agency clients</p>
            </div>
            <div className='py-10'>
                <UserAdminTable/>
            </div>
        </div>
    )
}

export default UserAgency

import React from 'react'
import AgencyAdminTable from '../../components/shared/pageComponents/AgencyAdminTable'
import UserAdminTable from '../../components/shared/pageComponents/UserAdminTable'
import PageHeader from '../../components/shared/pageComponents/PageHeader'

const UserAgency = () => {
    return (
        <div>
            <PageHeader header='User Statistics' subheader='All data containing the user of the agency'/>
            <div className='py-10'>
                <UserAdminTable/>
            </div>
        </div>
    )
}

export default UserAgency

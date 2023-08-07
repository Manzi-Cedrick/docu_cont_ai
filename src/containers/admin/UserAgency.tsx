import React from 'react'
import PageHeader from '../../components/pageComponents/PageHeader'
import UserAdminTable from '../../components/pageComponents/UserAdminTable'

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

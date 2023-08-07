import React from 'react'
import PageHeader from '../../components/shared/pageComponents/PageHeader'
import UserAccountsTable from '../../components/shared/pageComponents/UserAccountsTable'

const UserAccounts = () => {
  return (
    <div>
        <PageHeader header='User Accounts' subheader='All data containing the user accounts of the agency'/>
        <div className='py-10'>
            <UserAccountsTable/>
        </div>
    </div>
  )
}

export default UserAccounts
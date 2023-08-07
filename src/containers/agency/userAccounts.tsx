import React from 'react'
import PageHeader from '../../components/pageComponents/PageHeader'
import UserAccountsTable from '../../components/pageComponents/UserAccountsTable'

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
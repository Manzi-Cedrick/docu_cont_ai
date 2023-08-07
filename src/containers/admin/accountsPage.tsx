import React from 'react'
import PageHeader from '../../components/pageComponents/PageHeader'
import SectionAccountSSettings from '../../components/pageComponents/SettingsAccountSection'
import SectionAccountProfile from '../../components/pageComponents/SettingsAccountProfile'

const AccountsPage = () => {
    return (
        <div>
            <PageHeader header='Accounts' subheader='All data containing the accounts of the admin'/>
            <div className='py-10'>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-8/12 px-4">
                        <SectionAccountSSettings/>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <SectionAccountProfile/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AccountsPage

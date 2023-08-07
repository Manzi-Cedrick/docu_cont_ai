import React from 'react'
import UpdatesSection from '../../components/shared/UpdatesSection'
import SectionAccountSSettings from '../../components/shared/pageComponents/SettingsAccountSection'
import SectionAccountProfile from '../../components/shared/pageComponents/SettingsAccountProfile'
import PageHeader from '../../components/shared/pageComponents/PageHeader'

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

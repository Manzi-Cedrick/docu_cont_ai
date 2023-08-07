import React from 'react'
import UpdatesSection from '../../components/shared/UpdatesSection'
import SectionAccountSSettings from '../../components/shared/pageComponents/SettingsAccountSection'
import SectionAccountProfile from '../../components/shared/pageComponents/SettingsAccountProfile'

const AccountsPage = () => {
    return (
        <div className="flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4">
                <SectionAccountSSettings/>
            </div>
            <div className="w-full lg:w-4/12 px-4">
                <SectionAccountProfile/>
            </div>
        </div>
    )
}

export default AccountsPage

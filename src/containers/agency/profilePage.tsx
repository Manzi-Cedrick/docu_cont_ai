import React from 'react'
import PageHeader from '../../components/pageComponents/PageHeader'
import SectionAccountProfile from '../../components/pageComponents/SettingsAccountProfile'
import SectionAccountSSettings from '../../components/pageComponents/SettingsAccountSection'

const ProfilePage = () => {
  return (
    <div>
        <PageHeader header='Profile' subheader='All data containing the profile of the agency'/>
        <div className='flex items-center gap-12 w-full rounded-md'>
            <SectionAccountProfile/>
            <SectionAccountSSettings />
        </div>
    </div>
  )
}

export default ProfilePage
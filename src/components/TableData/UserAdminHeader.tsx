import React from 'react'
import { SortableFilterIcon } from '../../icons'

const UserAdminHeader = () => {
    return (
        <thead className="bg-gray-100 ">
            <tr>
                <th scope="col" className="py-3.5 px-4 text-sm font-medium text-left rtl:text-right text-black">
                    <div className="flex items-center gap-x-3">
                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded-md"/>
                        <button className="flex items-center gap-x-2">
                            <span>ID</span>
                            <SortableFilterIcon/>
                        </button>
                    </div>
                </th>
                <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-black">
                    NAME
                </th>
                <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-black">
                    CIF/DNI
                </th>
                <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-black">
                    Annual Uploads Counter
                </th>
                <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-black">
                    Monthly Uploads Counter
                </th>
                <th scope="col" className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-black">
                    Client Profile
                </th>
            </tr>
        </thead>
    )
}

export default UserAdminHeader

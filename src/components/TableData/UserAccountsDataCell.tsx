import React from 'react'

const UserAccountsDataCell = ({data,status} : {
    data: any;
    status: string;
}) => {
    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded "/>
                    <span>#3066</span>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">Agency</td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">CIF/DNI1</td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">800</td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">15</td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                    <div>
                        <h2 className="text-sm font-medium text-gray-800  ">Arthur Melo</h2>
                        <p className="text-xs font-normal text-gray-600 ">authurmelo@example.com</p>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default UserAccountsDataCell

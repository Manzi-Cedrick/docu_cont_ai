import React from 'react'

const ReportTableDataCell = ({data, status} : {
    data: any;
    status: string;
}) => {
    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded "/>
                    <span>#0011</span>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">Agency 001</td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">CIF/DNI1</td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">800$</td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">15$</td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">815$</td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                <button className='bg-transparent text-primary text-[10px] border-2 border-primary rounded-lg p-2 px-6'>Download Pdf Format</button>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                <button className='bg-transparent text-blue-500 text-[10px] border-2 border-blue-500 rounded-lg p-2 px-6'>Download Excel Format</button>
            </td>
        </tr>
    )
}

export default ReportTableDataCell

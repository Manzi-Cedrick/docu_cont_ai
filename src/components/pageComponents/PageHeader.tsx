import React from 'react'

const PageHeader = ({header, subheader} : {
    header: string,
    subheader: string
}) => {
    return (
        <div>
            <h1 className='font-semibold text-xl'>{header}</h1>
            <p className='font-normal text-slate-500 text-sm'>{subheader}</p>
        </div>
    )
}

export default PageHeader

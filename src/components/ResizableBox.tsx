import React, {ReactElement} from 'react'

const ResizableBox = ({children, className} : {
    children: ReactElement,
    className?: string
}) => {
    return (
        <div style={
                {boxShadow: "0 30px 40px rgba(0,0,0,.1)"}
            }
            className={
                className + "flex resize flex-col items-center justify-center bg-white h-full rounded-md w-full "
        }>
            {children} </div>
    )
}

export default ResizableBox
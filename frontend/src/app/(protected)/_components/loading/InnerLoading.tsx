import { CircularProgress } from '@nextui-org/react'
import React from 'react'

interface Props {
    
}

const InnerLoading = ({ }) => {
    return (
        <div className='absoluate'>
            <CircularProgress size="sm" aria-label="Loading..." />

        </div>
    )
}

export default InnerLoading
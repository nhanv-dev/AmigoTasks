import { CircularProgress } from '@nextui-org/react'
import React from 'react'

interface Props {
    loading: boolean;
}

const InnerLoading = ({ loading }: Props) => {
    if (!loading) return null;

    return (
        <div className='w-full flex items-center justify-center py-[80px]'>
            <CircularProgress size="sm" aria-label="Loading..." />
        </div>
    )
}

export default InnerLoading
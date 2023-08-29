import React from 'react'

const Message = ({ visible, message }) => {

    if (visible) {
        return (
            <div className='w-full flex items-center text-lg justify-center py-[80px]'>
                {message}
            </div>
        )
    }
}

export default Message
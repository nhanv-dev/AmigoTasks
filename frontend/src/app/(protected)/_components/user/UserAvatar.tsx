import { Avatar, User } from '@nextui-org/react'
import React, { useState } from 'react'

type User = {
    fullName: string;
    userName: string;
    password?: string;
}

const UserAvatar = () => {
    const [user] = useState<User>({
        fullName: 'Thanh Nhân',
        userName: 'nhanv-dev',
    })

    return (
        <div className='flex items-center gap-2'>
            <Avatar size='sm' isBordered color="primary" src="https://th.bing.com/th/id/R.0f8e789e159dcc08df61455201923173?rik=CVA9QIZ5oJUTVA&pid=ImgRaw&r=0&sres=1&sresct=1" />
            <div>
                <p className='font-bold text-[0.87rem] text-text dark:text-dark-text transition-theme'>
                    {user.fullName}
                </p>
                <p className='font-semibold text-xs text-text-50 dark:text-dark-text-50 transition-theme'>
                    {user.userName}
                </p>
            </div>

        </div>
    )
}

export default UserAvatar
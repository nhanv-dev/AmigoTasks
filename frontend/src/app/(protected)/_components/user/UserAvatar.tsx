import { Avatar, Popover, PopoverContent, PopoverTrigger, User } from '@nextui-org/react'
import React, { useState } from 'react'
import UserCard from './UserCard';

type User = {
    fullName: string;
    userName: string;
    password?: string;
}

const UserAvatar = () => {
    const [user] = useState<User & any>({
        fullName: 'Thanh Nhân',
        userName: 'nhanv-dev',
        avatar: 'https://th.bing.com/th/id/OIP.Ojdx8R7IOIu8KGUad8YcfgHaHa?pid=ImgDet&rs=1',
    })

    return (
        <Popover showArrow placement="bottom">
            <PopoverTrigger>
                <User
                    as="button"
                    name={user.fullName}
                    description={user.userName}
                    className="transition-transform"
                    classNames={{
                        name: 'font-bold',
                        description: 'font-semibold'
                    }}
                    avatarProps={{ isBordered: true, color: "primary", size: 'sm', src: user.avatar }}
                />
            </PopoverTrigger>
            <PopoverContent className="p-1">
                <UserCard user={user} />
            </PopoverContent>
        </Popover>
    )
}

export default UserAvatar
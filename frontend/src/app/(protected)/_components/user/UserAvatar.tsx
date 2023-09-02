import { Avatar, Popover, PopoverContent, PopoverTrigger, User } from '@nextui-org/react'
import React, { useState } from 'react'
import UserCard from './UserCard';

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
        <Popover showArrow placement="bottom">
            <PopoverTrigger>
                <User
                    as="button"
                    name={user.fullName}
                    description={user.userName}

                    className="transition-transform"
                    avatarProps={{
                        size: 'sm',
                        src: "https://th.bing.com/th/id/R.0f8e789e159dcc08df61455201923173?rik=CVA9QIZ5oJUTVA&pid=ImgRaw&r=0&sres=1&sresct=1",
                    }}
                />
            </PopoverTrigger>
            <PopoverContent className="p-1">
                <UserCard user={user} />
            </PopoverContent>
        </Popover>
    )
}

export default UserAvatar
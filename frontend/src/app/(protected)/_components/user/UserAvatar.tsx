import { Avatar, Popover, PopoverContent, PopoverTrigger, User } from '@nextui-org/react'
import React, { useState } from 'react'
import UserCard from './UserCard';
import { useLayoutContext } from '@provider/LayoutProvider';

type User = {
    fullName: string;
    userName: string;
    password?: string;
}

const UserAvatar = () => {
    const { isOpenSidebar, setLayout, contentSidebar } = useLayoutContext();

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
                        base: 'h-[40px] px-2',
                        name: `${isOpenSidebar ? 'visible min-w-[120px]' : 'hidden min-w-[120px]'} text-start overflow-hidden font-bold`,
                        description: `${isOpenSidebar ? 'visible min-w-[120px]' : 'hidden min-w-[120px]'} text-start overflow-hidden font-semibold`,
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
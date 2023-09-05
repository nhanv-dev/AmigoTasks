import { Popover, PopoverContent, PopoverTrigger, User } from '@nextui-org/react';
import { useLayoutContext } from '@provider/LayoutProvider';
import { useSession } from 'next-auth/react';
import UserCard from './UserCard';
import { useAppSelector } from '@redux/hook';
import { AuthSelectors } from '@redux/features/auth/authSelectors';

type User = {
    fullName: string;
    userName: string;
    password?: string;
}
const DEFAULT_IMAGE = 'https://th.bing.com/th/id/OIP.Ojdx8R7IOIu8KGUad8YcfgHaHa?pid=ImgDet&rs=1';

const UserAvatar = () => {
    const user = useAppSelector(AuthSelectors.getUser());
    const { isOpenSidebar } = useLayoutContext();
    const session = useSession();


    return (
        <Popover showArrow placement="bottom">
            <PopoverTrigger>
                <User
                    as="button"
                    name={user?.name || ''}
                    description={user?.username || ''}
                    className="transition-transform"
                    classNames={{
                        base: 'h-[40px] px-2',
                        name: `${isOpenSidebar ? 'visible max-w-[130px]' : 'hidden max-w-[0px]'} transition-all transition-theme block line-clamp-1 text-ellipsis text-start overflow-hidden font-bold`,
                        description: `${isOpenSidebar ? 'visible max-w-[130px]' : 'hidden max-w-[0px]'} transition-all transition-theme block line-clamp-1 text-ellipsis text-start overflow-hidden font-semibold`,
                    }}
                    avatarProps={{ isBordered: true, color: "primary", size: 'sm', src: user?.avatar || DEFAULT_IMAGE }}
                />
            </PopoverTrigger>
            <PopoverContent className="p-1">
                <UserCard user={session.data?.user} />
            </PopoverContent>
        </Popover>
    )
}

export default UserAvatar
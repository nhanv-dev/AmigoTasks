import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'

const UserCard = ({ user }) => {
    return (
        <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
            <CardHeader className="justify-between">
                <div className="flex gap-3">
                    <Avatar isBordered radius="full" size="md" src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                    <div className="flex flex-col items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{user.fullName}</h4>
                        <h5 className="text-small tracking-tight text-default-500">{user.username}</h5>
                    </div>
                </div>
              
            </CardHeader>
            <CardBody className="px-3 py-0">
                <p className="text-small pl-px text-default-500">
                    Full-stack developer, @getnextui lover she/her
                    <span aria-label="confetti" role="img">
                        🎉
                    </span>
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-600 text-small">4</p>
                    <p className=" text-default-500 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-default-600 text-small">97.1K</p>
                    <p className="text-default-500 text-small">Followers</p>
                </div>
            </CardFooter>
        </Card>
    )
}

export default UserCard
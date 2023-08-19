import { BiHistory, BiHomeAlt } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { MdOutlineTopic } from "react-icons/md";
import { RxGithubLogo } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";

export const dashboardRoutes = [
    { title: 'Home', icon: <BiHomeAlt />, href: '/home' },
    { title: 'Tasks', icon: <FaTasks />, href: '/tasks' },
    { title: 'Topic', icon: <MdOutlineTopic />, href: '/topic' },
    { title: 'Project', icon: <BsStack />, href: '/project' },
    { title: 'Recent', icon: <BiHistory />, href: '/recent' },
]


export const headerRoutes = [
    { title: 'Home', icon: <BiHomeAlt />, href: '/home' },
    { title: 'Topic', icon: <MdOutlineTopic />, href: '/topic' },
    { title: 'Project', icon: <RxGithubLogo />, href: '/project' },
    { title: 'Sprint', icon: <LiaNetworkWiredSolid />, href: '/sprint' },
    { title: 'Recent', icon: <BiHistory />, href: '/recent' },
]
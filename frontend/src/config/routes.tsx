import { BiHistory, BiHomeAlt } from "react-icons/bi";
import { BsStack } from "react-icons/bs";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { MdOutlineTopic } from "react-icons/md";
import { RxGithubLogo } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { SiBlueprint } from "react-icons/si";

export const dashboardRoutes = [
    { title: 'Home', icon: <BiHomeAlt />, href: '/home' },
    { title: 'Tasks', icon: <FaTasks />, href: '/workspace' },
    { title: 'Topic', icon: <MdOutlineTopic />, href: '/topic' },
    { title: 'Project', icon: <BsStack />, href: '/project' },
    { title: 'Roadmap', icon: <SiBlueprint />, href: '/roadmaps' },
    { title: 'Recent', icon: <LuHistory />, href: '/recent' },
]


export const headerRoutes = [
    { title: 'Home', icon: <BiHomeAlt />, href: '/home' },
    { title: 'Topic', icon: <MdOutlineTopic />, href: '/topic' },
    { title: 'Project', icon: <RxGithubLogo />, href: '/project' },
    { title: 'Sprint', icon: <LiaNetworkWiredSolid />, href: '/sprint' },
    { title: 'Recent', icon: <BiHistory />, href: '/recent' },
]
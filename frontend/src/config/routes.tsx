import { BiHomeAlt } from "react-icons/bi";
import { CgGoogleTasks } from "react-icons/cg";
import { FaRegMap } from "react-icons/fa";
import { MdOutlineTopic } from "react-icons/md";
import { PiAppWindowLight } from "react-icons/pi";

export const dashboardRoutes = [
    { title: 'Home', icon: <BiHomeAlt />, href: '/home' },
    { title: 'Workspace', icon: <PiAppWindowLight />, href: '/workspace' },
    { title: 'Task', icon: <CgGoogleTasks />, href: '/workspace' },
    { title: 'Topic', icon: <MdOutlineTopic />, href: '/topic' },
    { title: 'Roadmap', icon: <FaRegMap />, href: '/roadmaps' },
]


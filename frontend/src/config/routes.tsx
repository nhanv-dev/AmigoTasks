import { BiHomeAlt } from "react-icons/bi";
import { CgGoogleTasks } from "react-icons/cg";
import { FaRegMap } from "react-icons/fa";
import { MdOutlineTopic } from "react-icons/md";
import { RiOpenaiLine } from "react-icons/ri";

export const dashboardRoutes = [
    { title: 'Home', icon: <BiHomeAlt />, href: '/home' },
    { title: 'Task', icon: <CgGoogleTasks />, href: '/workspace' },
    { title: 'Topic', icon: <MdOutlineTopic />, href: '/topic' },
    { title: 'Chat GPT', icon: <RiOpenaiLine />, href: '/chat-gpt' },
    // { title: 'Roadmap', icon: <FaRegMap />, href: '/roadmaps' },
]


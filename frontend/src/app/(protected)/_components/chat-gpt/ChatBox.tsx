import { Message } from '@/services/chat-gpt/types'
import React from 'react'
const ChatBox = ({ message }: { message: Message }) => {

    if (message.role === "assistant") return <AssistantChatBot message={message} />

    return (
        <div className={`relative bg-black py-4 px-4 rounded-md mb-3 max-w-max mr-0 ml-auto`}>
            <p className='font-semibold text-[0.775rem] text-text dark:text-dark-text transition-all'>
                {message.content}
            </p>
        </div>
    )
}

export default ChatBox;

const AssistantChatBot = ({ message }: { message: Message }) => {
    return (
        <div className={`bg-black transition-all py-4 px-4 rounded-md mb-3 max-w-max ml-0 mr-auto`}>
            <p className='font-semibold text-[0.775rem] text-text dark:text-dark-text transition-all whitespace-pre-wrap'>
                {message.content}
            </p>
        </div>
    )
}
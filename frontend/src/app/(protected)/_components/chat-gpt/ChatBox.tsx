import { Message } from '@/services/chat-gpt/types'
import React from 'react'
const ChatBox = ({ message }: { message: Message }) => {

    if (message.role === "assistant") return <AssistantChatBot message={message} />

    return (
        <div className={`relative bg-primary-bg py-3 px-3 rounded-md mb-3 min-w-[150px] max-w-max mr-0 ml-auto`}>
            <p className='font-semibold text-[0.775rem] text-text dark:text-text transition-all'>
                {message.content}
            </p>
        </div>
    )
}

export default ChatBox;

const AssistantChatBot = ({ message }: { message: Message }) => {

    return (
        <div className={`bg-background-50 dark:bg-dark-background transition-all py-3 px-2 rounded-md mb-3 min-w-[150px] max-w-max ml-0 mr-auto`}>
            <p className='font-semibold text-[0.775rem] text-text dark:text-dark-text transition-all whitespace-pre-wrap'>
                {message.content}
            </p>
        </div>
    )
}
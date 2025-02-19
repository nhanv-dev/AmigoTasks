"use client";

import ContainerCard from '../_components/card/ContainerCard';
import ChatApp from '../_components/chat-gpt';
import Helmet from '../_components/helmet';

const ChatGPT = () => {

    return (
        <Helmet title='ChatGPT - AmigoTasks'>
            <main className='h-full p-4'>
                <ContainerCard classNames='h-full'>
                    <ChatApp />
                </ContainerCard>
            </main>
        </Helmet>
    )
}

export default ChatGPT
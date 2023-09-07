"use client";

import { useEffect, useRef, useState } from 'react';
import { Message } from '@/services/chat-gpt/types';
import chatGptService from '@/services/chat-gpt/chat-gpt.service';
import { TbSend } from 'react-icons/tb';
import ChatBox from './ChatBox';
import { Spinner, Textarea } from '@nextui-org/react';

const ChatApp = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const formRef = useRef<any>(null);
    const blockRef = useRef<any>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        const content = e.target.content.value;
        handleSendMessage(content);
        e.target.reset();
    };

    const handleKeyDown = async (e: any) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            if (loading) return;
            const content = e.target.value;
            e.target.value = '';
            handleSendMessage(content);

        }
    }

    const handleSendMessage = async (content: string) => {
        setLoading(true);
        const message: Message = { index: messages.length, content: content, role: 'user' };
        setMessages(prev => ([...prev, message]))
        try {
            const messages = await chatGptService.sendMessage(content);
            setMessages(prev => ([...prev, ...messages]))
        } catch (error) {
            console.error('Error fetching GPT response:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        blockRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages])

    return (
        <div className="py-4 pr-2 w-full h-full flex flex-col gap-3 overflow-hidden">
            <h5 className='ml-4 mr-2 font-bold text-md bg-primary-bg text-primary px-3 py-2 rounded-md'>
                Chat GPT
            </h5>
            <div className='flex-1 w-full pl-4 pr-2 overflow-y-auto'>
                {messages.map((message, index: number) => (
                    <ChatBox key={index} message={message} />
                ))}
                {loading &&
                    <div className='flex items-center justify-center py-4'>
                        <Spinner color="primary" />
                    </div>
                }
                <div ref={blockRef} />
            </div>
            <div className='pl-4 pr-2 w-full max-w-full'>
                <div className='w-full bg-[#F4F4F5] dark:bg-dark-background-50 py-2.5 px-3 pr-2.5 rounded-md'>
                    <form ref={formRef} onSubmit={handleSubmit} className='flex items-end justify-between gap-5'>
                        <Textarea
                            name='content'
                            rows={1}
                            maxRows={1}
                            placeholder='Write something...'
                            onKeyDown={handleKeyDown}
                            tabIndex={-1}
                            className='overflow-hidden flex-1 bg-transparent border-0 outline-none text-sm font-semibold mb-1'
                        />
                        <button type='submit' className='w-[30px] h-[30px] bg-background dark:bg-dark-background rounded-md flex items-center justify-center'>
                            <p className='text-[1rem]'>
                                <TbSend />
                            </p>
                        </button>
                    </form>

                </div>
            </div>
        </div >
    );
};

export default ChatApp;

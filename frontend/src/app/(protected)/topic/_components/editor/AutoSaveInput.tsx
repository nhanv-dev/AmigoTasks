"use client";

import { TopicSelectors } from "@redux/features/topic/topicSelectors";
import { useAppSelector } from "@redux/hook";
import { useEffect, useRef } from "react";


const AutoSaveInput = ({ initialValue, onSave }) => {
    const { topicLoading } = useAppSelector(TopicSelectors.getLoading());
    const saveTimeoutRef = useRef<any>(null);
    const textareaRef = useRef(null);

    useEffect(() => {
        adjustTextareaHeight();
    }, [initialValue]);

    const handleInputChange = (event: any) => {
        const newInputValue = event.target.value;
        clearTimeout(saveTimeoutRef.current);
        saveTimeoutRef.current = setTimeout(() => {
            onSave(newInputValue);
        }, 500);
    };

    const adjustTextareaHeight = () => {
        const textarea: any = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    if (topicLoading) return null;

    return (
        <div className="w-full mb-4">
            <textarea
                ref={textareaRef}
                placeholder="Title"
                rows={1}
                aria-label="title"
                defaultValue={initialValue || ''}
                onChange={(e) => {
                    handleInputChange(e);
                    adjustTextareaHeight();
                }}
                className="bg-[transparent] w-full border-none outline-none resize-none font-bold text-3xl overflow-hidden"
            />
        </div>
    )
}

export default AutoSaveInput;
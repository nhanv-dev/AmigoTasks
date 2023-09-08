"use client";

import { TopicSelectors } from "@redux/features/topic/topicSelectors";
import { useAppSelector } from "@redux/hook";
import { useEffect, useRef } from "react";


const AutoSaveTextarea = ({ initialValue, onSave }) => {
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
                spellCheck={false}
                placeholder="Description"
                rows={2}
                aria-label="description"
                defaultValue={initialValue || ''}
                onChange={(e) => {
                    handleInputChange(e);
                    adjustTextareaHeight();
                }}
                className="bg-[transparent] w-full border-none outline-none resize-none font-semibold text-md overflow-auto"
            />
        </div>
    )
}

export default AutoSaveTextarea;
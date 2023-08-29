import { Textarea } from "@nextui-org/react";
import { TopicSelectors } from "@redux/features/topic/topicSelectors";
import { useAppSelector } from "@redux/hook";
import { useRef } from "react";

const AutoSaveTextarea = ({ initialValue, onSave }) => {
    const { topicLoading } = useAppSelector(TopicSelectors.getLoading());
    const saveTimeoutRef = useRef<any>(null);

    const handleInputChange = (event: any) => {
        const newInputValue = event.target.value;

        clearTimeout(saveTimeoutRef.current);
        saveTimeoutRef.current = setTimeout(() => {
            onSave(newInputValue);
        }, 500);
    };
    
    if (topicLoading) return null;

    return (
        <Textarea
            onChange={(e) => handleInputChange(e)}
            minRows={2}
            label="Description"
            name='description'
            defaultValue={initialValue || ''}
            placeholder="Write description"
            classNames={{
                base: 'mb-3',
                label: 'text-md font-semibold text-text dark:text-dark-text transition-theme',
                inputWrapper: 'rounded-md',
                input: 'text-md font-semibold text-text dark:text-dark-text transition-theme',
            }}
        />
    )
}

export default AutoSaveTextarea;
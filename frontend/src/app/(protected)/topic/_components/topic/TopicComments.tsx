import CustomDropdown from '@app/(protected)/_components/dropdown/CustomDropdown';
import { Avatar, Button, DropdownItem, Textarea } from '@nextui-org/react';
import { TopicSelectors } from '@redux/features/topic/topicSelectors';
import { TopicThunks } from '@redux/features/topic/topicThunks';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { Comment } from '@services/comment/types';
import DataFormatter from '@util/DataFormatter';
import { FormEvent } from 'react';
import { BiDotsVerticalRounded, BiTime } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { TbSend } from 'react-icons/tb';

const TopicComments = () => {
    const dispatch = useAppDispatch();
    const { topic } = useAppSelector(TopicSelectors.getTopic());

    const handleAddComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!topic) return;
        const content = (e.currentTarget.elements.namedItem('content') as HTMLInputElement)?.value;
        dispatch(TopicThunks.addComment({ topicId: topic.id, content }))
    }
    const handleEditComment = async (id: string) => { }

    const handleDeleteComment = async (id: string) => {
        if (!topic) return;
        dispatch(TopicThunks.deleteComment({ topicId: topic.id, id }))
    }

    return (
        <div className='flex flex-col h-full'>
            <div className='flex items-center gap-4 justify-between mb-3'>
                <h5 className='font-semibold'>
                    Comments
                    <span className='ml-1 text-md'>({topic?.comments.length || 0})</span>
                </h5>
                <button>
                    <BsThreeDots />
                </button>
            </div>
            <div className=''>
                <div className='mb-3'>
                    <form
                        onSubmit={handleAddComment}
                        className='rounded-md bg-default-100 hover:bg-default-200 transition-theme'>
                        <Textarea
                            name='content'
                            maxRows={3}
                            minRows={3}
                            placeholder="Write something..."
                            tabIndex={-1}
                            classNames={{
                                base: '',
                                mainWrapper: '',
                                input: '',
                                inputWrapper: 'rounded-md  ',
                            }}
                        />
                        <div className='flex items-center gap-2 justify-end'>
                            <button type='submit' className='w-[30px] h-[30px] bg-background dark:bg-dark-background rounded-md flex items-center justify-center'>
                                <p className='text-[1rem]'>
                                    <TbSend />
                                </p>
                            </button>
                        </div>
                    </form>
                </div>
                {topic?.comments.map((comment) => (
                    <TopicComment
                        key={comment.id}
                        comment={comment}
                        handleEdit={handleEditComment}
                        handleDelete={handleDeleteComment}
                    />
                ))}
            </div>
        </div>
    )
}

export default TopicComments;


const TopicComment = ({ comment, handleEdit, handleDelete }: { comment: Comment, handleEdit: any, handleDelete: any }) => {
    return (
        <div className='mt-5 pt-5 border-t border-border dark:border-dark-border/80'>
            <div className='flex items-center justify-between gap-2.5 mb-3'>
                <div className='flex items-center gap-3'>
                    <Avatar src={comment.author.avatar} isBordered color="primary" size='sm' />
                    <div className='flex-1'>
                        <p className='text-sm font-semibold'>
                            {comment.author.name}
                        </p>
                        <p className='text-xs font-semibold dark:text-dark-text-50 text-text-50 transition-theme'>
                            {DataFormatter.formatDateToDaysAgo(comment.createdAt)}
                        </p>
                    </div>
                </div>
                <CustomDropdown icon={<BsThreeDots />}>
                    <DropdownItem
                        key="new"
                        title='Edit'
                        startContent={<EditIcon className='text-xl text-default-500' />}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleEdit(comment.id)
                        }}
                    />
                    <DropdownItem
                        key="delete"
                        color="danger"
                        startContent={<DeleteIcon className='text-xl text-default-500' />}
                        title='Delete  '
                        className='text-danger'
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDelete(comment.id)
                        }}
                    />
                </CustomDropdown>

            </div>
            <p className='text-sm font-semibold rounded-md'>
                {comment.content}
            </p>
        </div>
    )
}

const EditIcon = (props: any) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M15.48 3H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V8.52C21 5.06 18.93 3 15.48 3Z"
            fill="currentColor"
            opacity={0.4}
        />
        <path
            d="M21.02 2.98c-1.79-1.8-3.54-1.84-5.38 0L14.51 4.1c-.1.1-.13.24-.09.37.7 2.45 2.66 4.41 5.11 5.11.03.01.08.01.11.01.1 0 .2-.04.27-.11l1.11-1.12c.91-.91 1.36-1.78 1.36-2.67 0-.9-.45-1.79-1.36-2.71ZM17.86 10.42c-.27-.13-.53-.26-.77-.41-.2-.12-.4-.25-.59-.39-.16-.1-.34-.25-.52-.4-.02-.01-.08-.06-.16-.14-.31-.25-.64-.59-.95-.96-.02-.02-.08-.08-.13-.17-.1-.11-.25-.3-.38-.51-.11-.14-.24-.34-.36-.55-.15-.25-.28-.5-.4-.76-.13-.28-.23-.54-.32-.79L7.9 10.72c-.35.35-.69 1.01-.76 1.5l-.43 2.98c-.09.63.08 1.22.47 1.61.33.33.78.5 1.28.5.11 0 .22-.01.33-.02l2.97-.42c.49-.07 1.15-.4 1.5-.76l5.38-5.38c-.25-.08-.5-.19-.78-.31Z"
            fill="currentColor"
        />
    </svg>
)

export const DeleteIcon = (props: any) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82Z"
            fill="currentColor"
        />
        <path
            d="M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Z"
            fill="currentColor"
            opacity={0.399}
        />
        <path
            clipRule="evenodd"
            d="M9.58 17a.75.75 0 0 1 .75-.75h3.33a.75.75 0 0 1 0 1.5h-3.33a.75.75 0 0 1-.75-.75ZM8.75 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
            fill="currentColor"
            fillRule="evenodd"
        />
    </svg>
);

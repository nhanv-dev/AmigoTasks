import { useCallback } from 'react';
import { AiFillStar } from 'react-icons/ai';

interface Props {
    checked: boolean;
    onClick: (e: any) => void;
}
const StarButton = ({ checked, onClick }: Props) => {

    const handleClick = useCallback((e: any) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
    }, [onClick])

    return (
        <button className='w-[18px] h-[18px]' onClick={handleClick} tabIndex={-1}>
            <span className={`text-[1rem] ${checked ? 'text-[yellow]' : 'text-text-50'}`}>
                <AiFillStar />
            </span>
        </button>
    )
}

export default StarButton
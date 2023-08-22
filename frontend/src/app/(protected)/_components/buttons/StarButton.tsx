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
        <button className='w-[20px] h-[20px]' onClick={handleClick} tabIndex={-1}>
            <span className={`text-[1.15rem] ${checked ? 'text-[yellow]' : 'text-[#D8D8D8]'}`}>
                <AiFillStar />
            </span>
        </button>
    )
}

export default StarButton
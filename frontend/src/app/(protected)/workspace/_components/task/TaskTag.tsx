"use client";

import Link from "next/link"

const TaskTag = ({ index, tag }: { index: number, tag: string }) => {
    let color = 'bg-orange-50 text-orange-600'
    if (index % 3 === 0) color = ' bg-blue-50 text-blue-600'
    else if (index % 2 === 0) color = ' bg-indigo-50 text-indigo-600'

    return (
        <Link
            tabIndex={-1}
            draggable={false}
            href={`/tasks/tag/${tag}`}
            className={`${color} inline-flex items-center min-w-max rounded-sm  px-2 py-1 text-xs font-bold`}
        >
            {tag}
        </Link>
    )
}

export default TaskTag;
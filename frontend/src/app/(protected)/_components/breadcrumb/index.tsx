import React from 'react'

interface Props {
    paths: { name: string, href?: string }[]
}

const Breadcrumb = ({ paths }: Props) => {
    return (
        <div>
            <ol className="flex gap-4 items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
                {paths.map((path, index) => (
                    <li className="text-sm" key={index}>
                        <a className="flex items-center text-gray-500 hover:text-blue-600" href={path.href || ''}>
                            {path.name}
                        </a>
                    </li>
                ))}
                <li className="text-sm">
                    <a className="flex items-center text-gray-500 hover:text-blue-600" href="#">
                        App Center

                    </a>
                </li>
                <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200" aria-current="page">
                    Application
                </li>
            </ol>
        </div>

    )
}

export default Breadcrumb
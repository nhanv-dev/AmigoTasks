"use client";

import EditorJS from '@editorjs/editorjs';
import { useEffect, useRef, useState } from 'react';
import './style.css';

const Editor = () => {
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef<EditorJS>();

    const initEditor = async () => {
        const EditorJS = (await import("@editorjs/editorjs")).default;
        const Header = (await import("@editorjs/header")).default;
        const NestedList = (await import("@editorjs/nested-list")).default;
        const Paragraph = (await import("@editorjs/paragraph")).default;
        const Table = (await import("@editorjs/table")).default;
        const Quote = (await import("@editorjs/quote")).default;
        const Image = (await import("@editorjs/image")).default;
        const Embed = (await import("@editorjs/embed")).default;
        const Checklist = (await import("@editorjs/checklist")).default;
        if (!ref.current) {
            const editor = new EditorJS({
                holder: "editorjs",
                tools: {
                    header: {
                        class: Header,
                        shortcut: 'CMD+SHIFT+H',
                    },
                    table: {
                        class: Table,
                        shortcut: 'CMD+SHIFT+T',
                    },
                    list: {
                        class: NestedList,
                        shortcut: 'CMD+SHIFT+L',
                        config: {
                            defaultStyle: 'unordered'
                        },
                    },
                    checklist: {
                        class: Checklist,
                        inlineToolbar: true,
                    },
                    paragraph: {
                        class: Paragraph
                    },
                    // linkTool: {
                    //     class: LinkTool,
                    //     inlineToolbar: true,
                    // },
                    quote: {
                        class: Quote,
                        inlineToolbar: true,
                        shortcut: 'CMD+SHIFT+O',
                        config: {
                            quotePlaceholder: 'Enter a quote',
                            captionPlaceholder: 'Quote\'s author',
                        },
                    },
                    image: {
                        class: Image,
                    },
                    embed: {
                        class: Embed,
                        config: {
                            services: {
                                youtube: true,
                                coub: true
                            }
                        }
                    },
                }
            })
            ref.current = editor;
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMounted(true)
        }
    }, [])

    useEffect(() => {
        const init = async () => {
            await initEditor();
        }
        if (isMounted) {
            init();
            return () => {
                if (ref.current) ref.current.destroy();
            }
        }
    }, [isMounted])

    return (
        <div className='content'>
            <div id='editorjs'>

            </div>
        </div>
    )
}

export default Editor;

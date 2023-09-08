"use client";

import EditorJS from '@editorjs/editorjs';
import { useEffect, useRef } from 'react';
import './style.css';

export const emptyBlock = {
    time: new Date().getTime(),
    blocks: [{
        type: 'header',
        data: {
            text: 'Start writing your content here',
            level: '2',
        }
    }]
}

const Editor = ({ id, topic, initialValue, onSave }) => {
    const ref = useRef<EditorJS | null>(null);
    const saveTimeoutRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && topic) {
            initEditor();
            return () => {
                if (!id || !topic) {
                    ref?.current?.destroy();
                    ref.current = null;
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, topic])

    const initData = async () => {
        if (!initialValue) return emptyBlock;
        try {
            const data = await JSON.parse(initialValue)
            return data || emptyBlock;
        } catch (error) {
            return emptyBlock;
        }
    }

    const initEditor = async () => {
        try {
            const EditorJS = (await import("@editorjs/editorjs")).default;
            const Undo = (await import("editorjs-undo")).default;

            const data = await initData();
            if (!ref.current) {
                const editor = new EditorJS({
                    holder: "editorjs",
                    tools: await generateTools(),
                    minHeight: 500,
                    autofocus: false,

                    onReady: () => {
                        new Undo({ editor });
                        const editorContainer = document.getElementById("editorjs");
                        if (editorContainer) {
                            editorContainer.setAttribute("spellcheck", "false");
                        }
                    },
                    onChange: async () => {
                        const savedData = await ref.current?.save();
                        const newInputValue: any = JSON.stringify(savedData);
                        clearTimeout(saveTimeoutRef.current);
                        saveTimeoutRef.current = setTimeout(() => {
                            onSave(newInputValue)
                        }, 500);
                    },
                    data: data,
                })
                ref.current = editor;

            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div
            className='min-h-[400px] editor-container px-4 py-10 bg-cover bg-center rounded-md mb-4 bg-background dark:bg-dark-background transition-theme'
            style={{
                // backgroundImage: 'url(https://images.unsplash.com/photo-1692023350707-33d901c2c4fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80)'
            }}
        >
            <div id='editorjs' className='text-[0.9rem] font-semibold rounded-md relative sbg-[rgba(0,0,0,0.3)] text-text dark:text-dark-text transition-theme' />
        </div>
    )
}

export default Editor;


const generateTools = async () => {
    const Header = (await import("@editorjs/header")).default;
    const NestedList = (await import("@editorjs/nested-list")).default;
    const Paragraph = (await import("@editorjs/paragraph")).default;
    const Table = (await import("@editorjs/table")).default;
    const Quote = (await import("@editorjs/quote")).default;
    const SimpleImage = (await import("@editorjs/simple-image")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const Checklist = (await import("@editorjs/checklist")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;
    const Marker = (await import("@editorjs/marker")).default;
    const Delimiter = (await import("@editorjs/delimiter")).default;
    const Code = (await import("@editorjs/code")).default;
    const Warning = (await import("@editorjs/warning")).default;
    const Color = (await import("editorjs-text-color-plugin")).default;

    return {
        header: {
            class: Header,
            inlineToolbar: true,
            levels: [2, 3, 4, 5, 6],
            shortcut: 'CMD+SHIFT+H',
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
            shortcut: 'CMD+SHIFT+K',
        },
        table: {
            class: Table,
            shortcut: 'CMD+SHIFT+T',
        },
        inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+I',
        },
        code: {
            class: Code,
            shortcut: 'CMD+SHIFT+C',
        },
        delimiter: {
            class: Delimiter,
            shortcut: 'CMD+SHIFT+D',
        },
        image: {
            class: SimpleImage
        },
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
        },
        warning: {
            class: Warning,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+W',
            config: {
                titlePlaceholder: 'Title',
                messagePlaceholder: 'Message',
            },
        },
        Color: {
            class: Color,
            config: {
               colorCollections: ['#EC7878','#9C27B0','#673AB7','#3F51B5','#0070FF','#03A9F4','#00BCD4','#4CAF50','#8BC34A','#CDDC39', '#FFF'],
               defaultColor: '#FF1300',
               type: 'text', 
               customPicker: true
            }     
          },
        Marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+V',
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: 'Quote\'s author',
            },
        },
        embed: {
            class: Embed,
            inlineToolbar: true,
            config: {
                services: {
                    youtube: true,
                    coub: true
                },
            }
        },

    }

}
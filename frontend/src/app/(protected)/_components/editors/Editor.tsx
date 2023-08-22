"use client";

import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';

const Editor = ({ }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (!editorRef.current) return;
        const editor = new EditorJS({
            holder: editorRef.current,

        });

        return () => {
            editor.isReady.then(() => {
                editor.destroy();
            });
        };
    }, []);

    return <div ref={editorRef} />;
};

export default Editor;

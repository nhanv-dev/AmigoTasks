import { useCallback, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';


const SlateEditor = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [value, setValue] = useState([{ type: 'paragraph', children: [{ text: '' }] }]);
    const onChange = useCallback((newValue: any) => {
        setValue(newValue);
    }, []);



    return (
        <Slate editor={editor} initialValue={value} onChange={onChange}>
            <Editable
                 onKeyDown={(event) => {
                    // Handle any custom key down events if needed
                }}
            />
        </Slate>
    );
};

export default SlateEditor;


// const TodoInput = ({ value, onChange }) => {
//     return (
//         <AutosizeInput
//             type="text"
//             value={value}
//             onChange={onChange}
//             placeholder="Add a new task..."
//         />
//     );
// };
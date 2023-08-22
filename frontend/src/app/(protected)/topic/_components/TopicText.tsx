import { useCallback, useMemo, useState } from 'react';


const SlateEditor = () => {
    const [value, setValue] = useState([{ type: 'paragraph', children: [{ text: '' }] }]);
    const onChange = useCallback((newValue: any) => {
        setValue(newValue);
    }, []);



    return (
        <div></div>
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
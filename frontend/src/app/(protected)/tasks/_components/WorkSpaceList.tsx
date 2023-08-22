import { WorkSpace } from '@services/task/types';
import WorkSpaceItem from './WorkSpaceItem';



const WorkSpaceList = () => {


    return (
        <div className='h-full bg-background dark:bg-dark-background p-4 rounded-md transition-theme'>
            <div>
                <div>
                    {items.map(item => (
                        <WorkSpaceItem key={item.id} workSpace={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkSpaceList;

const items: WorkSpace[] = [
    {
        id: '1', name: 'Long Text for Item 1', description: 'Lorem ipsum dolor sit amet...', createdAt: '2023-08-20', updatedAt: '2023-08-20', deletedAt: '', isPriority: false, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '2', name: 'A Lengthy Description for Item 2', description: 'Nulla facilisi...', createdAt: '2023-08-21', updatedAt: '2023-08-21', deletedAt: '', isPriority: true, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '3', name: 'Item 3 with Extensive Details', description: 'Sed ut perspiciatis...', createdAt: '2023-08-22', updatedAt: '2023-08-22', deletedAt: '', isPriority: false, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '4', name: 'A Very Long Name for Item 4', description: 'Etiam sit amet...', createdAt: '2023-08-23', updatedAt: '2023-08-23', deletedAt: '', isPriority: false, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '5', name: 'Item 5 - Elaborate Content', description: 'Magnam aliquam quaerat...', createdAt: '2023-08-24', updatedAt: '2023-08-24', deletedAt: '', isPriority: true, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '6', name: 'Item 6 - More Than a Few Words', description: 'Proin dignissim...', createdAt: '2023-08-25', updatedAt: '2023-08-25', deletedAt: '', isPriority: false, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '7', name: 'Description for Item 7', description: 'Donec feugiat...', createdAt: '2023-08-26', updatedAt: '2023-08-26', deletedAt: '', isPriority: false, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '9', name: 'Item 9 - Text with Additional Information', description: 'Duis autem...', createdAt: '2023-08-28', updatedAt: '2023-08-28', deletedAt: '', isPriority: false, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '8', name: 'Item 8 - A Comprehensive Name', description: 'Vestibulum ante...', createdAt: '2023-08-27', updatedAt: '2023-08-27', deletedAt: '', isPriority: true, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
    {
        id: '10', name: 'Item 10 - Exploring the Length of Descriptions', description: 'Vivamus eu...', createdAt: '2023-08-29', updatedAt: '2023-08-29', deletedAt: '', isPriority: true, tasks: [],
        inProgressTask: 0, pendingTask: 0, completedTask: 0, tags: []
        ,
    },
];
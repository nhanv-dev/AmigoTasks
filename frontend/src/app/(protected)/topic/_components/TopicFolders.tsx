"use client";

import React from 'react';
import { ControlledTreeEnvironment, UncontrolledTreeEnvironment, Tree, StaticTreeDataProvider } from 'react-complex-tree';
import 'react-complex-tree/lib/style-modern.css';


const Items = {
    root: {
        index: 'root',
        canMove: true,
        isFolder: true,
        children: ['child1'],
        data: 'Root item',
        canRename: true,
    },
    child1: {
        index: 'child1',
        canMove: true,
        isFolder: true,
        children: ['child2'],
        data: 'Developer',
        canRename: true,
    },
    child2: {
        index: 'child2',
        canMove: true,
        isFolder: true,
        children: ['child3', 'child4'],
        data: 'Nest JS',
        canRename: true,
    },
    child3: {
        index: 'child3',
        canMove: true,
        isFolder: true,
        children: [],
        data: 'Next JS',
        canRename: true,
    },
    child4: {
        index: 'child4',
        canMove: true,
        isFolder: true,
        children: [],
        data: 'Docker',
        canRename: true,
    },
};

const TopicFolders = () => {
    const [items,setItems]=React.useState([]);

    return (
        <div className='bg-background dark:bg-dark-background transition-theme transition-all p-4 rounded-md w-full'>
            <ControlledTreeEnvironment
                // items={new StaticTreeDataProvider(items, (item, data) => ({ ...item, data }))}
                items={Items}
                onExpandItem={(treeItem, treeId) => {
                  console.log(treeItem,treeId)
                }}
                renderItemArrow={(item) => (
                    <div>

                        {/* {item.title} */}
                    </div>
                )}
                getItemTitle={item => item.data}
                viewState={{}}
                canDragAndDrop={true}
                canReorderItems={true}
                canDropOnFolder={true}
                canDropOnNonFolder={true}

            >
                <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
            </ControlledTreeEnvironment>
        </div>
    )
}

export default TopicFolders
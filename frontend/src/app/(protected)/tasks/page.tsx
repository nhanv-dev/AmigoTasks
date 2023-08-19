"use client";

import React from 'react'
import TasksContainer from './_components/TasksContainer'
import Helmet from '../_components/helmet';

const Tasks = () => {
    return (
        <Helmet title='DM - Tasks'>
            <main>
                <div className='flex items-start gap-4'>
                    <TasksContainer title={'Pending'} type='Pending' tasks={data} />
                    <TasksContainer title={'In Progress'} type='In Progress' tasks={data} />
                    <TasksContainer title={'Completed'} type='Completed' tasks={data} />
                </div>
            </main>
        </Helmet>
    )
}

export default Tasks;


const data = [
    {
        "title": "Task A",
        "description": "This is task A",
        "comments": [
            {
                "content": "Comment 1",
                "createdAt": "2023-08-01T12:00:00Z",
                "updatedAt": "2023-08-01T12:30:00Z",
                "deletedAt": ""
            },
            {
                "content": "Comment 2",
                "createdAt": "2023-08-02T09:15:00Z",
                "updatedAt": "2023-08-02T10:00:00Z",
                "deletedAt": ""
            }
        ],
        "status": "Pending",
        "tags": ["Tag 1", "Tag 2"],
        "createdAt": "2023-08-01T10:00:00Z",
        "updatedAt": "2023-08-02T15:30:00Z"
    },
    {
        "title": "Task B",
        "description": "Task B description",
        "comments": [
            {
                "content": "Comment X",
                "createdAt": "2023-08-03T14:20:00Z",
                "updatedAt": "2023-08-03T14:25:00Z",
                "deletedAt": ""
            }
        ],
        "status": "In Progress",
        "tags": ["Tag 2", "Tag 3"],
        "createdAt": "2023-08-03T08:45:00Z",
        "updatedAt": "2023-08-04T12:20:00Z"
    },
    {
        "title": "Another Task",
        "description": "Description of another task",
        "comments": [
            {
                "content": "Comment Alpha",
                "createdAt": "2023-07-28T15:30:00Z",
                "updatedAt": "2023-07-28T16:00:00Z",
                "deletedAt": ""
            },
            {
                "content": "Comment Beta",
                "createdAt": "2023-07-29T09:45:00Z",
                "updatedAt": "2023-07-29T10:30:00Z",
                "deletedAt": ""
            },
            {
                "content": "Comment Gamma",
                "createdAt": "2023-07-30T11:10:00Z",
                "updatedAt": "2023-07-30T11:25:00Z",
                "deletedAt": ""
            }
        ],
        "status": "Completed",
        "tags": ["Tag 1", "Tag 3"],
        "createdAt": "2023-07-28T14:15:00Z",
        "updatedAt": "2023-08-05T09:10:00Z"
    },
    {
        "title": "Project XYZ",
        "description": "Detailed project description goes here",
        "comments": [
            {
                "content": "Good progress",
                "createdAt": "2023-08-06T13:00:00Z",
                "updatedAt": "2023-08-06T13:30:00Z",
                "deletedAt": ""
            }
        ],
        "status": "In Progress",
        "tags": ["Tag 2", "Tag 4"],
        "createdAt": "2023-08-06T11:30:00Z",
        "updatedAt": "2023-08-10T16:45:00Z"
    },
    {
        "title": "Meeting Notes",
        "description": "Notes from today's meeting",
        "comments": [],
        "status": "Pending",
        "tags": ["Tag 5"],
        "createdAt": "2023-08-11T09:00:00Z",
        "updatedAt": "2023-08-11T09:00:00Z"
    },
    {
        "title": "Task C",
        "description": "This is task C",
        "comments": [
            {
                "content": "Comment Z",
                "createdAt": "2023-08-12T16:15:00Z",
                "updatedAt": "2023-08-12T17:00:00Z",
                "deletedAt": ""
            },
            {
                "content": "Comment Y",
                "createdAt": "2023-08-13T08:30:00Z",
                "updatedAt": "2023-08-13T09:20:00Z",
                "deletedAt": ""
            }
        ],
        "status": "In Progress",
        "tags": ["Tag 3", "Tag 4"],
        "createdAt": "2023-08-12T14:00:00Z",
        "updatedAt": "2023-08-14T10:45:00Z"
    },
    {
        "title": "Task D",
        "description": "Task D description",
        "comments": [
            {
                "content": "Comment M",
                "createdAt": "2023-08-15T12:45:00Z",
                "updatedAt": "2023-08-15T13:15:00Z",
                "deletedAt": ""
            },
            {
                "content": "Comment N",
                "createdAt": "2023-08-16T09:00:00Z",
                "updatedAt": "2023-08-16T09:45:00Z",
                "deletedAt": ""
            }
        ],
        "status": "Completed",
        "tags": ["Tag 1", "Tag 5"],
        "createdAt": "2023-08-15T10:30:00Z",
        "updatedAt": "2023-08-17T14:20:00Z"
    },
    {
        "title": "Important Task",
        "description": "Important task description",
        "comments": [
            {
                "content": "Critical comment",
                "createdAt": "2023-08-18T11:00:00Z",
                "updatedAt": "2023-08-18T12:00:00Z",
                "deletedAt": ""
            }
        ],
        "status": "In Progress",
        "tags": ["Tag 1", "Tag 4"],
        "createdAt": "2023-08-18T09:30:00Z",
        "updatedAt": "2023-08-20T16:10:00Z"
    },
    {
        "title": "Task E",
        "description": "Task E description",
        "comments": [
            {
                "content": "Comment Q",
                "createdAt": "2023-08-21T10:45:00Z",
                "updatedAt": "2023-08-21T11:20:00Z",
                "deletedAt": ""
            }
        ],
        "status": "Pending",
        "tags": ["Tag 2", "Tag 3"],
        "createdAt": "2023-08-21T09:00:00Z",
        "updatedAt": "2023-08-22T14:00:00Z"
    },
    {
        "title": "Feature Implementation",
        "description": "Implement new feature",
        "comments": [
            {
                "content": "Feature requirements unclear",
                "createdAt": "2023-08-23T13:30:00Z",
                "updatedAt": "2023-08-23T14:15:00Z",
                "deletedAt": ""
            },
            {
                "content": "Great progress on this task",
                "createdAt": "2023-08-24T10:00:00Z",
                "updatedAt": "2023-08-24T11:00:00Z",
                "deletedAt": ""
            }
        ],
        "status": "In Progress",
        "tags": ["Tag 4", "Tag 5"],
        "createdAt": "2023-08-23T09:00:00Z",
        "updatedAt": "2023-08-25T12:30:00Z"
    },
    {
        "title": "Task F",
        "description": "Task F description",
        "comments": [],
        "status": "Completed",
        "tags": ["Tag 1", "Tag 3"],
        "createdAt": "2023-08-26T10:15:00Z",
        "updatedAt": "2023-08-27T15:20:00Z"
    },
    {
        "title": "High Priority Task",
        "description": "Urgent task description",
        "comments": [
            {
                "content": "Urgent comment",
                "createdAt": "2023-08-28T09:30:00Z",
                "updatedAt": "2023-08-28T09:45:00Z",
                "deletedAt": ""
            }
        ],
        "status": "Pending",
        "tags": ["Tag 2", "Tag 4"],
        "createdAt": "2023-08-28T08:00:00Z",
        "updatedAt": "2023-08-29T11:15:00Z"
    },
    {
        "title": "Task G",
        "description": "Task G description",
        "comments": [
            {
                "content": "Comment R",
                "createdAt": "2023-08-30T12:00:00Z",
                "updatedAt": "2023-08-30T12:30:00Z",
                "deletedAt": ""
            }
        ],
        "status": "In Progress",
        "tags": ["Tag 1", "Tag 5"],
        "createdAt": "2023-08-30T09:45:00Z",
        "updatedAt": "2023-08-31T14:20:00Z"
    },
    {
        "title": "Ongoing Project",
        "description": "Project in progress",
        "comments": [],
        "status": "In Progress",
        "tags": ["Tag 3", "Tag 4"],
        "createdAt": "2023-09-01T11:30:00Z",
        "updatedAt": "2023-09-02T16:45:00Z"
    },
    {
        "title": "Task H",
        "description": "Task H description",
        "comments": [],
        "status": "Completed",
        "tags": ["Tag 2", "Tag 5"],
        "createdAt": "2023-09-03T08:15:00Z",
        "updatedAt": "2023-09-04T12:10:00Z"
    },
    {
        "title": "Task I",
        "description": "Task I description",
        "comments": [
            {
                "content": "Comment W",
                "createdAt": "2023-09-05T14:00:00Z",
                "updatedAt": "2023-09-05T14:30:00Z",
                "deletedAt": ""
            }
        ],
        "status": "Pending",
        "tags": ["Tag 1", "Tag 4"],
        "createdAt": "2023-09-05T11:30:00Z",
        "updatedAt": "2023-09-06T15:00:00Z"
    },
    {
        "title": "Feature Testing",
        "description": "Testing new feature",
        "comments": [
            {
                "content": "Issues found during testing",
                "createdAt": "2023-09-07T10:00:00Z",
                "updatedAt": "2023-09-07T10:30:00Z",
                "deletedAt": ""
            },
            {
                "content": "Feature works as expected",
                "createdAt": "2023-09-08T12:45:00Z",
                "updatedAt": "2023-09-08T13:30:00Z",
                "deletedAt": ""
            }
        ],
        "status": "In Progress",
        "tags": ["Tag 3", "Tag 5"],
        "createdAt": "2023-09-07T08:30:00Z",
        "updatedAt": "2023-09-09T14:20:00Z"
    },
    {
        "title": "Task J",
        "description": "Task J description",
        "comments": [],
        "status": "Completed",
        "tags": ["Tag 2", "Tag 4"],
        "createdAt": "2023-09-10T09:15:00Z",
        "updatedAt": "2023-09-11T12:40:00Z"
    }
]

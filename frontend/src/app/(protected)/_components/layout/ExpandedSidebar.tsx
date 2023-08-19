"use client"

import React, { useState } from 'react'

const ExpandedSidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className='w-expandSidebar min-w-expandSidebar h-[100vh] p-4 pr-0'>
      <div className='h-full flex flex-col gap-4 rounded-md bg-white p-4 shadow-sm'>
        <div className='flex-1'>
         
        </div>
        <button onClick={() => setOpen(!open)}>
          Close
        </button>
      </div>
    </div>
  )
}

export default ExpandedSidebar
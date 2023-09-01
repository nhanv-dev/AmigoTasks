"use client"

import { useLayoutContext } from "@/provider/LayoutProvider";

const ExpandedSidebar = () => {
  const { isOpenSidebar, contentSidebar } = useLayoutContext();

  return (
    <div className={`${isOpenSidebar ? 'w-full' : 'w-0'} bg-background-50 dark:bg-dark-background z-[11] transition-all`}>
      <div className="min-w-full overflow-hidden h-full pr-0">
        <div className='h-full gap-4 bg-background dark:bg-dark-background transition-all'>
          {contentSidebar}
        </div>
      </div>
    </div>
  )
}

export default ExpandedSidebar
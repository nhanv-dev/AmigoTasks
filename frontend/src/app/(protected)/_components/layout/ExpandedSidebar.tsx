"use client"

import { useLayoutContext } from "@/provider/LayoutProvider";

const ExpandedSidebar = () => {
  const { isOpenSidebar, contentSidebar } = useLayoutContext();

  return (
    <div className={`${isOpenSidebar ? 'w-[320px]' : 'w-0'} left-[80px] top-[74px] bg-background-50 dark:bg-dark-background-50 z-[11] transition-all overflow-hidden fixed bottom-0`}>
      <div className="min-w-full overflow-hidden h-full p-4 pr-0">
        <div className='h-full gap-4 rounded-md bg-background dark:bg-dark-background shadow-sm transition-all'>
          {contentSidebar}
        </div>
      </div>
    </div>
  )
}

export default ExpandedSidebar
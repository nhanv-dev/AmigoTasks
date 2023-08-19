"use client"

import { useLayoutContext } from "@/provider/LayoutProvider";
import ChatApp from "../chat-gpt";

const ExpandedSidebar = () => {
  const { layout, setLayout } = useLayoutContext();

  return (
    <div className={`${layout.openSidebar ? 'w-[380px]' : 'w-0'} left-[80px] top-[74px] bg-background-50 dark:bg-dark-background-50 z-[1000] transition-all overflow-hidden fixed bottom-0`}>
      <div className="min-w-[250px] overflow-hidden h-full p-4 pr-0">
        <div className='h-full  gap-4 rounded-md bg-background dark:bg-dark-background shadow-sm transition-all'>
          {layout.contentSidebar === 'chatgpt' && <ChatApp />}
        </div>
      </div>
    </div>
  )
}

export default ExpandedSidebar
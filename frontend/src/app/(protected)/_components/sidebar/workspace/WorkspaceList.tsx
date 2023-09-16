
import InnerLoading from '@app/(protected)/_components/loading/InnerLoading';
import WorkspaceDropdown from '@app/(protected)/_components/sidebar/workspace/WorkspaceDropdown';
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { WorkspaceActions } from '@redux/features/workspace/workspaceSlice';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { motion } from "framer-motion";
import WorkspaceItem from './WorkspaceItem';
import WorkspaceModal from './WorkspaceModal';

const WorkspaceList = () => {
    const { isOpen, selectedWorkspace } = useAppSelector(WorkspaceSelectors.getForm());
    const { workspaces, loading } = useAppSelector(WorkspaceSelectors.getWorkspaces());
    const dispatch = useAppDispatch();

    const onOpenChange = (value: boolean) => {
        dispatch(WorkspaceActions.setForm({ isOpen: value, selectedWorkspace: null }))
    }

    return (
        <div>
            <InnerLoading loading={loading && workspaces.length <= 0} />
            <WorkspaceModal onOpenChange={onOpenChange} />
            <div className='relative'>
                <div className='flex items-center justify-between gap-2'>
                    <p className='flex items gap-2 capitalize text-[0.75rem] font-bold text-text-50 dark:text-dark-text-50 transition-theme'>
                        {/* eslint-disable-next-line */}
                        <img
                            className='w-[16p] h-[16px]'
                            src='https://cdn-icons-png.flaticon.com/128/6283/6283621.png' alt='workspace' />
                        Workspace
                    </p>
                    <WorkspaceDropdown onOpenChange={onOpenChange} />
                </div>
                <div className='mt-2 flex flex-col gap-1'>
                    {workspaces.map(workspace => (
                        <motion.div
                            key={workspace.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1 }}
                        >
                            <WorkspaceItem workspace={workspace} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkspaceList;

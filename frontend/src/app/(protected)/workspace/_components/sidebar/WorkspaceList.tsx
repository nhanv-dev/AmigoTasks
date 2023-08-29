import HeaderSidebarCard from '@app/(protected)/_components/card/HeaderSidebarCard';
import SidebarCard from '@app/(protected)/_components/card/SidebarCard';
import InnerLoading from '@app/(protected)/_components/loading/InnerLoading';
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { WorkspaceActions } from '@redux/features/workspace/workspaceSlice';
import { useAppDispatch, useAppSelector } from '@redux/hook';
import { motion } from "framer-motion";
import WorkspaceDropdown from '../workspace/WorkspaceDropdown';
import WorkspaceItem from '../workspace/WorkspaceItem';
import WorkspaceModal from '../workspace/WorkspaceModal';
import WorkspacePriority from '../workspace/WorkspacePriority';

const WorkspaceList = () => {
    const { isOpen, selectedWorkspace } = useAppSelector(WorkspaceSelectors.getForm());
    const { workspaces, loading } = useAppSelector(WorkspaceSelectors.getWorkspaces());
    const dispatch = useAppDispatch();

    const onOpenChange = (value: boolean) => {
        dispatch(WorkspaceActions.setForm({ isOpen: value, selectedWorkspace: null }))
    }

    return (
        <SidebarCard>
            <WorkspaceModal onOpenChange={onOpenChange} />
            <WorkspacePriority onOpenChange={onOpenChange} />
            <div className='relative'>
                <HeaderSidebarCard title='My workspace'>
                    <WorkspaceDropdown onOpenChange={onOpenChange} />
                </HeaderSidebarCard>
                <InnerLoading loading={loading && workspaces.length <= 0} />
                {workspaces.filter(workspace => !workspace.isPriority).map(workspace => (
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
        </SidebarCard>
    )
}

export default WorkspaceList;

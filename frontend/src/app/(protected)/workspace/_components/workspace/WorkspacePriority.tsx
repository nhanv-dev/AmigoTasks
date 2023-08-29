import HeaderSidebarCard from '@app/(protected)/_components/card/HeaderSidebarCard';
import InnerLoading from '@app/(protected)/_components/loading/InnerLoading';
import { Divider } from '@nextui-org/react';
import { WorkspaceSelectors } from '@redux/features/workspace/workspaceSelectors';
import { useAppSelector } from '@redux/hook';
import { motion } from "framer-motion";
import DropdownWorkspace from './WorkspaceDropdown';
import WorkspaceItem from './WorkspaceItem';

const WorkspacePriority = ({ onOpenChange }) => {
    const { workspaces, loading } = useAppSelector(WorkspaceSelectors.getWorkspaces());
    if (workspaces.filter(workspace => workspace.isPriority).length <= 0) return null;

    return (
        <div>
            <HeaderSidebarCard title='Priority'>
                <DropdownWorkspace onOpenChange={onOpenChange} />
            </HeaderSidebarCard>
            <InnerLoading loading={loading && workspaces.length <= 0} />
            {workspaces.filter(workspace => workspace.isPriority).map(workspace => (
                <motion.div
                    key={workspace.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <WorkspaceItem workspace={workspace} />
                </motion.div>
            ))}
            <Divider orientation="horizontal" className='mt-2 mb-3' />
        </div>
    )
}

export default WorkspacePriority
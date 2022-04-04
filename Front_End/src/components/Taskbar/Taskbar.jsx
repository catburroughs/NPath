import "./Taskbar.css";
import TaskbarLink from '../TaskbarLink/TaskbarLink';

function Taskbar() {

    return (
        <div id="taskbar">
            <TaskbarLink>
                Home
            </TaskbarLink>
            <TaskbarLink>
                About NPath
            </TaskbarLink>
            <TaskbarLink>
                Volume
            </TaskbarLink>
            <TaskbarLink>
                Mode
            </TaskbarLink>
        </div>
    );
}

export default Taskbar;
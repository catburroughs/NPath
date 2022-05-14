import "./Taskbar.css";
import TaskbarLink from '../TaskbarLink/TaskbarLink';
import {Link} from 'react-router-dom';

//creates Taskbar links to main pages

function Taskbar() {
  
    return (
        <div id="taskbar">
            <TaskbarLink>
                <Link to = '/'>
                Home
                </Link>
            </TaskbarLink>
            <TaskbarLink>
                <Link to = '/ActivateBoard'>
                Activate NPath
                </Link>
            </TaskbarLink>
            <TaskbarLink>
                <Link to = '/Volume'>
                Volume
                </Link>
            </TaskbarLink>
            <TaskbarLink>
                <Link to = '/Mode'>
                Mode
                </Link>
            </TaskbarLink>
        </div>
    );
}

export default Taskbar;
import "./Taskbar.css";
import TaskbarLink from '../TaskbarLink/TaskbarLink';
import {Link} from 'react-router-dom';

function Taskbar() {
  



    return (
        <div id="taskbar">
            <TaskbarLink>
                <Link to = '/'>
                Home
                </Link>
            </TaskbarLink>
            <TaskbarLink>
                <Link to = '/AboutNPath'>
                About NPath
                </Link>
            </TaskbarLink>
            <TaskbarLink>
                <Link to = '/Volume'>
                Volume
                </Link>
            </TaskbarLink>
            <TaskbarLink>
                <Link to = '/SetMode'>
                Mode
                </Link>
            </TaskbarLink>
        </div>
    );
}

export default Taskbar;
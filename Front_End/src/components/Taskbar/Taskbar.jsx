import "./Taskbar.css";
import TaskbarLink from '../TaskbarLink/TaskbarLink';
import {Link} from 'react-router-dom';

function Taskbar() {
    //const [click, setClick] = useState(false);
    //const [button, setButton] = useState(true);

    //const handleClick = () => setClick(!click);



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
                <Link to = '/SetVolume'>
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
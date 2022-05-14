import "./TaskbarLink.css";

//assigns div styling for all taskbar links

function TaskbarLink({ children }) {
    return (     
        <div className="taskbar_link">
            {children}
        </div>
    );
}

export default TaskbarLink;
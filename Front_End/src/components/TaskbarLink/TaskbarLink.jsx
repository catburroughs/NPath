import "./TaskbarLink.css";

function TaskbarLink({ children }) {
    return (     
        <div className="taskbar_link">
            {children}
        </div>
    );
}

export default TaskbarLink;
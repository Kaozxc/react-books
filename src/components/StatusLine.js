import "../styles/statusLine.scss";
import Task from "./Task";

export default function StatusLine(props) {
    const {status,taks,addTask,deleteTask,addEmptyTask,moveTask} = props;

    let taskList, loadTasksForStatus;

    function handleEmpty() {
        addEmptyTask(status);
    }

    return <div className="statusLine"></div>
}
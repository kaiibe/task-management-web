import { useState } from "react"
import Checkbox from "./Checkbox"
import TaskActions from "./TaskActions";

function Task({ id, title, taskDone, deleteTask }) {

    const [isChecked, setIsChecked] = useState(false)

    function handleCheckbox() {

        if (isChecked) {
            setIsChecked(false);
            taskDone(false)
        } else {
            setIsChecked(true);
            taskDone(true)
        }

    }

    return (
        <div className="task">
            <div className="content">
                <Checkbox isChecked={isChecked} handleCheckbox={handleCheckbox} />
                <span>{title}</span>
            </div>

            <TaskActions id={id} deleteTask={deleteTask} />
        </div>
    )
}

export default Task 
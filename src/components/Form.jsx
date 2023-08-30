import { useState } from "react";

function Form({addNewTask}) {

    const [taskTitle, setTaskTitle] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        if ( taskTitle != "" ) {
            addNewTask(taskTitle);
            setTaskTitle("")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <button type="submit">+</button>
            <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter new task..." />
        </form>
    );
}

export default Form;

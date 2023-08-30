function TaskCounter({tasksTodo, tasksDone}) {
    return (
        <div className="task-counter">
            <h1>Tasks Done: {tasksDone}<span>/{tasksTodo}</span></h1>
        </div>
    )
}

export default TaskCounter;
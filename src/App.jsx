import './App.css'
import { useState } from 'react'
import Form from './components/Form'
import Task from './components/Task'
import TaskCounter from './components/TaskCounter'

function App() {

  const [id, setId] = useState(101)
  const [tasks, setTasks] = useState([])
  const [tasksTodo, setTasksTodo] = useState(0)
  const [tasksDone, setTasksDone] = useState(0)

  function addNewTask(taskTitle) {

    const taskStructure = {
      id: id,
      title: taskTitle
    }

    setTasksTodo(tasksTodo + 1)
    setId(id + 1)
    setTasks([...tasks, taskStructure]);
  }

  function deleteTask(taskID) {
    const newTasksList = tasks.filter(task => task.id !== taskID);

    setTasks(newTasksList);
    setTasksTodo(tasksTodo - 1);
  }

  function taskDone(statement) {
    statement ? setTasksDone(tasksDone + 1) : setTasksDone(tasksDone - 1)

  }

  return (
    <main>
      <TaskCounter tasksTodo={tasksTodo} tasksDone={tasksDone} />
      <Form addNewTask={addNewTask} />
      {tasks.map(task => <Task key={task.id} id={task.id} title={task.title} taskDone={taskDone} deleteTask={deleteTask} />)}
    </main>
  )
}

export default App

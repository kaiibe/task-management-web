import { useState, useRef, useEffect } from "react"; // <-- Add useRef, useEffect
import Checkbox from "./Checkbox";
import TaskActions from "./TaskActions";

function Task({ id, title, taskDone, deleteTask, changeTaskTitle }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const inputRef = useRef(null); // <-- Create a ref

  // Auto-focus when editing mode is activated
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]); // <-- Effect will re-run when isEditing changes

  function handleCheckbox() {
    if (isChecked) {
      setIsChecked(false);
      taskDone(false);
    } else {
      setIsChecked(true);
      taskDone(true);
    }
  }

  function toggleEditing() {
    setIsEditing(!isEditing);
  }

  function handleEditingSubmit(e) {
    setIsEditing(!isEditing);
    e.preventDefault();
    editedTitle === "" ? deleteTask(id) : changeTaskTitle(id, editedTitle);
  }

  return (
    <div className={`task ${isChecked ? "task-checked" : ""}`}>
      {isEditing ? (
        <div className="editing-form">
          <form onSubmit={(e) => handleEditingSubmit(e)}>
            <button type="submit" className="actionButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </button>
            <input
              ref={inputRef}
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </form>
        </div>
      ) : (
        <div className="content">
          <Checkbox isChecked={isChecked} handleCheckbox={handleCheckbox} />
          <span>{title}</span>
        </div>
      )}

      <TaskActions
        id={id}
        deleteTask={deleteTask}
        isChecked={isChecked}
        toggleEditing={toggleEditing}
        isEditing={isEditing}
      />
    </div>
  );
}

export default Task;

import { useState } from "react";
import Checkbox from "./Checkbox";
import TaskActions from "./TaskActions";

function Task({ id, title, taskDone, deleteTask, changeTaskTitle }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

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
    e.preventDefault();
    setIsEditing(!isEditing);
    changeTaskTitle(id, editedTitle);
  }

  return (
    <div className={`task ${isChecked ? "task-checked" : ""}`}>
      {isEditing ? (
        <div className="editing-form">
          <div className="editing-form-content">
            <Checkbox isChecked={isChecked} handleCheckbox={handleCheckbox} />
            <form onSubmit={(e) => handleEditingSubmit(e)}>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
            </form>
          </div>

          <div className="">
            <button
              type="submit"
              onClick={handleEditingSubmit}
              className="actionButton "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </button>
          </div>
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

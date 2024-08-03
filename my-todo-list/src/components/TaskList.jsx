import React from 'react';

const TaskList = ({ taskData, deleteTask }) => {
  return (
    <>
      {taskData.map((task, index) => (

        <div key={index} className="taskData">

          <p>{task}</p>

          <div className="icons">
            <i 
                // onClick={() => editTask(index)} 
                className="fa-solid fa-edit editIcon" title="Edit Task">
            </i>
            <i id="deleteIcon" onClick={() => deleteTask(index)} className="fa-solid fa-trash deleteIcon"></i>
          </div>

        </div>

      ))}
    </>
  );
};

export default TaskList;

import React from 'react'

const TaskInput = ({initial, setInitial, getData}) => {

    const getInput = (e) => {
        setInitial(e.target.value);
    }

    return (
        <>
          <div className="inputTask">
            <input
              type="text"
              placeholder="enter your task here"
              value={initial}
              onChange={getInput}
              className="taskInput"
            />
            <button onClick={getData} className="addButton">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
        </>
      );
      
}

export default TaskInput

import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const Todos = () => {
    const [initial, setInitial] = useState("");
    const [taskData, setTaskData] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const getData = () => {
        if (initial.trim() === "") return; 
        console.log(initial);
    
        if (editIndex !== -1) {
            
          const updatedTasks = taskData.map((task, index) =>
            index === editIndex ? initial : task
          );
          setTaskData(updatedTasks);
          setEditIndex(-1); 
        } else {
          let store = [...taskData, initial];
          setTaskData(store);
        }
    
        setInitial(""); 
    };

    const deleteTask = (index) => {

        let filterData = taskData.filter((curTask, id) => {
            return id !== index;
        });

        setTaskData(filterData);
    };

    const editTask = (index) => {
        setInitial(taskData[index]);
        setEditIndex(index);
    }

    console.log(taskData);

    return (

            <div className="container">
                <TaskInput initial={initial} setInitial={setInitial} getData={getData} />
                <TaskList taskData={taskData} deleteTask={deleteTask} editTask={editTask} />
            </div>
    );
}

export default Todos;

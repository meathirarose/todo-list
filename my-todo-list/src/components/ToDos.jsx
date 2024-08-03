import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const Todos = () => {
    const [initial, setInitial] = useState("");
    const [taskData, setTaskData] = useState([]);

    const getData = () => {       
        if (initial.trim() === "") return;

        let taskStore = [initial,...taskData];

        setTaskData(taskStore);
        setInitial("");
    };

    const deleteTask = (index) => {

        let filterData = taskData.filter((curTask, id) => {
            return id !== index;
        });

        setTaskData(filterData);
    };

    console.log(taskData);

    return (

            <div className="container">
                <TaskInput initial={initial} setInitial={setInitial} getData={getData} />
                <TaskList taskData={taskData} deleteTask={deleteTask} />
            </div>
    );
}

export default Todos;

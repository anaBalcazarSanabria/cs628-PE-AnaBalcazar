import React, { useState } from "react";
import ListItem from "./ListItem";
import Input from '@mui/material/Input';
import { Button } from "@mui/material";

const List = () => {
    const [tasks, setTasks] = useState([]);
    const [description, setDescription] = useState("");

    const changeDescription = (e) => {
        setDescription(e.target.value);
    }

    const addTask = () => {
        tasks.push(description);
        setDescription("");
    }
    
    const deleteTask = (index) => {
        setTasks(tasks.toSpliced(index, 1));
    }

    const ItemList = [];
    for (var i = 0; i < tasks.length; i++) {
        ItemList.push(<ListItem input={tasks[i]} deleteTask={deleteTask} index={i}></ListItem>)
    }


    return (
        <div>
            <Input placeholder="Enter task description" onChange={changeDescription}></Input>
            <Button onClick={addTask}>Add Task</Button>
            {ItemList}
        </div>
    )
}

export default List;
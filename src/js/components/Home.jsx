import React, { useState } from "react";

import ToDoList from "./ToDoList.jsx"

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("")

	//Array where tasks will be stored
	const [tasksArray, setTasksArray] = useState([])

	const handleInput = (e) => {
		console.log(e.target.value)
		setInputValue(e.target.value)
	}
	const handleEnterKey = (e) => {
		console.log(typeof e.code)
		if (e.code === "Enter") {
			//console.log(inputValue)
			//Add tasks to tasksArray
			setTasksArray([...tasksArray, inputValue])
			setInputValue("")
		}

	}


	return (
		<div>
			<div>
				<input onKeyDown={(e) => { handleEnterKey(e) }} value={inputValue} onChange={(e) => { handleInput(e) }} type="text" placeholder="What needs to be done" />
				{/* <button onClick={(e) => { handleTask(e) }} >Add Task</button> */}
			</div>

			<ToDoList setTasksArray={setTasksArray} tasks={tasksArray} />
		</div>
	);
};

export default Home;
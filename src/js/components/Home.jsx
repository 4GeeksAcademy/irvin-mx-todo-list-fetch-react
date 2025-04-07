import React, { useState } from "react";

//Components
import ToDoList from "./ToDoList.jsx"

//Component
const Home = () => {

	const [inputValue, setInputValue] = useState("")

	//Array where tasks will be stored
	const [tasksArray, setTasksArray] = useState([])

	//Event handlers
	const handleInput = (e) => {
		setInputValue(e.target.value)
	}
	const handleEnterKey = (e) => {
		if (e.code === "Enter" && inputValue.length > 0) {
			//console.log(inputValue)
			//Add tasks to tasksArray
			setTasksArray([...tasksArray, inputValue])
			setInputValue("")
		}

	}

	return (
		<div className="bg-body-tertiary d-flex flex-column justify-content-center align-items-center vh-100 ">
			<h1 className="display-1 fw-lighter text-body-tertiary">todos</h1>
			<div className="d-flex flex-column text-center w-50 shadow-lg">
				<input className="p-4 fs-4 fw-light border border-0" onKeyDown={(e) => { handleEnterKey(e) }} value={inputValue} onChange={(e) => { handleInput(e) }} type="text" placeholder="What needs to be done?" />
			</div>

			<ToDoList className="bg-dark" setTasksArray={setTasksArray} tasks={tasksArray} />
		</div>
	);
};

export default Home;
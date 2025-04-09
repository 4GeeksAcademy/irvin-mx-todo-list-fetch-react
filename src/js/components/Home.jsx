import React, { useState, useEffect } from "react";

//Components
import ToDoList from "./ToDoList.jsx"

//Component
const Home = () => {

	const [users, setUsers] = useState([])

	//Array where tasks will be stored
	const [tasksArray, setTasksArray] = useState([])


	const fetchAllUsers = async () => {
		try {
			const response = await fetch("https://playground.4geeks.com/todo/users")
			if (!response.ok) {
				throw new Error("Something went wrong!")
			}
			const data = await response.json()
			//console.log(data.users)
			//console.log(data.users)
			//setUsers([1,2,3,4])

			setUsers(data.users)

		} catch (e) {
			console.log(e)
		}
	}

	//THIS FUNCTION CREATES USERS
	const createUser = async (userName) => {
		try {
			const response = await fetch(`https://playground.4geeks.com/todo/users/${userName}`, {
				method: "POST",
				hearders: {
					"Content-Type": "application/json"
				}
			})
			if (!response.ok) {
				throw new Error("Something went wrong creating a user!")
			}
			const data = await response.json()
			// console.log(data)
			setUsers(...users, data)
		} catch (e) {
			console.log(e)
		}
	}

	//This function retreives usertasks
	const getUserTasks = async (userName) => {
		try {
			const response = await fetch(`https://playground.4geeks.com/todo/users/${userName}`)

			if (!response.ok) {
				throw new Error("Error in getUserTasks function.")
			}

			const data = await response.json()
			// console.log("Below are all the todos")
			// console.log(data.todos)
			//setTasksArray(data.todos)
			setTasksArray(data.todos)

		} catch (e) {
			console.log("Error that was caugth.", e)
		}
	}

	//This function creates nenw posts for users
	const addNewUserTask = async (userName,task)=>{
		try{
			const response = await fetch(`https://playground.4geeks.com/todo/todos/${userName}`,{
				method: "POST",
				body: JSON.stringify({label:task,is_done:false}),
				headers : {
					"Content-Type": "application/json"
				}
			})
			if(!response.ok){
				throw new Error("Error in addNewUserTAsk try")
			}
		}catch(e){
			console.log("Error in addNewUserTask function",e)
		}
	}

	//Hook
	useEffect(() => {
		fetchAllUsers()
		getUserTasks("user0506")
	}, [])

	// useEffect(()=>{
	// 	getUserTasks("user0505")
	// },[])

	// console.log(users)

	const findUser = users.filter(item => item.name === "user0506")

	// console.log(findUser.length)

	// if (findUser.length == 0) {
	// // 	//crea al usuario
	// 	createUser("user0506")
	// }

	// console.log("here is the end users")
	// console.log(users)
	
	//Get tasks from user
	//retreiveUserTasks()
	//console.log()

	const [inputValue, setInputValue] = useState("")

	//Event handlers
	const handleInput = (e) => {
		setInputValue(e.target.value)
	}
	const handleEnterKey = (e) => {
		if (e.code === "Enter" && inputValue.length > 0) {
			//console.log(inputValue)
			//Add tasks to tasksArray
			// setTasksArray([...tasksArray, inputValue])
			// setInputValue("")

			//Call function that adds a new post to the existing
			addNewUserTask("user0506", inputValue)
			setInputValue("")
			getUserTasks("user0506")
		} 

	}

	return (
		<div className="bg-body-tertiary d-flex flex-column justify-content-center align-items-center vh-100 ">
			<h1 className="display-1 fw-lighter text-body-tertiary">todos</h1>
			<div className="d-flex flex-column text-center w-50 shadow-lg">
				<input className="p-4 fs-4 fw-light border border-0" onKeyDown={(e) => { handleEnterKey(e) }} value={inputValue} onChange={(e) => { handleInput(e) }} type="text" placeholder="What needs to be done?" />
			</div>

			<ToDoList setTasksArray={setTasksArray} tasks={tasksArray} getUserTasks={getUserTasks} userName="user0506" />
		</div>
	);
};

export default Home;
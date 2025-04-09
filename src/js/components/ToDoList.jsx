import React, { useState } from "react"

const ToDoList = ({ tasks, setTasksArray, getUserTasks , userName}) => {

    const deleteTaskById = async (id) => {
        try{
            const response = fetch(`https://playground.4geeks.com/todo/todos/${id}`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if(!response.ok){
                throw new Error("Could not delete user task")
            }
        }catch(e){
            console.log("Got an error", e)
        }
    }

    const [deleteButtonVisibility, setDeleteButtonVisibility] = useState(null)

    const handleDeleteTask = (e) => {
        // console.log(e.target.id)
        deleteTaskById(e.target.id)
        getUserTasks(userName)
        // const deletedArray = tasks.filter((item, index, array) => {
        //     return item !== array[Number(e.target.id)]
        // })
        //console.log(deletedArray)
        //setTasksArray(deletedArray)
    }

    return (
        <div className="bg-white w-50">
            {tasks.length > 0 ? tasks.map((item) => (
                <div onMouseEnter={() => setDeleteButtonVisibility(item.id)} onMouseLeave={() => setDeleteButtonVisibility(null)} className="bg-white d-flex justify-content-between align-items-center p-4 fs-4 border-bottom" key={item.id}>
                    <p className="fw-lighter">{item.label}</p>
                    {deleteButtonVisibility == item.id && <div onClick={(e) => { handleDeleteTask(e) }} id={item.id} className="text-danger" role="button">x</div>}
                </div>
            )) : <p className="p-2 fw-lighter">0 tasks in list</p>}
            {tasks.length > 0 ? <p className="p-1 fw-lighter border-bottom">{tasks.length} item left</p> : null}
        </div>

    )
}

export default ToDoList
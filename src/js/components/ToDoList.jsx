import React, { useState } from "react"

const ToDoList = ({ tasks, setTasksArray }) => {

    console.log('I am in the todolist component, and these are the tasks', tasks)

    const [deleteButtonVisibility, setDeleteButtonVisibility] = useState(null)

    const handleDeleteTask = (e) => {
        //console.log(e.target)
        //console.log(typeof e.target.id)
        //console.log(typeof Number(e.target.id))

        //task array example -> ["Do my bed","Wash dishes","Clean my room"]
        const deletedArray = tasks.filter((item, index, array) => {
            return item !== array[Number(e.target.id)]
        })
        //console.log(deletedArray)
        setTasksArray(deletedArray)
    }

    return (
        <div className="bg-secondary">
            {tasks.length > 0 ? tasks.map((item, index, array) => (
                <div onMouseEnter={() => setDeleteButtonVisibility(index)} onMouseLeave={() => setDeleteButtonVisibility(null)} className="col-7 bg-primary d-flex justify-content-between" key={index}>
                    <p className=" bg-warning ">{item}</p>
                    {deleteButtonVisibility == index && <div onClick={(e) => { handleDeleteTask(e) }} id={index} className="display-3">x</div>}
                </div>
            )) : <p>no tasks in list</p>}
            {tasks.length > 0? <p>{tasks.length}</p> : null }
        </div>

    )
}

export default ToDoList
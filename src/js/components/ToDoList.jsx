import React, { useState } from "react"

const ToDoList = ({ tasks, setTasksArray }) => {

    const [deleteButtonVisibility, setDeleteButtonVisibility] = useState(null)

    const handleDeleteTask = (e) => {
        const deletedArray = tasks.filter((item, index, array) => {
            return item !== array[Number(e.target.id)]
        })
        //console.log(deletedArray)
        setTasksArray(deletedArray)
    }

    return (
        <div className="bg-white w-50">
            {tasks.length > 0 ? tasks.map((item, index) => (
                <div onMouseEnter={() => setDeleteButtonVisibility(index)} onMouseLeave={() => setDeleteButtonVisibility(null)} className="bg-white d-flex justify-content-between align-items-center p-4 fs-4 border-bottom" key={index}>
                    <p className="fw-lighter">{item}</p>
                    {deleteButtonVisibility == index && <div onClick={(e) => { handleDeleteTask(e) }} id={index} className="text-danger" role="button">x</div>}
                </div>
            )) : <p className="p-2 fw-lighter">0 tasks in list</p>}
            {tasks.length > 0 ? <p className="p-1 fw-lighter border-bottom">{tasks.length} item left</p> : null}
        </div>

    )
}

export default ToDoList
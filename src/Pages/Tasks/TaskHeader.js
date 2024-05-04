
import { useContext } from "react";
import { TaskStatusContex } from "../../Stores/Contexts/TaskStatusContext";

const TaskHeader=(props)=>{
    const {statusTaskList}=useContext(TaskStatusContex);

    return(
        <header>
            <button className="tablink">Task Managment</button>
           
            {
                statusTaskList.map((value)=>{
                   return <button key={value.id} className="tablink">{value.statusname} <span>List</span></button>
                })
            }
        </header>
    )
}

export default TaskHeader;
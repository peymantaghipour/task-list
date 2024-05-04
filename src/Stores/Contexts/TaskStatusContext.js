import { createContext } from "react";

const statusTaskList=[
    {id:1,statusname:"To Do"},
    {id:2,statusname:"In Progress"},
    {id:3,statusname:"Done"},
    {id:4,statusname:"Archive"}
    
];

export const TaskStatusContex=createContext(null);

const TaskStatusProvider=({children})=>{
return(
    <TaskStatusContex.Provider value={{statusTaskList}}>
        {children}
    </TaskStatusContex.Provider>
)
}
export default TaskStatusProvider;


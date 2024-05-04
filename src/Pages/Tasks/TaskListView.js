import { useContext } from "react";
import { TaskStatusContex } from "../../Stores/Contexts/TaskStatusContext";


const TaskListView = (props) => {

    const { list } = props;
    const {statusTaskList}=useContext(TaskStatusContex);
    // const list=props.list;
    const findTaskStatus = (id) => {
        // let statusname = "";
        // for (let index = 0; index < statusTaskList.length; index++) {
        //    if(statusTaskList[index].id===id){
        //    statusname = statusTaskList[index].statusname;}
        // }

        let s = statusTaskList.find((p) => p.id === id);
        if (s)
            return s.statusname
        else
            return "";

    }
    return (
        <table className="table">
           <thead>
           <tr  className="header">
                <th>Task Name</th>
                <th>Duration</th>
                <th>Task State</th>
                <th>...</th>
            </tr>
           </thead>
           <tbody>
            {
                list.map((value) => {
                    return (<tr key={value.id}>
                        <td>{value.taskName}</td>
                        <td>{value.duration}</td>
                        {/* <td>
                            {
                                statusTaskList.find((p) => p.id === value.statusid)?
                                statusTaskList.find((p) => p.id === value.statusid).statusname
                                :""
                            }
                        </td> */}
                        <td>{findTaskStatus(value.statusid)}</td>
                        <td>
                            <i className="fa fa-edit text-success" onClick={()=>{
                                if(props.editClick){props.editClick(value)}
                            }}></i>
                            <i className="fa fa-remove text-danger" onClick={()=>{
                                if(props.removeClick){props.removeClick(value)}
                            }}></i>
                            </td>
                    </tr>
                    )
                })
            }
            </tbody>
        </table>
    )

}
export default TaskListView;
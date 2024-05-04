import { useEffect, useState } from "react";
import { useContext } from "react";
import { TaskStatusContex } from "../../Stores/Contexts/TaskStatusContext";
import { TextInput,NumberInput,SelectInput } from "../../Components/Form";
//test comment
const TaskForm = (props) => {
    const { statusTaskList } = useContext(TaskStatusContex);

    const [model, setModel] = useState(props.model);

    useEffect(() => {
        setModel({ ...props.model });
    }, [props.model]);

    // const handleChange = (e) => {
    //     setModel({ ...model, [e.target.id]: e.target.value })
    // }
    // const handleChangeNumber = (e) => {
    //     setModel({ ...model, [e.target.id]: Number(e.target.value) })
    // }

    const resetForm = () => {
        setModel({ id: 0, taskName: "", duration: 0, statusid: 1 });
    }

    return (<form>
        <div className="container">
            <TextInput model={model} id="taskName" description="Task Name"/>
            <NumberInput model={model} id="duration" description="Task Duration"/>
            <SelectInput model={model} id="statusid" description="Task Status" list={statusTaskList} text="statusname" />
            {/* <label htmlFor="taskName"><b>Task Name:</b></label>
            <input id="taskName" value={model.taskName} type="text" onChange={handleChange}></input> 
            <label htmlFor="durstion"><b>Task durstion:</b></label>
            <input id="duration" type="number" value={model.duration} onChange={handleChangeNumber}></input>
            <label htmlFor="statusid"><b>Task Status:</b></label>
            <select id="statusid" value={model.statusid} onChange={handleChangeNumber}>
                
                {
                    statusTaskList.map((status) => {
                        return <option key={status.id} value={status.id}>{status.statusname}</option>
                    })
                }
            </select>*/}

            <button type="button" className="btn success" onClick={
                () => {
                    if (props.registerClick) {
                        console.log('btn add clicked.');
                        props.registerClick(model);
                        resetForm();
                    }
                }}>Register</button>
        </div>
    </form>
    )
}

export default TaskForm;






import { useReducer, useState } from "react";
import TaskForm from "./TaskForm";
import TaskListView from "./TaskListView";
import Modal from "../../Components/Modal/Modal";
import { successMessage } from "../../Utils/Alerts/alert";



const initialState = { listModel: [] };
const taskReduser = (state, action) => {
    switch (action.type) {
        case "register":
            {
                let task = action.payload;
                let listModel = state.listModel;
                if (task.id === 0) {
                    // Register ...
                    let id = 1;
                    if (listModel.length > 0) {
                        id = listModel[listModel.length - 1] + 1
                    }
                    task.id = id;
                    listModel = [...listModel, task];
                }
                else {
                    // Edit ...
                    let index = listModel.findIndex(p => p.id === task.id);
                    if (index !== -1) {
                        listModel[index] = task;
                    }
                }
                state.listModel = listModel;
                return state;
            }
        case "remove":
            {
                let listModel = state.listModel;
                let index = listModel.findIndex(p => p.id === action.payload);
                if (index !== -1) {
                    let temp = [...listModel];
                    temp.splice(index, 1);
                    listModel = [...temp];
                }
                return { ...state, listModel: listModel }
            }
        default:
            return state;
    }
}

const TaskManagment = (props) => {
    const [showModal, setShowModal] = useState(false);

    const [model, setModel] = useState({ id: 0, taskName: "", duration: 0, statusid: 1 });

    
    //const [listModel, setListModel] = useState([]);

    const [taskState, dispatch] = useReducer(taskReduser, initialState);

    const register = (task) => {

        dispatch({ type: "register", payload: task });

        setShowModal(false);

        successMessage();
    }

    const remove = (task) => {
        dispatch({ type: "remove", payload: task.id });

    }

    const edit = (task) => {
        setShowModal(true);
        setModel(task);
    }

    return (
        <div>
            <h2>Task Managment</h2>
            <hr />
            <button className="btn success" onClick={() => {
                setShowModal(true);
                setModel({ id: 0, taskName: "", duration: 0, statusid: 1 })
            }}><span className="fa fa-plus" style={{ marginRight: 5 }}> New</span></button>

            <TaskListView removeClick={remove} editClick={edit} list={taskState.listModel} />
            <Modal header={<p>Task Form</p>} show={showModal} hide={() => { setShowModal(false) }}>
                <TaskForm model={model} registerClick={register} />
            </Modal>

        </div>
    )
}

export default TaskManagment;


import React from 'react';
import './App.css';
import TaskPage from './Pages/Tasks/TaskPage';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import TaskStatusProvider from './Stores/Contexts/TaskStatusContext';

const App=()=>{

  
  return (
    <div>

    <ToastContainer />
    <TaskStatusProvider>
    <TaskPage />
    </TaskStatusProvider>
    </div>
  );
}

export default App;

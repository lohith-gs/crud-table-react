import './App.css';
import React,{useState,useContext} from 'react';

import EmpTable from './components/table';
import AddEmployeeForm from './forms/addEmployeeForm';
import EditEmployeeForm from './forms/editEmployeeForm';
import {GlobalContext} from './context/globalcontext';
import {GlobalProvider} from './context/globalcontext';
function App() {
  const {employeeList,editEmployee} = useContext(GlobalContext)
  const [employees,setEmployees]=useState(employeeList);
  
  const addEmployee=(emp) => {
    setEmployees([...employees,emp]);
  };

  const deleteEmp= (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialEmp= { id: null, name: "", dept: "",location:"",email:""};

  const [currentEmp, setCurrentEmp] = useState(initialEmp);

  const editEmp= (id,emp) => {
    setEditing(true);
    setCurrentEmp(emp);
  };

  const updateEmp= (newEmp) => {

    setCurrentEmp(initialEmp);
    setEditing(false);
  };

  return (
    <GlobalProvider>
    <div className="App">
      <h1>Employee Table </h1>
      {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditEmployeeForm
                currentEmp={currentEmp}
                setEditing={setEditing}
                updateEmp={updateEmp}
              />
            </div>
          ) :(
      <div>
        <h3> Add Employee </h3>
        <AddEmployeeForm/>
      </div>)}
      <div>
        <h3> View Employees </h3>
        <EmpTable editEmp={editEmp}/>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;

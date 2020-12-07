import React,{useContext} from 'react';
import {GlobalContext} from '../context/globalcontext';
const EmpTable=(props)=>{
    const {employees,removeEmployee}= useContext(GlobalContext);

    return(
    <table className="table">
  <thead className="thead-dark">
    <tr >
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Location</th>
      <th scope="col">Email</th>
      <th scope="col">Edit/Delete Employee</th>
    </tr>
  </thead>
  <tbody>
  { employees.length > 0 ? (
                    employees.map(employee => {
                        const {id,name,dept,location,email} = employee;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{dept}</td>
                                <td>{location}</td>
                                <td>{email}</td>
                                <td>
                                    <button type="button" class="btn btn-light"onClick={()=>props.editEmp(id,employee)}>Edit</button>
                                    <button type="button" class="btn btn-dark" onClick={()=>removeEmployee(id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )   
                }
  </tbody>
  </table>
)}

export default EmpTable;
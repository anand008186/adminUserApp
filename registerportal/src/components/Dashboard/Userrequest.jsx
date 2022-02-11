import React, { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { getRegisteredUsers ,deleteApprovedUser,addApprovedUser } from '../../API/api';
import "./dashboard.css";

 function Userrequest() {
    const [users,setUsers] = useState([]);
    
    useEffect( () => {
         getAllUsers();
    },[])

    const getAllUsers = async()=>{
        const data = await getRegisteredUsers()
         setUsers(data);
    }
 const userApproved = async (user) => { 
    const User = {...user,id:`${user.name.length}${user.name.substring(0,3)}`}
    await addApprovedUser(User);
     await deleteApprovedUser(user.id);
     
     getAllUsers()
     
     
 }
 const userDenied =async (id) => {
     await deleteApprovedUser(id);
     getAllUsers()
 }
  return (<>
  
  <div className="row my-2" >
                    <h3 className="fs-4 mb-3">Recent approval requests</h3>
                    <div className="col">
                        <table className="table bg-white rounded shadow-sm  table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width="50">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Email</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>

                            {
                             users.map((user)=>{
                                 return (<>
                                     <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.city}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button  type="button" className='btn btn-sm btn-success me-5' onClick={()=> userApproved(user)}>Approve</button>
                                        <button  type="button" className='btn btn-sm btn-danger' onClick={()=> userDenied(user.id)}>Deny</button>
                                        {/* <i class="zmdi zmdi-edit zmdi-hc-lg mdc-text-green me-5"></i>
                                        <i class="bi bi-trash3  " style={{color:"red"}}></i> */}
                                    </td>
                                </tr>
                                 </>)

                             })
                            }    
                            </tbody>
                        </table>
                    </div>
                </div>
  </>);
}

export default Userrequest;

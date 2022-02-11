import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addApprovedUser ,getApprovedUsers } from '../../API/api';
function Addform() {
  const [newUser,setNewUser] = useState({name:"",city:"",email:"",password:"",cpassword:""})
  
  const formHandler=(e)=>{
   let name = e.target.name;
    let  value = e.target.value;
     setNewUser({...newUser , [name] : value});
  }
  const postUserData = async (e)=>{
         e.preventDefault();
    const { name,city,email ,password,cpassword } = newUser ;
    const data = await getApprovedUsers() ;
    const userData =  data.filter((user)=> user.email == email)
    if (!name || !city || !email || !password || !cpassword || password!=cpassword ){
        window.alert("Fill the required field properly")
    } else if(userData){
      window.alert("User already exist")
    }
    else{
      await  addApprovedUser (newUser);
      setNewUser({name:"",city:"",email:"",password:"",cpassword:""});
      await getApprovedUsers();
    }
      
  }
  return (<>
<form method='post'>
  <div className="mb-3">
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="text" name="name" className="form-control" aria-describedby="nameHelp" value={newUser.name} onChange={formHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="City" className="form-label">City</label>
    <input type="text" name="city" className="form-control" aria-describedby="cityHelp" value={newUser.city} onChange={formHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" name="email" className="form-control" aria-describedby="emailHelp" value={newUser.email} onChange={formHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="Password1" className="form-label">Password</label>
    <input type="password" name="password" className="form-control" value={newUser.password} onChange={formHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="Password1" className="form-label">Confirm Password</label>
    <input type="password" name="cpassword" className="form-control"  value={newUser.cpassword} onChange={formHandler}/>
  </div>
  
  <Link type="button" to="/dashboard/users" className="btn btn-primary shadow-none" data-bs-dismiss="modal" onClick={postUserData}>Add New User</Link>
</form>
 
  </>);
}

export default Addform;

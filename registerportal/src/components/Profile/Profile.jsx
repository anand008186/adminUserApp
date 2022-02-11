import React from 'react';

import profileImg from "../../Images/profile.jpg";
import "./profile.css";
import Header from '../Header';


function Profile() {
  // const navigate = useNavigate();
  // const [user,setUser] = useState({Name:"",City:"",Email:""});
  
//     <user_Data.Consumer>
//    {(user_Data)=> { 
//      if(!user_Data){
//        navigate("/login")
//       }}}
//  </user_Data.Consumer>

  return (<>
    <Header/>
      <div className="profile d-flex justify-content-center align-items-center">
          <div className="shadow-sm rounded card " style={{width: "28%"}}>
    <img className="card-img-top profileImg rounded-circle" src={profileImg} alt="Card image cap"/>
    <div className="card-body fw-bold mt-2">
               <div className = "row about-secondary py-2 justify-content-center ">
                <div className = "col-6 ">
                         <label >Name</label>
                     </div>
               <div className = "col-6 text-secondary ">*******</div>
               </div>
               <div className = "row mb-2 py-2 justify-content-center">
               <div className = "col-6">
                   <label >Email</label>
               </div>
               <div className = "col-6 text-secondary">*************</div>
               </div>
               
               <div className = "row mb-2  py-2 justify-content-center">
               <div className = "col-6">
                   <label >City</label>
                   </div>
               <div className = "col-6 text-secondary">***********</div>
               </div>
             
       
                     
      </div>
    </div>
  </div>
  </>)
}

export default Profile
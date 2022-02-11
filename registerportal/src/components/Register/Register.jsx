import React ,{useState} from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import Header from '../Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
import image from "../../Images/signup-image.jpg";
import registerUser from "../../API/api";
import { getRegisteredUsers ,getApprovedUsers } from '../../API/api';

function Register() {
    
    const [User ,setUser]  = useState({name: "" ,city : "" , email: "",password: "" ,cpassword: "" }) ;
    const navigate = useNavigate();
    let name ,value ;
    const Input = (e)=> {
      name = e.target.name;
      value = e.target.value;
     setUser({...User , [name] : value});
    
    }
  
    const postdata = async (e)=>{
      e.preventDefault();
      const { name,city,email ,password,cpassword } = User ;
      const registeredUsers = await getRegisteredUsers() ;
    const userData =  registeredUsers.filter((user)=> user.email === email);
    
    const ApprovedUsers = await getApprovedUsers() ;
    const Data =  ApprovedUsers.filter((user)=> user.email === email);
      if (!name || !city || !email || !password || !cpassword || password!==cpassword ){
          window.alert("Fill all the required fields")
      }else if(userData.length){
        window.alert("Already Registered,Wait for approval")
      }
      else if (Data.length){
        window.alert("User already exist")
      }
      else{
        const data = await registerUser(User);
         if (data){
           window.alert("Registration Successful,Wait for the approval");
           setUser({name: "" ,city : "" , email: "",password: "" ,cpassword: ""})
           navigate("/userLogin")
       }
       else
       {window.alert("Some Error Occured.Try again")};
      }
   
    }
  
  return(
      <>
      <Header/>
      <section class="signup" id='register'>
            <div class="container">
                <div class="signup-content row">
                    <div class="signup-form col-6 ">
                        <h2 class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group border-bottom border-dark ">
                                <label for="name"><i class="bi bi-person-fill"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" className='form-control border-0 shadow-none' value={User.name} onChange={Input}/>
                            </div>
                            <div class="form-group border-bottom border-dark">
                                <label for="city"><i class="zmdi zmdi-city"></i></label>
                                <input type="text" name="city" id="city" placeholder="Your City" className= 'form-control border-0 shadow-none' value={User.city} onChange={Input}/>
                            </div>
                            <div class="form-group border-bottom border-dark">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" className= 'form-control border-0 shadow-none' value={User.email} onChange={Input}/>
                            </div>
                            <div class="form-group border-bottom border-dark">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="pass" placeholder="Password" className='form-control border-0 shadow-none' value={User.password} onChange={Input}/>
                            </div>
                            <div class="form-group border-bottom border-dark">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="cpassword" id="re_pass" placeholder="Repeat your password" className='form-control border-0 shadow-none' value={User.cpassword} onChange={Input}/>
                            </div>
                        
                            <div class="form-group form-button">
                                <input type="button" name="signup" id="signup" class="form-submit" value="Register" onClick={postdata}/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image col-6">
                        <figure><img src={image} alt="sing up image"/></figure>
                        <Link to="/userLogin" class="signup-image-link">I am already member</Link>
                    </div>
                </div>
            </div>
        </section>
      </>
  );
}

export default Register;

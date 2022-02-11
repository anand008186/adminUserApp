import React,{ useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import userImage from "../../Images/signin-image.jpg";
import adminImage from "../../Images/admin-image.png";
import { getApprovedUsers ,getRegisteredUsers,getRegisteredAdmin } from '../../API/api';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";


// import "../Register/register.css"

function UserLogin() {
    const navigate = useNavigate();
    const [User ,setUser]  = useState({ email: "",password: "" }) ;
    const [show ,setShow] = useState(false)

    const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

    const userInput = (e)=> {
     setUser({...User , [e.target.name] : e.target.value});
    
    }

    
const userValidation = async (e) =>{
    e.preventDefault()
    const registeredUsers = await getRegisteredUsers() ;
    const userData =  registeredUsers.filter((user)=> user.email === User.email);
    const ApprovedUsers = await getApprovedUsers() ;
    const Data =  ApprovedUsers.filter((user)=> (user.email === User.email) && (user.password ===User.password));
    if (Data.length){
        window.alert("Login Successful");
        setUser({ email: "",password: "" })
        navigate('/profile')
    }else if (userData.length){
        handleShow();
    }
    else {
        window.alert("Invalid Credentials");
    }
}
  return (
      <>
      <Header/>
      <section className="sign-in">
            <div className="container">
                <div className="signin-content row">
                    <div className="signin-image col-6">
                        <figure><img src={userImage} alt="sing up image"/></figure>
                        <a href="#" className="signup-image-link">Create an account</a>
                    </div>

                    <div className="signin-form col-6">
                        <h2 className="form-title">User Login</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group border-bottom border-dark">
                                <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="email" name="email" id="your_email" placeholder="Your Email" className='form-control border-0 shadow-none' value={User.email} onChange={userInput}/>
                            </div>
                            <div className="form-group border-bottom border-dark">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="your_pass" placeholder="Password" className='form-control border-0 shadow-none' value={User.password} onChange={userInput}/>
                            </div>
                            
                            <div className="form-group form-button">
                                <input type="button" name="signin" id="signin" className="form-submit" value="Log in" onClick={userValidation}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Modal --> */}
        <Modal show={show} onHide={handleClose}>
    <ModalHeader closeButton>
      <ModalTitle>User Status</ModalTitle>
    </ModalHeader>
    <ModalBody> <h2>Wait till the admin approval</h2></ModalBody>
    <ModalFooter>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Ok
      </Button>
    </ModalFooter>
  </Modal>

 </>
  );
}

// {Admin login page}
function AdminLogin() {
    const navigate = useNavigate();
    const [User ,setUser]  = useState({ email: "",password: "" }) ;
    

    const userInput = (e)=> {
     setUser({...User , [e.target.name] : e.target.value});
    
    }
    const userValidation = async (e) =>{
        e.preventDefault()
        const registeredAdmin = await getRegisteredAdmin() ;
        const adminData =  registeredAdmin.filter((user)=> (user.email === User.email) && (user.password ===User.password));
        
        if (adminData.length){
            window.alert("Login Successful");
            setUser({ email: "",password: "" })
            navigate('/dashboard')
        }
        else {
            window.alert("Invalid Credentials");
        }
    }
    return (
        <>
        <Header/>
        <section className="sign-in">
              <div className="container">
                  <div className="signin-content row">
                      <div className="signin-image col-6">
                          <figure><img src={adminImage} alt="sing up image"/></figure>
                          <a href="#" className="signup-image-link">Create an account</a>
                      </div>
  
                      <div className="signin-form col-6">
                          <h2 className="form-title">Admin Login</h2>
                          <form method="POST" className="register-form" id="login-form">
                              <div className="form-group border-bottom border-dark">
                                  <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                  <input type="email" name="email" id="your_name" placeholder="Your Email" className='form-control border-0 shadow-none' value={User.email} onChange={userInput}/>
                              </div>
                              <div className="form-group border-bottom border-dark">
                                  <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                  <input type="password" name="password" id="your_pass" placeholder="Password" className='form-control border-0 shadow-none' value={User.password} onChange={userInput}/>
                              </div>
                              <div className="form-group ">
                                  <input type="checkbox" name="remember-me" id="remember-me" className="agree-term"/>
                                  <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                              </div>
                              <div className="form-group form-button">
                                  <input type="button" name="signin" id="signin" onClick={userValidation} className="form-submit" value="Log in"/>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
        </>
    );
  }
  


export default UserLogin;
export { AdminLogin };

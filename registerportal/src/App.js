import React from "react";
import './App.css';
import { Route , Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import UserLogin from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import Userrequest from "./components/Dashboard/Userrequest";
import Users from "./components/Dashboard/Users";
import Analytics from "./components/Dashboard/Analytics";
import { AdminLogin } from "./components/Login/Login";

function App() {
  return (
   <>
   
      <Routes>
           
           <Route  path="/" element={ <Home/> } />
           <Route  path="/signUp" element={ <Register/> } />
           <Route  path="/userLogin" element={  <UserLogin/> } />
           <Route  path="/adminLogin" element={  <AdminLogin/> } />
           <Route  path="/profile" element={  <Profile/> } />
           <Route  path="/dashboard" element={  <Dashboard/> }> 
                <Route  path="" element={ <Userrequest/> } />
                <Route  path="users" element={  <Users/> } />
                <Route  path="analytics" element={  <Analytics/> } />
           </Route>
           
      </Routes>
   </>
  );
}

export default App;

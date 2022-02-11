import React from 'react';
import {  Link ,Outlet} from 'react-router-dom';
import "./dashboard.css";


const Sidebar = () =>{
    return(<>
    <div className="bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    className="fas fa-user-secret me-2"></i>Admin Portal</div>
            <div className="list-group list-group-flush my-3">
                <Link to="/dashboard/" className="list-group-item list-group-item-action bg-transparent second-text active"><i
                        className="zmdi zmdi-accounts-add me-2"></i>User requests</Link>
                <Link to="/dashboard/users" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="zmdi zmdi-accounts-list me-2"></i>Users</Link>
                <Link to="/dashboard/analytics" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="bi bi-graph-down-arrow me-2"></i>Analytics</Link>
                <Link to="/adminLogin" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                        className="bi bi-box-arrow-right me-2"></i>Logout</Link>
            </div>
        </div></>)
}
function Dashboard() {
    
  return (
  <>
  <div className="d-flex" id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar/>
        {/* <!-- /#sidebar-wrapper --> */}

        {/* <!-- Page Content --> */}
        <div id="page-content-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                <div className="d-flex align-items-center">
                    {/* <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i> */}
                    {/* <i className="zmdi zmdi-menu zmdi-hc-lg me-3" id="menu-toggle" ></i> */}
                    <h2 className="fs-2 m-0">DASHBOARD</h2>
                </div>

                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-person-circle me-2"></i>Admin
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container-fluid px-4">
          
           
            <Outlet/>
           {/* <Route  path="/analytics" element={  <Analytics/> } /> */}
           {/* <Route  path="/logout" element={  <Logout/> } /> */}
           
      

            </div>
        </div>
      
    {/* <!-- /#page-content-wrapper --> */}
</div>
  </>
  );
}

export default Dashboard;

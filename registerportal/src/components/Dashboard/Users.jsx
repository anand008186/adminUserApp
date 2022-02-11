import React, { useState ,useEffect } from 'react';
import { deleteUser, getApprovedUsers } from "../../API/api"
import ReactPaginate from 'react-paginate';
import Addform from "./Addform";
import "./dashboard.css"
function Users() {
  const [users,setUsers] = useState([]);
  const [pages,setPages] = useState(0);
  const [page,setPage] = useState(0);
  const [perPage,setperPage] = useState(8);
  useEffect( () => {
    getAllApprovedUsers();
  },[] )
  ;
  const getAllApprovedUsers = async ()=>{
    var data = await getApprovedUsers()
     setUsers(data);
     setPages(Math.ceil(data.length / perPage));
   }
  const userDelete = async (id) =>{
    await deleteUser(id);
    getAllApprovedUsers();
  }
  const  handlePageClick = async (event) => {
    let page = event.selected;
    setPage(page);
    
 }

 const items = users.slice(page * perPage, ((page+1) * perPage > users.length ? (users.length ) : (page+1) * perPage ));
 
 const userList =  items.map((user)=>{
  return (<>
      <tr key={user.id}>
     <th scope="row">{user.id}</th>
     <td>{user.name}</td>
     <td>{user.city}</td>
     <td>{user.email}</td>
     <td>
         <a  role="button" className='btn shadow-none' href='#'  onClick={()=> userDelete(user.id)}> <i className="bi bi-trash3  " style={{color:"red"}}></i> </a> 
     </td>
 </tr>
  </>)

}) ; 
  
  return (<>

  
    <div className="row my-2"  >
                     <div className="d-flex justify-content-between mb-3">
                     <h3 className="fs-4 mb-3">All Users List</h3>
                       {/* <!-- Button trigger modal --> */}
                      <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      <i className="bi bi-plus-circle me-2"></i>
                       create new user
                      </button>
                     </div>
                      
                      <div className="col">
                          <table className="table bg-white rounded shadow-sm  table-hover">
                              <thead>
                                  <tr>
                                      <th scope="col" width="200">Key_id</th>
                                      <th scope="col">Name</th>
                                      <th scope="col">City</th>
                                      <th scope="col">Email</th>
                                      <th scope="col"></th>
                                  </tr>
                              </thead>
                      <tbody>                       
                      {userList}
                              </tbody>
                          </table>
                          <ReactPaginate
                            previousLabel={'prev'}
                            nextLabel={'next'}
                            pageCount={pages}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                            />
                      </div>
                  </div>
          {/* MODAL CONTENT  */}
  

{/* <!-- Modal --> */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Add User</h5>
        <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
         <Addform/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary shadow-none" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

    </>);
}

export default Users;

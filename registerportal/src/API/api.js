import axios from "axios";

const baseURL = "http://localhost:5000"
async function registerUser(User) {
    const response1 = await axios.post(`${baseURL}/register`,User);
  return response1.data
}
const getRegisteredUsers = async ()=>{
  const response2 = await axios.get(`${baseURL}/register`);
  return response2.data
}
const deleteApprovedUser = async (id) =>{
  await axios.delete(`${baseURL}/register/${id}`)
}
const addApprovedUser = async (User)=>{
  const response3 = await axios.post(`${baseURL}/users`,User);
  return response3.data
}
const getApprovedUsers = async ()=>{
  const response = await axios.get(`${baseURL}/users`);
  return response.data
}
const deleteUser = async (id) =>{
  await axios.delete(`${baseURL}/users/${id}`)
}
const getRegisteredAdmin = async ()=>{
  const response2 = await axios.get(`${baseURL}/adminData`);
  return response2.data
}
export default registerUser;
export { getRegisteredUsers,deleteApprovedUser ,addApprovedUser ,getApprovedUsers , deleteUser,getRegisteredAdmin} ;

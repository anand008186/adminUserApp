import React, { useEffect, useState } from 'react';
import { getApprovedUsers } from '../../API/api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
function Analytics() {
   const [users,setUsers] = useState([]);

   useEffect(()=> {
    getAllApprovedUsers();
},[])
const getAllApprovedUsers = async ()=>{
    const data = await getApprovedUsers()
    setUsers(data);
  }
  const cityNames = users.map((ele)=> ele.city.split(" ").join("").toLowerCase())
  const occurrences = cityNames.reduce( (acc, curr)=> {
     (curr in acc) ? acc[curr]++ : acc[curr] = 1 ;
     return acc 
  },{}
  );
 
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
      
     const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };
      
      const labels = Object.keys(occurrences);
      
     const data = {
        labels,
        datasets: [
          {
            label: 'City',
            data: Object.values(occurrences),
            backgroundColor: '#37517e',
          },
        ],
      };
      
      

  
  return (<>
       
      <div>
      <Bar style={{width:"80%" , margin:"auto" }} options={options} data={data}   />;
      </div>
    
  </>);
}

export default Analytics;


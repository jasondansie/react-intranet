import React, { useEffect } from 'react';
import { useState } from "react";
import { Data } from "./Data";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,} from 'chart.js';
import axios from 'axios';
import { useSelector } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Home = () => {
  const userToken = useSelector((state) => state.user.userToken);

  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios.get('http://localhost:5000/finances', {
      headers: {
        Authorization: userToken
      }
    })
    .then(response => {
      const month = response.data.map(item => item.month);
      const profit = response.data.map(item => item.profit);
      const revenue = response.data.map(item => item.revenue);
  
      const data = {
        labels: month,
        datasets: [
          {
            label: "Revenue",
            data: revenue,
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Profit",
            data: profit,
            fill: false,
            borderColor: "#742774"
          }
        ]
      };
  
      setData(data);
    })
    .catch(error => {
      console.error(error);
    });
  }, [userToken]);



    // const [chartData, setChartData] = useState({
    //     labels: Data.map((data) => data.year), 
    //     datasets: [
    //       {
    //         label: "Users Gained ",
    //         data: Data.map((data) => data.userGain),
    //         backgroundColor: [
    //           "rgba(75,192,192,0.2)",
    //           "#ecf0f1",
    //           "#50AF95",
    //           "#f3ba2f",
    //           "#2a71d0"
    //         ],
    //         fill: true,
    //         borderColor: "black",
    //         borderWidth: 2
    //       }
    //     ]
    //   });

     

    
      return (
        <div>
             
            <p>Using Chart.js in React</p>
            {data && <Line data={data} />}

        </div>
      );
    
}

export default Home;
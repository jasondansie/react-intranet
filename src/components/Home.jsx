import React from 'react';
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Home.module.css'
import PageHeading from './PageHeading';
import BasicTable from './BasicTable';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Home = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.userToken);

  const [data, setData] = useState(null);
  const [users, setUsers] = useState(null);

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

        const chartdata = {
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
              fill: true,
              backgroundColor: "rgba(108, 47, 214,0.6)",
              borderColor: "#747427"
            }
          ]
        };

        setData(chartdata);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:5000/users', {
      headers: {
        Authorization: userToken
      }
    })
      .then(response => {
        setUsers(response.data);
        console.log("home:", response, data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userToken, dispatch]);

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
      <PageHeading
        pageTitle="DashBoard"
      />
      <div className={classes.top}>
        <div className={classes.maincontent}>
          {users && <BasicTable
            title="Current Users"
            users={users}
          />}
          <div className={classes.chart}>
            {data && <Line data={data} />}
          </div>
        </div>
      </div>
    </div>

  );

}

export default Home;
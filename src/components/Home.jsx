import React from 'react';
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loadUserData } from './features/UserSlice.js'
import classes from './Home.module.css'
import PageHeading from './PageHeading';
import BasicTable from './BasicTable';
import SingleStatBox from './SingleStatBox';



ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const Home = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.userToken);
  const userData = useSelector((state) => state.user.userData);

  const [data, setData] = useState(null);
  const [users, setUsers] = useState(null);
  const [report, setReport] = useState(null);

  
  useEffect(() => {
    // axios.get('http://localhost:5000/finances', {
    //   headers: {
    //     Authorization: userToken
    //   }
    // })
    //   .then(response => {
    //     const month = response.data.map(item => item.month);
    //     const profit = response.data.map(item => item.profit);
    //     const revenue = response.data.map(item => item.revenue);
  
    //     const chartdata = {
    //       labels: month,
    //       datasets: [
    //         {
    //           label: "Revenue",
    //           data: revenue,
    //           fill: true,
    //           backgroundColor: "rgba(75,192,192,0.2)",
    //           borderColor: "rgba(75,192,192,1)"
    //         },
    //         {
    //           label: "Profit",
    //           data: profit,
    //           fill: true,
    //           backgroundColor: "rgba(108, 47, 214,0.6)",
    //           borderColor: "#747427"
    //         }
    //       ]
    //     };
  
    //     setData(chartdata);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    //   if(!users){
    //     axios.get('http://localhost:5000/users', {
    //   headers: {
    //     Authorization: userToken
    //   }
    // })
    //   .then(response => {
    //     setUsers(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    //   }
  
    
  
    // axios.get('http://localhost:5000/getUserById', {
    //   headers: {
    //     Authorization: userToken
    //   }
    // })
    //   .then(response => {
    //     getReport(response.data)
    //     dispatch(loadUserData(response.data));
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

      const fetchData = async () => {
        try {
          const [userResponse] = await Promise.all([
            axios.get('http://localhost:5000/getUserById', {
              headers: {
                Authorization: userToken
              }
            })
          ]);
    
          getReport(userResponse.data);
    
          dispatch(loadUserData(userResponse.data));
    
        } catch (error) {
          console.error(error);
        }
      }
    
      fetchData();
    
  }, [dispatch, userToken]);
  

  const getReport = (userData) => {
    const payload = `${userData.firstname} ${userData.lastName}`;
    
    axios.get(`http://localhost:5000/reports/${payload} `)
      .then(res => {
        setReport(res.data);
      });
  }

  console.log("report", report);


  let role = "";
  if (userData && userData.accessId) {
    switch (userData.accessId) {
      case 1:
        role = "admin"
        break;
      case 2:
        role = "manager"
        break;
      default:
        role = "user"
        break;
    }
  }



  return (
    <div>
      <PageHeading
        pageTitle="DashBoard"
      />
      <div className={classes.top}>
        <div className={classes.maincontent}>
          {
            role === 'admin' ?
              users && <BasicTable
                title="Current Users"
                users={users}
              />
              :
              role === 'manager' ?
                <div className={classes.chart}>
                  {data && <Line data={data} />}
                </div>
                :
                <div>
                  <div className={classes.userStats}>
                    < SingleStatBox
                      icon={'fa fa-user yellow_color'}
                      description={'Calls'}
                      stats={report.length}
                    />
                    < SingleStatBox
                      icon={'fa fa-user'}
                      description={'projects'}
                      stats={'5'}
                    />
                    < SingleStatBox
                      icon={'fa fa-phone'}
                      description={'call minutes'}
                      stats={'543'}
                    />
                  </div>
                </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
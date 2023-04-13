import React, { useEffect, useState } from 'react';
import PageHeading from './PageHeading';
import classes from './Finances.module.css';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import axios from 'axios';


const Finances = () => {
    const [data, setData] = useState(null);
    const userToken = useSelector((state) => state.user.userToken);

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

    },[])

    return (
        <div>
        <PageHeading
          pageTitle="Finances"
        />
        <div className={classes.top}>
          <div className={classes.maincontent}>
            <div className={classes.chart}>
              {data && <Line data={data} />}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Finances;
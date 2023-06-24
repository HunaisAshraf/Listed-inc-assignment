import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { API_URL, config } from "../constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  
  const [coins, setCoins] = useState([]);


  const getCoins = async () => {
    try {
      let res = await axios.get(API_URL,config);
      setCoins(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCoins();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align:"end",
        labels:{
          usePointStyle:true,
          boxWidth:60
        }
      },
      title: {
        display: true,
        text: "Activities",
        align:"start",
        font:{
          size:25
        }
      },
    },
  }

  const labels = ["week 1", "week 2", "week 3", "week 4", "week 5"];

  const data = {
    labels,
    datasets: [
      {
        label: `${coins?.data?.coins[1]?.name}`,
        data: coins?.data?.coins[1]?.sparkline?.filter(
          (c, i) => (i + 1) % 4 === 0
        ),
        borderColor: "#E9A0A0",
        backgroundColor: "#E9A0A0",
        tension: 0.3,
      },
      {
        label: `${coins?.data?.coins[8]?.name}`,
        data: coins?.data?.coins[8]?.sparkline?.filter((c, i) => i % 4 === 0),
        borderColor: "#9BDD73",
        backgroundColor: "#9BDD73",
        tension: 0.3,
      },
      
    ],
  };
  return (
    <>
      <Line data={data} options={options}  />
    </>
  );
};

export default LineChart;

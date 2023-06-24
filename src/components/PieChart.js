import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { API_URL, config } from "../constants";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [coins, setCoins] = useState();

  const getCoins = async () => {
    try {
      let res = await axios.get(API_URL, config);
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
        position: "right",
        labels: {
          usePointStyle: true,
          boxWidth: 20,
        },
      },
      title: {
        display: true,
        text: "Top Coins",
        align: "start",
        font: {
          size: 25,
        },
      },
    },
  };

  const labels = [
    coins?.data?.coins[0]?.name,
    coins?.data?.coins[1]?.name,
    coins?.data?.coins[8]?.name,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: `${coins?.data?.coins[1]?.name}`,
        data: [
          coins?.data?.coins[0]?.price,
          coins?.data?.coins[1]?.price,
          coins?.data?.coins[1]?.price,
        ],

        backgroundColor: ["#98D89e", "#E9A0A0", "#F6DC7D"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Pie data={data} options={options} />
    </>
  );
};

export default PieChart;

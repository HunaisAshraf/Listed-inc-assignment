import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import "../styles/Dashboard.css";
import { BiBell, BiLike } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { PiUsers, PiDownloadBold } from "react-icons/pi";
import { BsTags } from "react-icons/bs";
import axios from "axios";
import { API_URL, config } from "../constants";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const { user, isAuthenticated } = useAuth0();

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

  return (
    <div className="dashboard">
      <div className="left-box">
        <SideBar />
      </div>
      <div className="right-box">
        <div className="nav">
          <h3>Dashboard</h3>
          <div className="search">
            <input type="text" placeholder="search..." />
            <p>
              <BiBell />
            </p>
            {isAuthenticated ? (
              <>
                <img className="user-img" src={user.picture} alt={user.name} />
              </>
            ) : (
              <>
                <p>
                  <CgProfile />
                </p>
              </>
            )}
          </div>
        </div>
        <div className="cards">
          <div className="card  box1">
            <div className="icon">
              <PiDownloadBold />
            </div>
            <p>Total Market Cap</p>
            <h3>
              $
              {Number(coins.data?.stats?.totalMarketCap)?.toLocaleString(
                "en-US"
              )}
            </h3>
          </div>
          <div className="card box2">
            <div className="icon">
              <BsTags />
            </div>
            <p>Total Exchanges</p>
            <h3>
              {coins.data?.stats?.totalExchanges?.toLocaleString("en-Us")}
            </h3>
          </div>
          <div className="card box3">
            <div className="icon">
              <BiLike />
            </div>
            <p>Total Markets</p>
            <h3>{coins.data?.stats?.totalMarkets?.toLocaleString("en-Us")}</h3>
          </div>
          <div className="card box4">
            <div className="icon">
              <PiUsers />
            </div>
            <p>Total Coins</p>
            <h3>{coins.data?.stats?.totalCoins?.toLocaleString("en-Us")}</h3>
          </div>
        </div>
        <div className="line-chart">
          <LineChart />
        </div>
        <div className="pie-chart">
          <div className="chart">
            <div className="pie">
              <PieChart />
            </div>
          </div>
          <div className="chart schedule">
            <h2>Today's schedule</h2>
            <div className="meeting">
              <h4>Meeting with suppiers from Kuta Bali</h4>
              <p>14:00 - 15:00</p>
              <p>at Sunset Road, Kuta, Bali</p>
            </div>
            <div className="check">
              <h4>Check operation at Giga Factory 1</h4>
              <p>18:00 - 20:00</p>
              <p>at Central Jakarta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

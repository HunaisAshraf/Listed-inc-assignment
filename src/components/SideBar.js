import "../styles/SideBar.css";
import { FiPieChart, FiSettings } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="links">
        <div className="top">
          <h1>Board</h1>
          <ul>
            <li>
              <FiPieChart /> Dashboard
            </li>
            <li>
              <BsTags /> Transactions
            </li>
            <li>
              <TbCalendarTime /> Schedules
            </li>
            <li>
              <BiUserCircle /> Users
            </li>
            <li>
              <FiSettings /> Settings
            </li>
          </ul>
        </div>
        <div className="bottom">
          <ul>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

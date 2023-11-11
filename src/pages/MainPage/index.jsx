import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/alfresco-logo-flower.svg";
import SearchBar from "../../components/Searchbar";
import {
  faBell,
  faEllipsisVertical,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./MainPage.module.css";
import { useState } from "react";
import DashBoard from "../../components/DashBoard";
import SideBar from "../../components/Sidebar";
import { Route, Routes } from "react-router-dom";

function MainPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div>
      <header className={styles.header}>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.icon}
          onClick={() => setIsCollapsed((pre) => !pre)}
        />
        <img src={logo} alt="logo" className={styles.logo} />
        <p className={styles.title}>BookStore</p>
        <SearchBar />
        <FontAwesomeIcon icon={faBell} className={styles.icon} />
        <div className={styles.profile}></div>
        <FontAwesomeIcon icon={faEllipsisVertical} className={styles.icon} />
      </header>
      <div className={styles.container}>
        <SideBar isCollapsed={isCollapsed} />
        <Routes>
          <Route path="/favorite" element={<DashBoard />} />
          <Route path="/personal" element={<DashBoard />} />
        </Routes>
      </div>
    </div>
  );
}

export default MainPage;

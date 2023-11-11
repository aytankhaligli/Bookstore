import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
function SideBar({ isCollapsed }) {
  return (
    <Sidebar toggled={true} collapsed={isCollapsed} className={styles.sidebar}>
      <Menu>
        <MenuItem component={<Link to="/personal" />}>Personal Files</MenuItem>
        <SubMenu label="File libraries">
          <MenuItem component={<Link to="/favorite" />}>
            Favorite libraries
          </MenuItem>
          <MenuItem> My libraries </MenuItem>
        </SubMenu>
        <MenuItem> Shared</MenuItem>
      </Menu>
    </Sidebar>
  );
}

export default SideBar;

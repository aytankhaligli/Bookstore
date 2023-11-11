import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";

export default function Root() {
  return (
    <>
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

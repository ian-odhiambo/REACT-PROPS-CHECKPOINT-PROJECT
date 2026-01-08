import { Outlet } from "react-router-dom";
import Navbar from "../COMPONENTS/Navbar";
import ViewAllPlayers from "../COMPONENTS/ViewAllPlayers";


const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <ViewAllPlayers/>
    </>
  )
}

export default MainLayout
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"

const MainLayout = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
           <Navbar/> 
           <Outlet/>  {/* mayhimech anaho page bech dima show us navbar*/} 
             
        </div>
    )
}

export default MainLayout
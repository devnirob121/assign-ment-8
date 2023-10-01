import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import '../App.css'
import { useEffect } from "react";
export const MainLayout = () => {

  const pageLocation = useLocation()
  useEffect(() => {
    
    document.title = `Donation${pageLocation.pathname==='/'? '-Home': pageLocation.pathname.replace('/','-').toUpperCase()}`
  },[pageLocation.pathname])

  return (
    <>
      <div className="parent">
        <div className="child  relative ">
          <Navbar/>
          <div className="outlet-sr overflow-hidden my-8 sm:my-20 md:my-40	 ">
          <Outlet />

          </div>
        </div>
      </div>
    </>
  );
};
export default MainLayout;

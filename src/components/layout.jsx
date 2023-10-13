import { Outlet } from "react-router-dom";
import NavBar from "./header/nav-bar.jsx";

export default function Layout() {
    return (
       <>
            <NavBar />
            <Outlet />
        </>
    );
    
}
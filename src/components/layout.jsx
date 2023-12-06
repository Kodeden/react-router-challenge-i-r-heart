import { Outlet } from "react-router-dom";
import NavBar from "./header/index.jsx";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

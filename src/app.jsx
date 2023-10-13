
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import Layout from "./components/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} ></Route>
  )
  );




export default function App() {
  return <RouterProvider router={router} />;
}







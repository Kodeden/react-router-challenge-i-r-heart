
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import Error from "./components/error";
import Layout from "./components/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}  errorElement={<Error /> } ></Route>
  )
  );




export default function App() {
  return <RouterProvider router={router} />;
}







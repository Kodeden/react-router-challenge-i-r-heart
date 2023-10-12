
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<div className="text-3xl font-bold underline"> Hello world!</div>} />
  )
  );




export default function App() {
  return <RouterProvider router={router} />;
}







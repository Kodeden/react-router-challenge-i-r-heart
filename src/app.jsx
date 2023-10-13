
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import Error from "./components/error";
import Layout from "./components/layout";
import Index from "./pages/index";

import contactInformation from "./pages/loaders";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}  errorElement={<Error /> } >
      <Route index element={<Index />}  loader={contactInformation} />
    </Route>
  )
  );




export default function App() {
  return <RouterProvider router={router} />;
}







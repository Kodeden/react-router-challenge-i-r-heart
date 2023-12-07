import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "./components/error";
import Layout from "./components/layout";
import { ButtonAction } from "./pages/actions";
import ContactForm from "./pages/add-contact";
import Index from "./pages/index";
import contactInformation from "./pages/loaders";
import Profile from "./pages/profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Index />} loader={contactInformation} />
      <Route
        path="/contacts/:id"
        element={<Profile />}
        loader={contactInformation}
        action={ButtonAction}
      />
      <Route path="add-edit" element={<ContactForm />} action={ButtonAction} />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import ContactProfile from "../components/contacts/contact-profile.jsx";
import Error from "../components/error";
import Loading from "../components/loading";

export default function Profile() {
  const { contact } = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={contact} errorElement={<Error />}>
        <ContactProfile />
      </Await>
    </Suspense>
  );
}

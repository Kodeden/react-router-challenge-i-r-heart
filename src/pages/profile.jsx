import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import ContactProfile from "../components/contact-profile.jsx";
import Loading from "../components/loading";

export default function Profile() {
  const contact = useLoaderData();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await resolve={contact}>
          <ContactProfile />
        </Await>
      </Suspense>
    </>
  );
}


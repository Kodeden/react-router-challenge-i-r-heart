import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import ContactsList from "../components/contacts";
import Error from "../components/error";
import Loading from "../components/loading";

export default function Index() {
  const { contacts } = useLoaderData() || {};

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={contacts} errorElement={<Error />}>
        <ContactsList />
      </Await>
    </Suspense>
  );
}

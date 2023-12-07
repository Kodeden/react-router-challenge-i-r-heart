import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import ContactsList from "../components/contacts";
import Loading from "../components/loading";

export default function Index() {
  const contacts = useLoaderData();

  return (
    <Suspense fallsback={<Loading />}>
      <Await resolve={contacts}>
        <ContactsList />
      </Await>
    </Suspense>
  );
}

import { useAsyncValue } from "react-router-dom";
import {
  BackButton,
  DeleteButton,
  EditButton,
} from "../action-buttons/index.jsx";

export default function ContactProfile() {
  const contact = useAsyncValue();

  return (
    <>
      <main className="m-1 flex flex-col items-center justify-center gap-3">
        <img src={contact.img} className="rounded-full" alt="Profile" />
        <div
          className="text-4xl font-semibold text-[#a37c29]"
          data-testid="nameHeading"
        >
          {contact.name}
        </div>
        <div className="text-xl text-[#b5bab5]" data-testid="phoneProfile">
          {contact.tel}
        </div>
        <div className="text-xl text-[#b5bab5]" data-testid="emailProfile">
          {contact.email}
        </div>
      </main>
      <div className="flex flex-col items-center justify-center">
        <EditButton contact={contact} />
        <DeleteButton contactId={contact.id} />
        <BackButton />
      </div>
    </>
  );
}

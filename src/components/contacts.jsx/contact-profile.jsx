import { useAsyncValue } from "react-router-dom";

export default function ContactProfile() {
  const contact = useAsyncValue();

  return (
    <>
      <div className="m-1 flex flex-col items-center justify-center gap-3">
        <img src={contact.img} className="rounded-full" alt="Profile" />
        <div className="text-4xl font-semibold text-[#a37c29]">
          {" "}
          {contact.name}
        </div>
        <div className="text-xl text-[#b5bab5]">{contact.tel}</div>
        <div className="text-xl text-[#b5bab5]">{contact.email}</div>
      </div>
    </>
  );
}

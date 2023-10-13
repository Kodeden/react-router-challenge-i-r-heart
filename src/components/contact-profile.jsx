import { useAsyncValue } from "react-router-dom";

export default function ContactProfile() {
  const contact = useAsyncValue();

  return (
    <>
      <div className="m-1 flex flex-col items-center justify-center gap-3">
        <img src={contact.img} className="rounded-full" alt="Profile" />
        <div className="text-4xl font-semibold text-[#c6d8ff]">
          {" "}
          {contact.name}
        </div>
        <div className="text-xl text-[#f2f3ae]">{contact.tel}</div>
        <div className="text-xl text-[#9ec5ab]">{contact.email}</div>
      </div>
    </>
  );
}

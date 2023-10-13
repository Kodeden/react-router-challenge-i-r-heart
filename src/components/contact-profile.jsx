import { useAsyncValue } from "react-router-dom";

export default function ContactProfile() {
    const contact = useAsyncValue();
  
  return (
    <>
      <div className="m-1 flex flex-col items-center justify-center gap-3">
        <img src={contact.img} className="rounded-full" alt="Profile" />
        <div className="text-[#c6d8ff]] text-4xl font-semibold"> {contact.name}</div>
        <div className="text-[#b89ed1] text-xl">{contact.tel}</div>
        <div className="text-[#924f81] text-xl">{contact.email}</div>
      </div> 
    </>
  );
}


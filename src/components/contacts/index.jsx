import useOrganizedList from "@hooks/use-organized-list";
import { useAsyncValue } from "react-router-dom";
import ContactName from "./contact-name.jsx";

export default function ContactsList() {
  const list = useAsyncValue();
  const { keys, values, setSearch } = useOrganizedList(list);

  return (
    <div className="flex flex-col gap-y-6 px-20">
      {keys.map((letter, index) => {
        return (
          <div key={index + 30}>
            <h1 className="pb-4 text-4xl font-bold text-[#a37c29]" key={index}>
              {letter}
            </h1>
            <ul className="text-[#b5bab5]">
              {values[index].map((contact) => {
                return <ContactName contact={contact} key={contact.id} />;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

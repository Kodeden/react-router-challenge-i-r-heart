import useOrganizedList from "@hooks/use-organized-list";
import { useAsyncValue } from "react-router-dom";
import ContactName from "./contact-name.jsx";

export default function ContactsList() {
  const list = useAsyncValue();
  const { keys, values, setSearch } = useOrganizedList(list);

  return (
    <div className="flex flex-col gap-y-6 px-20">
      <input
        type="text"
        className="formsInput"
        placeholder="🔍 Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>

      {keys.map((letter, index) => {
        const hasMatchingContacts = values[index].length > 0;

        if (hasMatchingContacts) {
          return (
            <div key={index + 30}>
              <h1
                className="pb-4 text-4xl font-bold text-[#a37c29]"
                key={index}
              >
                {letter}
              </h1>
              <ul className="text-[#b5bab5]">
                {values[index].map((contact) => {
                  return <ContactName key={contact.id} contact={contact} />;
                })}
              </ul>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

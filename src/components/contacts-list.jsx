import { Link, useAsyncValue } from "react-router-dom";
import {
  alphabetizeContactsByLastName,
  groupContactsByLetterUsingLastNames,
} from "../utils.js";

export default function ContactsList() {
  const list = useAsyncValue();
  const alphabeticallyOrderedContacts = alphabetizeContactsByLastName(list);

  const orderedList = groupContactsByLetterUsingLastNames(
    alphabeticallyOrderedContacts,
  );

  const keys = Object.keys(orderedList);
  const values = Object.values(orderedList);

  return (
    <div className="flex flex-col gap-y-6 px-20">
      {keys.map((letter, index) => (
        <div key={letter}>
          <h1 className="pb-4 text-4xl font-bold text-[#b56576]">{letter}</h1>
          <ul className="text-[#689689]">
            {values[index].map((contact) => (
              <li key={contact.id}>
                <Link to={`contacts/${contact.id}`}>{contact.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

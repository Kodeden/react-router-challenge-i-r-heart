import { Link, useAsyncValue } from "react-router-dom";
import { alphabetizeContactsByLastName, groupContactsByLetterUsingLastNames } from "../utils.js";

export default function ContactsList() {
    const list = useAsyncValue();
    const alphabeticallyOrderedContacts = alphabetizeContactsByLastName(list);

    const orderedList = groupContactsByLetterUsingLastNames(alphabeticallyOrderedContacts);

    const keys = Object.keys(orderedList);
    const values = Object.values(orderedList);


return (
        <div className="flex flex-col px-20 gap-y-4">
            {keys.map((letter, index) => (
                <div key={letter}>
                    <h1 className="text-[#c49531] font-bold text-4xl">{letter}</h1>
                    <ul className="text-[#e7cf9c]">
                        {values[index].map((contact) => (
                            <li key={contact.id}>
                                <Link to={`contacts/${contact.id}`}>{contact.name}</Link>
                            </li>
                        ))}
                    </ul>   
                </div>
            ))}
        </div>
    )
}

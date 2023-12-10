import { useState } from "react";
import {
  alphabetizeContactsByLastName,
  groupContactsByLetterUsingLastNames,
} from "../utils.js";

export default function useOrganizedList(list) {
  const [search, setSearch] = useState("");

  const alphabetizedOrderedList = groupContactsByLetterUsingLastNames(
    alphabetizeContactsByLastName(list),
  );

  const filterContacts = (contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase());

  const keys = Object.keys(alphabetizedOrderedList);
  const values = Object.values(alphabetizedOrderedList).map((contacts) =>
    contacts.filter(filterContacts),
  );

  return { keys, values, setSearch };
}

import { useState } from "react";
import {
  alphabetizeContactsByLastName,
  groupContactsByLettersUsingLastNames,
} from "../utils";

export default function useOrganizedList(list) {
  const [search, setSearch] = useState("");

  const alphabetizedOrderedList = groupContactsByLettersUsingLastNames(
    alphabetizeContactsByLastName(
      list.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase()),
      ),
    ),
  );

  const keys = Object.keys(alphabetizedOrderedList);
  const values = Object.values(alphabetizedOrderedList);

  return { keys, values, setSearch };
}

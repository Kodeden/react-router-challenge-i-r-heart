function initLetterGroups() {
  return Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  ).reduce((groups, letter) => {
    groups[letter] = [];
    return groups;
  }, {});
}

function getFirstLetterOfLastName(name) {
  const names = name.split(" ");
  return names[names.length - 1][0];
}

export const alphabetizeContactsByLastName = (contacts) => {
  // Within a React app, it's best to avoid mutations for performance and other reasons.
  const contactsCopy = structuredClone(contacts);
  return contactsCopy.sort((a, b) => {
    const aSplitName = a.name.split(" ");
    const bSplitName = b.name.split(" ");

    const aLastName = aSplitName[aSplitName.length - 1];
    const bLastName = bSplitName[bSplitName.length - 1];

    const lastNameComparison = aLastName.localeCompare(bLastName);

    // Comparing to `0` determines whether they are the same or not
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare#return_value

    if (lastNameComparison !== 0) {
      return lastNameComparison;
    }
    const aFirstName = aSplitName[0];
    const bFirstName = bSplitName[0];
    return aFirstName.localeCompare(bFirstName);
  });
};

export const groupContactsByLetterUsingLastNames = (contacts) => {
  const contactsCopy = structuredClone(contacts);
  return contactsCopy.reduce((groups, contact) => {
    const firstLetterOfLastName = getFirstLetterOfLastName(contact.name);
    groups[firstLetterOfLastName] = [
      ...(groups[firstLetterOfLastName] || []),
      contact,
    ];
    return groups;
  }, initLetterGroups());
};

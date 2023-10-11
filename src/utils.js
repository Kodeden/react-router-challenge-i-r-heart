function initLetterGroups() {
  return Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
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
  return contacts.sort((a, b) => {
    const aSplitName = a.name.split(" ");
    const bSplitName = b.name.split(" ");

    const aLastName = aSplitName[aSplitName.length - 1];
    const bLastName = bSplitName[bSplitName.length - 1];

    return aLastName.localeCompare(bLastName);
  });
};

export const groupContactsByLetterUsingLastNames = (contacts) => {
  return contacts.reduce((groups, contact) => {
    const firstLetterOfLastName = getFirstLetterOfLastName(contact.name);
    groups[firstLetterOfLastName] = [
      ...(groups[firstLetterOfLastName] || []),
      contact,
    ];
    return groups;
  }, initLetterGroups());
};

import {
  alphabetizeContactsByLastName,
  groupContactsByLetterUsingLastNames,
} from "../utils";

describe("alphabetize", () => {
  it("should alphabetize contacts by last name first and then first name (if applicable)", () => {
    const contacts = [
      { name: "Alice Johnson" },

      // 'Bob Smith' starts off in front of 'Alice Smith' :point_down::skin-tone-5:
      { name: "Bob Smith" },
      { name: "Charlie Brown" },
      { name: "Alice Smith" },
      { name: "Diana Ross" },
    ];

    const expectedResult = [
      { name: "Charlie Brown" },
      { name: "Alice Johnson" },
      { name: "Diana Ross" },
      { name: "Alice Smith" },
      { name: "Bob Smith" },
    ];

    const result = alphabetizeContactsByLastName(contacts);
    expect(result).toEqual(expectedResult);
  });

  it("should not mutate the original contacts array when alphabetizing", () => {
    const contacts = [
      { name: "Alice Johnson" },
      { name: "Bob Smith" },
      { name: "Charlie Brown" },
      { name: "Diana Ross" },
    ];

    // Create a deep copy of the original contacts array using structuredClone
    const originalContactsCopy = structuredClone(contacts);

    alphabetizeContactsByLastName(contacts);

    // Check if the original contacts array has been mutated
    expect(contacts).toEqual(originalContactsCopy);
  });
});

describe("Grouping", () => {
  it("should group contacts by the first letter of their last name", () => {
    const contacts = [
      { name: "Alice Johnson" },
      { name: "Bob Smith" },
      { name: "Charlie Brown" },
      { name: "Diana Ross" },
    ];

    const expectedResult = {
      A: [],
      B: [{ name: "Charlie Brown" }],
      C: [],
      D: [],
      E: [],
      F: [],
      G: [],
      H: [],
      I: [],
      J: [{ name: "Alice Johnson" }],
      K: [],
      L: [],
      M: [],
      N: [],
      O: [],
      P: [],
      Q: [],
      R: [{ name: "Diana Ross" }],
      S: [{ name: "Bob Smith" }],
      T: [],
      U: [],
      V: [],
      W: [],
      X: [],
      Y: [],
      Z: [],
    };

    const result = groupContactsByLetterUsingLastNames(contacts);
    expect(result).toEqual(expectedResult);
  });

  it("should handle multiple calls without side effects", () => {
    const contacts1 = [{ name: "Alice Johnson" }, { name: "Bob Smith" }];
    const contacts2 = [{ name: "Charlie Brown" }, { name: "Diana Ross" }];

    const expectedResult1 = {
      A: [],
      B: [],
      C: [],
      D: [],
      E: [],
      F: [],
      G: [],
      H: [],
      I: [],
      J: [{ name: "Alice Johnson" }],
      K: [],
      L: [],
      M: [],
      N: [],
      O: [],
      P: [],
      Q: [],
      R: [],
      S: [{ name: "Bob Smith" }],
      T: [],
      U: [],
      V: [],
      W: [],
      X: [],
      Y: [],
      Z: [],
    };
    const expectedResult2 = {
      A: [],
      B: [{ name: "Charlie Brown" }],
      C: [],
      D: [],
      E: [],
      F: [],
      G: [],
      H: [],
      I: [],
      J: [],
      K: [],
      L: [],
      M: [],
      N: [],
      O: [],
      P: [],
      Q: [],
      R: [{ name: "Diana Ross" }],
      S: [],
      T: [],
      U: [],
      V: [],
      W: [],
      X: [],
      Y: [],
      Z: [],
    };

    // Call the function with two different contact arrays
    const result1 = groupContactsByLetterUsingLastNames(contacts1);
    const result2 = groupContactsByLetterUsingLastNames(contacts2);

    // Check if the results match the expected results
    expect(result1).toEqual(expectedResult1);
    expect(result2).toEqual(expectedResult2);
  });
});

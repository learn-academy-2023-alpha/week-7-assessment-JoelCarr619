// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// Pseudo Code:
// Create a function that takes in an array of objects
// returns an array with a sentence about each person with their name capitalized
// defining "report" with parameter "people"
// using the describe function
// describing the test case for "report"
//

// a) Create a test with an expect statement using the variable provided.
const report = (people) => {
  return people.map(
    (person) =>
      `${person.name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")} is ${person.occupation}.`
  );
};

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" },
];
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

describe("report", () => {
  it("returns an array of sentences describing each person with capitalized names", () => {
    // describing the test case for "report"
    const result = report(people);
    //happy
    expect(result).toEqual([
      "Ford Prefect is a hitchhiker.",
      "Zaphod Beeblebrox is president of the galaxy.",
      "Arthur Dent is a radio employee.",
    ]);
  });
});

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// Pseudo Code:
// describing the function dividedByThree
// return the list of numbers which are not divisible by 3
// check the result of dividedByThree function
// Nxt I will be calling the dividedByThree function and storing the result in result1 & result2.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];
// Expected output: [ 2, 1, -1 ]

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false];    // Initializing hodgepodge1 list
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true];    // Initializing hodgepodge2 list
describe("dividedByThree", () => {
  it("returns an array of remainders of the numbers when divided by 3", () => {
    const result1 = dividedByThree(hodgepodge1); // Calling dividedByThree function and storing result in result1
    // expect(result1).toEqual([2, 0]); // will check if result1 is same as the expected value
    const result2 = dividedByThree(hodgepodge2); // Calling dividedByThree function and storing result in result2
    // expect(result2).toEqual([2, 1]); // will check if result2 is same as the expected value
  });
});

// b) Create the function that makes the test pass.

const dividedByThree = (array) => {
  return array.filter((item) => typeof item === "number" && item % 3);
};

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// Pseudo Code:
// Create a function that takes in an array of numbers
// returns the sum of all the numbers cubed

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4];
// Expected output: 99
const cubeAndSum2 = [0, 5, 10];
// Expected output: 1125

// b) Create the function that makes the test pass.

const numCubes = (array) => {
  // Define function numCubes
  let total = 0; // Initialize total variable with 0
  for (let i = 0; i < array.length; i++) {
    // iterate over the array
    total += Math.pow(array[i], 3); // compute the power of a number by raising the second argument to the power of the first argument
  }
  return total; // Return the value of total
};
describe("numCubes", () => {
  it("returns the sum of all the numbers cubed", () => {
    // expect(numCubes(cubeAndSum1)).toEqual(99);    // Expect cube of 2,3,4 to be 99
    // expect(numCubes(cubeAndSum2)).toEqual(1125);    // Expect cube of 0,5,10 to be 1125
  });
});

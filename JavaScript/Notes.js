
<------------------------------------------------------------------------------>

<-- Comments -->

// This is a single-line comment

/* This is multiple Line Comment */  


<------------------------------------------------------------------------------>

<-- Data types -->

/*
JavaScript Data Types:

1. String
  - Represents textual data.
  - Example: let name = "Alice";

2. Number
  - Represents both integer and floating-point numbers.
  - Example: let age = 25; let price = 19.99;

3. Boolean
  - Represents true or false values.
  - Example: let isActive = true;

4. Undefined
  - A variable that has been declared but not assigned a value.
  - Example: let x; // x is undefined

5. Null
  - Represents the intentional absence of any value.
  - Example: let data = null;

6. Object
  - Used to store collections of data and more complex entities.
  - Example: let person = { name: "Bob", age: 30 };

7. Symbol (ES6)
  - Represents a unique identifier.
  - Example: let id = Symbol("id");

Note: typeof operator can be used to check the data type.
*/

<------------------------------------------------------------------------------>

<-- Variables Declaration -->

// Variable Declarations in JavaScript

// 1. var
// - Function-scoped or globally scoped.
// - Can be re-declared and updated.
// - Hoisted (initialized with undefined).
var oldVariable = "I am a var variable";
oldVariable = "I can be updated";
var oldVariable = "I can be re-declared";

// 2. let
// - Block-scoped.
// - Can be updated but not re-declared in the same scope.
// - Not hoisted (cannot access before declaration).
let age = 25;
age = 26; // OK
// let age = 30; // Error: already declared in this scope

// 3. const
// - Block-scoped.
// - Cannot be updated or re-declared.
// - Must be initialized at declaration.
// - For objects/arrays, the reference cannot change, but contents can be modified.
const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable

const person = { name: "Alice" };
person.name = "Bob"; // Allowed: modifying object property

const numbers = [1, 2, 3];
numbers.push(4); // Allowed: modifying array

// Summary:
// - Use 'let' for variables that will change.
// - Use 'const' for variables that should not be reassigned.
// - Avoid 'var' in modern JavaScript.


// ***** Pro Tip  ***** //

const myObj = {
  name: 'Ahmed',
  age: 25,
  country: 'Egypt'
}

let a = myObj.name
let b = myObj.age
let c = myObj.country

// This is the same exactly like above but more easier to assign values to Variables
const {name: i ,age: j , country: k} = myObj

console.log(i,j,k)

// For Nested Objects
const tempForcast = {
  today: {min: 75, max: 99},
  tommorrow: {min: 63, max: 85}
}

const {today: {min : a}} = tempForcast






<------------------------------------------------------------------------------>

                        <-- Shortened Operators -->

let a = 5;

a++; // a = 6
a--; // a = 4

a += 1; //6
a -= 1; //4

<------------------------------------------------------------------------------>

                        <-- Find Name Length -->

let name = "Alice";
let nameLength = name.length; // 5
console.log("Name length:", nameLength);

<------------------------------------------------------------------------------>

                        <-- Bracket Notation + Slicing -->

            // Bracket Notation Example
            let person = {
              firstName: "Alice",
              lastName: "Smith"
            };

            console.log(person["firstName"]); // "Alice"
            console.log(person["lastName"]);  // "Smith"
            
            /*---------------------------------------------*/

            // Slicing Example
            let str = "JavaScript";
            // slice(start, end) returns substring from start to 'end-1'
            let sliced = str.slice(0, 4); // "Java"
            console.log("Sliced string:", sliced);

            // Getting Last Letter
            var myName = "Ahmed Saeed Kemo"
            var lastLetterName = ""

            console.log(myName[myName.length - 1])


<------------------------------------------------------------------------------>

                            <-- Array -->

            /*
            JavaScript Arrays:

            - Arrays are used to store multiple values in a single variable.
            - Elements in arrays are ordered and accessed by index (starting from 0).
            */

            // Creating an array
            let fruits = ["Apple", "Banana", "Cherry"];

            // Accessing elements
            console.log(fruits[0]); // "Apple"
            console.log(fruits[2]); // "Cherry"

            // Modifying elements
            fruits[1] = "Blueberry";
            console.log(fruits); // ["Apple", "Blueberry", "Cherry"]

            // Array length
            console.log(fruits.length); // 3

            // Adding elements
            fruits.push("Orange"); // Adds to end
            fruits.unshift("Strawberry"); // Adds to start
            console.log(fruits); // ["Strawberry", "Apple", "Blueberry", "Cherry", "Orange"]

            // Removing elements
            fruits.pop(); // Removes last element
            fruits.shift(); // Removes first element
            console.log(fruits); // ["Apple", "Blueberry", "Cherry"]

            // Iterating over arrays
            for (let i = 0; i < fruits.length; i++) {
              console.log(fruits[i]);
            }

            // Using forEach
            fruits.forEach(function(fruit) {
              console.log(fruit);
            });

            // Array methods
            let numbers = [1, 2, 3, 4, 5];

            // map: create new array by applying a function to each element
            let squared = numbers.map(num => num * num); // [1, 4, 9, 16, 25]

            // filter: create new array with elements that pass a test
            let even = numbers.filter(num => num % 2 === 0); // [2, 4]

            // find: returns first element that matches condition
            let firstEven = numbers.find(num => num % 2 === 0); // 2

            // includes: checks if array contains a value
            console.log(fruits.includes("Apple")); // true

            // indexOf: returns index of value, -1 if not found
            console.log(fruits.indexOf("Cherry")); // 2

            // slice: returns a shallow copy of a portion of an array
            let someFruits = fruits.slice(1, 3); // ["Blueberry", "Cherry"]

            // splice: adds/removes elements
            fruits.splice(1, 1, "Mango"); // removes 1 at index 1, inserts "Mango"
            console.log(fruits); // ["Apple", "Mango", "Cherry"]

            // Joining array elements into a string
            let fruitString = fruits.join(", "); // "Apple, Mango, Cherry"

            // Multidimensional arrays
            let matrix = [
              [1, 2],
              [3, 4]
            ];
            console.log(matrix[1][0]); // 3

          

<------------------------------------------------------------------------------>

                          <-- Functions -->

                          /*
                          JavaScript Functions:

                          - Functions are reusable blocks of code that perform a specific task.
                          - They can take inputs (parameters) and return outputs (return value).
                          - Functions help organize code and avoid repetition.
                          */

                          // Function Declaration
                          function greet(name) {
                            return "Hello, " + name + "!";
                          }

                          console.log(greet("Alice")); // "Hello, Alice!"

                          // Function Expression (anonymous function assigned to a variable)
                          const add = function(a, b) {
                            return a + b;
                          };

                          console.log(add(2, 3)); // 5

                          // Arrow Function (ES6+)
                          const multiply = (x, y) => x * y;

                          console.log(multiply(4, 5)); // 20

                          // Default Parameters
                          function sayHello(name = "Guest") {
                            console.log("Hello, " + name + "!");
                          }

                          sayHello(); // "Hello, Guest!"
                          sayHello("Bob"); // "Hello, Bob!"

                          // Returning values
                          function square(n) {
                            return n * n;
                          }

                          let result = square(6); // 36

                          // Function with multiple parameters
                          function sum(a, b, c) {
                            return a + b + c;
                          }

                          console.log(sum(1, 2, 3)); // 6

                          // Callback Functions
                          function processUserInput(callback) {
                            let name = "Charlie";
                            callback(name);
                          }

                          processUserInput(function(name) {
                            console.log("Welcome, " + name + "!");
                          });

                          // Immediately Invoked Function Expression (IIFE)
                          (function() {
                            console.log("This runs immediately!");
                          })();

                          // Functions as object methods
                          const calculator = {
                            add: function(x, y) {
                              return x + y;
                            },
                            subtract(x, y) {
                              return x - y;
                            }
                          };

                          console.log(calculator.add(10, 5)); // 15
                          console.log(calculator.subtract(10, 5)); // 5

                          // Summary:
                          // - Use functions to encapsulate reusable logic.
                          // - Functions can be declared, expressed, or written as arrow functions.
                          // - Functions can take parameters and return values.
                          
                          
                          // Parameters: a, b
                          // This is called the "function parameter list" or simply "parameters" of the function.
                          const subtract = (a, b) => a - b;
                          console.log(subtract(10, 3)); // 7


                          <------------------------------------------------------------------------------>

                                        <-- JSON (JavaScript Object Notation) -->

                          /*
                          JSON (JavaScript Object Notation):

                          - JSON is a lightweight data-interchange format.
                          - It is easy for humans to read and write, and easy for machines to parse and generate.
                          - Commonly used for data exchange between a server and a web application.
                          - Based on a subset of JavaScript object syntax, but is language-independent.

                          JSON Syntax Rules:
                          - Data is in name/value pairs: "name": value
                          - Data is separated by commas
                          - Curly braces {} hold objects
                          - Square brackets [] hold arrays
                          - Keys must be strings (in double quotes)
                          - Values can be strings, numbers, objects, arrays, true, false, or null

                          Example JSON object:
                          {
                            "name": "Alice",
                            "age": 25,
                            "isStudent": false,
                            "courses": ["Math", "Science"]
                          }

                          Working with JSON in JavaScript:
                          */

                          // JavaScript object
                          const user = {
                            name: "Alice",
                            age: 25,
                            isStudent: false,
                            courses: ["Math", "Science"]
                          };

                          // Convert JS object to JSON string
                          const jsonString = JSON.stringify(user);
                          console.log(jsonString); // '{"name":"Alice","age":25,"isStudent":false,"courses":["Math","Science"]}'

                          // Parse JSON string to JS object
                          const parsedUser = JSON.parse(jsonString);
                          console.log(parsedUser.name); // "Alice"

                          /*
                          JSON Dependencies:
                          - No external dependencies are needed to use JSON in JavaScript.
                          - JSON is built-in: use JSON.stringify() and JSON.parse().
                          - In other languages, you may need a JSON library to parse/generate JSON.
                          */


                          <------------------------------------------------------------------------------>

                                      <-- If Statement -->

                          /*
                          JavaScript If Statements:

                          - Used to perform different actions based on different conditions.
                          - The condition inside the parentheses is evaluated as true or false.
                          */
                          
                          // To Show Value In The Returned Value Use 'Backticks' Over the message => '${}' 
                          if (temperature > 25) {
                            console.log(`It's hot outside! (temperature: ${temperature})`);
                          }

                          let temperature = 30;

                          // Basic if statement
                          if (temperature > 25) {
                            console.log("It's hot outside!");
                          }

                          // if...else statement
                          if (temperature < 15) {
                            console.log("It's cold outside!");
                          } else {
                            console.log("It's not too cold.");
                          }

                          // if...else if...else statement
                          let score = 85;

                          if (score >= 90) {
                            console.log("Grade: A");
                          } else if (score >= 80) {
                            console.log("Grade: B");
                          } else if (score >= 70) {
                            console.log("Grade: C");
                          } else {
                            console.log("Grade: D or below");
                          }

                          // Nested if statements
                          let isRaining = true;
                          let hasUmbrella = false;

                          if (isRaining) {
                            if (hasUmbrella) {
                            console.log("You can go outside.");
                            } else {
                            console.log("Better stay inside.");
                            }
                          }

                          // Shorthand: Ternary Operator
                          let age = 18;
                          let canVote = (age >= 18) ? "Yes" : "No";
                          console.log("Can vote?", canVote);

                          // Falsy values in JavaScript: false, 0, "", null, undefined, NaN
                          let name = "";

                          if (name) {
                            console.log("Name is not empty.");
                          } else {
                            console.log("Name is empty.");
                          }

                          /*
                          Summary:
                          - Use if statements to control the flow of your program based on conditions.
                          - else and else if provide alternative branches.
                          - The ternary operator is a concise alternative for simple conditions.
                          */

                          <------------------------------------------------------------------------------>

                                      <-- Comparison and Logical Operators -->

                          /*
                          Comparison Operators:
                          - Used to compare two values and return a boolean (true/false).

                          1. ==   (Equality, loose)
                             - Checks if values are equal after type coercion(Means It will convert both as the same data type).
                             - Example: 5 == "5" // true

                          2. ===  (Strict Equality)
                             - Checks if values and types are equal.
                             - Example: 5 === "5" // false

                          3. !=   (Inequality, loose)
                             - Checks if values are not equal after type coercion.
                             - Example: 5 != "5" // false

                          4. !==  (Strict Inequality)
                             - Checks if values or types are not equal.
                             - Example: 5 !== "5" // true

                          5. >    (Greater than)
                             - Example: 10 > 5 // true

                          6. <    (Less than)
                             - Example: 3 < 7 // true

                          7. >=   (Greater than or equal to)
                             - Example: 5 >= 5 // true

                          8. <=   (Less than or equal to)
                             - Example: 4 <= 3 // false
                          */

                          /*
                          Logical Operators:
                          - Used to combine or invert boolean values.

                          1. &&   (Logical AND)
                             - Returns true if both operands are true.
                             - Example: true && false // false

                          2. ||   (Logical OR)
                             - Returns true if at least one operand is true.
                             - Example: true || false // true

                          3. !    (Logical NOT)
                             - Inverts the boolean value.
                             - Example: !true // false
                          */

                          // Examples:
                          console.log(5 == "5");    // true
                          console.log(5 === "5");   // false
                          console.log(10 > 3);      // true
                          console.log(4 <= 2);      // false
                          console.log(true && false); // false
                          console.log(true || false); // true
                          console.log(!false);        // true

          <------------------------------------------------------------------------------>

                          <-- Switch Case Statement -->

                          /*
                          JavaScript Switch Case Statement:

                          - The switch statement is used to perform different actions based on different conditions.
                          - It evaluates an expression and matches its value to a case clause, executing statements associated with that case.
                          - Use switch when you have many possible values for a single variable.

                          Syntax:
                          switch(expression) {
                            case value1:
                            // code block
                            break;
                            case value2:
                            // code block
                            break;
                            default:
                            // code block
                          }
                          */

                          // Example: Day of the week
                          let day = 3;
                          let dayName;

                          switch (day) {
                            case 1:
                            dayName = "Monday";
                            break;
                            case 2:
                            dayName = "Tuesday";
                            break;
                            case 3:
                            dayName = "Wednesday";
                            break;
                            case 4:
                            dayName = "Thursday";
                            break;
                            case 5:
                            dayName = "Friday";
                            break;
                            case 6:
                            dayName = "Saturday";
                            break;
                            case 7:
                            dayName = "Sunday";
                            break;
                            default:
                            dayName = "Invalid day";
                          }

                          console.log("Day name:", dayName); // "Day name: Wednesday"

                          // Example: Grouping cases
                          let grade = "B";
                          let message;

                          switch (grade) {
                            case "A":
                            message = "Excellent!";
                            break;
                            case "B":
                            case "C":
                            message = "Well done!";
                            break;
                            case "D":
                            message = "You passed.";
                            break;
                            case "F":
                            message = "Better try again.";
                            break;
                            default:
                            message = "Unknown grade.";
                          }

                          console.log("Grade message:", message); // "Grade message: Well done!"

                          /*
                          Notes:
                          - Use break to prevent fall-through (executing the next case).
                          - If break is omitted, execution continues to the next case.
                          - The default case is optional and runs if no case matches.
                          - switch uses strict comparison (===) for case matching.
                          - switch is best for checking a variable against many constant values.
                          */

                          function getFruitColor(fruit) {
                            let color;
                            switch (fruit) {
                              case "Apple":
                                color = "Red";
                                break;
                              case "Banana":
                                color = "Yellow";
                                break;
                              case "Orange":
                                color = "Orange";
                                break;
                              case "Grape":
                                color = "Purple";
                                break;
                              default:
                                color = "Unknown";
                            }
                            return color;
                          }

                          console.log(getFruitColor("Banana")); // "Yellow"
                          console.log(getFruitColor("Grape"));  // "Purple"
                          console.log(getFruitColor("Kiwi"));   // "Unknown"

    <------------------------------------------------------------------------------>

                          <-- Object -->
                        
                          /*
                          JavaScript Objects:

                          - Objects are collections of key-value pairs (properties).
                          - Keys are strings (or Symbols), and values can be any data type.
                          - Objects are used to represent real-world entities and store structured data.
                          */

                          // Creating an object
                          let car = {
                            brand: "Toyota",
                            model: "Corolla",
                            year: 2022,
                            isElectric: false,
                            features: ["Air Conditioning", "Bluetooth", "Backup Camera"],
                            // Method (function inside object)
                            start: function() {
                              console.log("Car started!");
                            }
                          };

                          // Accessing properties
                          console.log(car.brand); // "Toyota"
                          console.log(car["model"]); // "Corolla"

                          // Modifying properties
                          car.year = 2023;
                          car["isElectric"] = true;

                          // Adding new properties
                          car.color = "Blue";

                          // Deleting properties
                          delete car.features;
                          delete car["features"];

                          // Calling methods
                          car.start(); // "Car started!"

                          // Checking if a property exists
                          console.log("model" in car); // true

                          // Iterating over object properties
                          for (let key in car) {
                            console.log(key + ":", car[key]);
                          }

                          // Object.keys, Object.values, Object.entries
                          console.log(Object.keys(car));   // ["brand", "model", "year", "isElectric", "start", "color"]
                          console.log(Object.values(car)); // ["Toyota", "Corolla", 2023, true, function, "Blue"]
                          console.log(Object.entries(car)); // [["brand", "Toyota"], ["model", "Corolla"], ...]

                          // Object destructuring
                          const { brand, model } = car;
                          console.log(brand, model); // "Toyota" "Corolla"

                          // Nested objects  

                          Note: When accessing nested object properties where a key contains a whitespace (e.g., "first name"), you must use bracket notation with quotes:
                          
                          /*
                          let person = {
                            "first name": "Alice",
                            address: {
                              "street name": "Main St"
                            }
                          };

                          console.log(person["first name"]); // "Alice"
                          console.log(person.address["street name"]); // "Main St"

                          // Dot notation will NOT work for keys with spaces:
                          // person.first name // Syntax error
                          */
                          let student = {
                            name: "Alice",
                            address: {
                              city: "Cairo",
                              zip: 12345
                            }
                          };
                          console.log(student.address.city); // "Cairo"

                          // Object methods (ES6 shorthand)
                          const user = {
                            name: "Bob",
                            greet() {
                              console.log("Hello, " + this.name + "!");
                            }
                          };
                          user.greet(); // "Hello, Bob!"

                          /*
                          Use Cases: If Statement and Functions with Objects

                          1. Using if statement with object properties:
                          */
                          if (car.isElectric) {
                            console.log("This car is electric.");
                          } else {
                            console.log("This car is not electric.");
                          }

                          /*
                          2. Function that operates on an object:
                          */
                          function printCarInfo(carObj) {
                            if ("brand" in carObj && "model" in carObj) {
                              console.log(`Car: ${carObj.brand} ${carObj.model}`);
                            } else {
                              console.log("Incomplete car information.");
                            }
                          }

                          printCarInfo(car); // Example usage

                          /*
                          3. Adding a method to check a property:
                          */
                          car.isModern = function() {
                            return this.year >= 2020;
                          };

                          if (car.isModern()) {
                            console.log("The car is modern.");
                          } else {
                            console.log("The car is not modern.");
                          }

                          /*
                          Example: Array of Objects

                          - Arrays can store objects as elements.
                          - Useful for representing collections of structured data (e.g., list of users, products, etc.).
                          */

                          let students = [
                            { name: "Alice", age: 20, grade: "A" },
                            { name: "Bob", age: 22, grade: "B" },
                            { name: "Charlie", age: 19, grade: "C" }
                          ];

                          // Accessing objects in the array
                          console.log(students[0].name); // "Alice"

                          // Iterating over the array of objects
                          students.forEach(student => {
                            console.log(`${student.name} is ${student.age} years old and got grade ${student.grade}`);
                          });

                          // Filtering students with grade "A"
                          let topStudents = students.filter(student => student.grade === "A");
                          console.log("Top students:", topStudents);
                          
                          // Important
                          records[id][key] = records[id][key] || [] // to ensure it has an existed array otherwise make an empty ond

                          records[id][key].push(value)

                          /*
                          Summary:
                          - Objects store related data and functionality together.
                          - Use dot or bracket notation to access properties.
                          - Methods are functions stored as object properties.
                          - Objects can be nested and iterated over.
                          */


                          <------------------------------------------------------------------------------>

                                      <-- Iteration Loops Syntax -->

                          /*
                          JavaScript provides several types of loops for iteration:

                          1. for loop
                             - Used when the number of iterations is known.
                             Syntax:
                             for (initialization; condition; increment) {
                             // code block
                             }
                             Example:
                             for (let i = 0; i < 5; i++) {
                             console.log(i);
                             }

                          2. while loop
                             - Used when the number of iterations is not known in advance.
                             Syntax:
                             while (condition) {
                             // code block
                             }
                             Example:
                             let count = 0;
                             while (count < 5) {
                             console.log(count);
                             count++;
                             }

                          3. do...while loop
                             - Similar to while, but always runs at least once.
                             Syntax:
                             do {
                             // code block
                             } while (condition);
                             Example:
                             let num = 0;
                             do {
                             console.log(num);
                             num++;
                             } while (num < 5);

                          4. for...of loop (ES6+)
                             - Iterates over iterable objects (arrays, strings, etc.).
                             Syntax:
                             for (const item of iterable) {
                             // code block
                             }
                             Example:
                             const arr = [10, 20, 30];
                             for (const value of arr) {
                             console.log(value);
                             }

                          5. for...in loop
                             - Iterates over enumerable properties of an object.
                             Syntax:
                             for (const key in object) {
                             // code block
                             }
                             Example:
                             const obj = {a: 1, b: 2};
                             for (const key in obj) {
                             console.log(key, obj[key]);
                             }
                          */

              <------------------------------------------------------------------------------>

                             <-- Data Type Conversion Methods -->

                          // Type Conversion Methods in JavaScript

                          // 1. String Conversion
                          let num = 123;
                           let strNum = String(num); // "123" (explicit conversion)
                          let boolVal = true;
                          let strBool = String(boolVal); // "true"

                          // 2. Number Conversion
                          let str = "456";
                          let numStr = Number(str); // 456 (explicit conversion, returns NaN if not a valid number)
                          let strFloat = "3.14";
                          let numFloat = parseFloat(strFloat); // 3.14 (parses until invalid char, returns NaN if not a number)
                          let strInt = "42";
                          let numInt = parseInt(strInt); // 42 (parses integer part only, can specify radix)

                          // 3. Boolean Conversion
                          let zero = 0;
                          let boolZero = Boolean(zero); // false (explicit conversion)
                          let nonEmptyStr = "hello";
                          let boolStr = Boolean(nonEmptyStr); // true

                          // 4. toString() method
                          let arr = [1, 2, 3];
                          let arrStr = arr.toString(); // "1,2,3" (works on objects, arrays, numbers)
                          let n = 10;
                          let nStr = n.toString(); // "10"

                          // 5. JSON Conversion
                          let obj = { name: "Alice" };
                          let jsonStr = JSON.stringify(obj); // '{"name":"Alice"}' (object/array to JSON string)
                          let parsedObj = JSON.parse(jsonStr); // { name: "Alice" } (JSON string to object/array)

                          // Differences and Notes:
                          // - String(value) vs value.toString(): String() works on any value (including null/undefined), toString() is a method and will error on null/undefined.
                          // - Number(value) vs parseInt/parseFloat: Number() converts the whole string (returns NaN if invalid), parseInt/parseFloat parse as much as possible from the start.
                          // - Boolean(value): Converts falsy values (0, "", null, undefined, NaN, false) to false, everything else to true.
                          // - JSON.stringify()/JSON.parse() are for objects/arrays <-> JSON strings, not for primitive type conversion.


                          // Examples:
                          console.log(String(100));         // "100"
                          console.log((100).toString());    // "100"
                          console.log(Number("99.5"));      // 99.5
                          console.log(parseInt("99.5"));    // 99
                          console.log(Boolean(""));         // false
                          console.log(JSON.stringify([1,2])); // "[1,2]"

        <------------------------------------------------------------------------------>

                             <-- Destructuring in JavaScript -->

                          /*

                          Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.
                          */

                          // 1. Array Destructuring
                          const arr = [1, 2, 3, 4];
                          const [first, second, ...rest] = arr;
                          console.log(first, second); // 1 2
                          console.log(rest); // [3, 4]

                          // Skipping elements
                          const [a, , b] = [10, 20, 30];
                          console.log(a, b); // 10 30

                          // Swapping variables
                          let x = 5, y = 10;
                          [x, y] = [y, x];
                          console.log(x, y); // 10 5

                          // 2. Object Destructuring
                          const userObj = { name: "Alice", age: 25, country: "Egypt" };
                          const { name, age } = userObj;
                          console.log(name, age); // Alice 25

                          // Renaming variables
                          const { country: nation } = userObj;
                          console.log(nation); // Egypt

                          // Default values
                          const { city = "Cairo" } = userObj;
                          console.log(city); // Cairo

                          // 3. Nested Object Destructuring
                          const profile = {
                            info: {
                              username: "bob",
                              details: { email: "bob@email.com" }
                            }
                          };
                          const { info: { username, details: { email } } } = profile;
                          console.log(username, email); // bob bob@email.com

                          // 4. Destructuring in Function Parameters
                          function greetUser({ name, age }) {
                            console.log(`Hello ${name}, age ${age}`);
                          }
                          greetUser(userObj); // Hello Alice, age 25

                          // 5. Array of Objects Destructuring
                          const users = [
                            { id: 1, username: "a" },
                            { id: 2, username: "b" }
                          ];
                          const [{ username: firstUser }, { username: secondUser }] = users;
                          console.log(firstUser, secondUser); // a b

                          // 6. Destructuring with Rest
                          const obj = { a: 1, b: 2, c: 3 };
                          const { a: firstA, ...others } = obj;
                          console.log(firstA); // 1
                          console.log(others); // { b: 2, c: 3 }

                          // 7. Destructuring Strings
                          const [char1, char2] = "hi";
                          console.log(char1, char2); // h i

                          // 8. Destructuring in Loops
                          const people = [
                            { name: "Tom", age: 30 },
                            { name: "Jerry", age: 28 }
                          ];
                          for (const { name, age } of people) {
                            console.log(name, age);
                          }

                          // 9. Function Return Value Destructuring
                          function getCoords() {
                            return { x: 10, y: 20 };
                          }
                          const { x: posX, y: posY } = getCoords();
                          console.log(posX, posY); // 10 20

                          // 10. Nested Array Destructuring
                          const nestedArr = [1, [2, 3]];
                          const [num1, [num2, num3]] = nestedArr;
                          console.log(num1, num2, num3); // 1 2 3


                          // Simple Field
                          const myData = (name,age,id) => ({name,age,id})

                          console.log(myData('Ahmed',22,1589))

          <------------------------------------------------------------------------------>

                             <-- Filter  |  Map   |    Reduce -->

                          /*
                          Parameters in Array Methods: filter, map, reduce

                          1. filter:
                            - Callback function receives three parameters:
                              (element, index, array)
                            - Example:
                              numbersArr.filter((num, idx, arr) => num % 2 === 0);

                          2. map:
                            - Callback function receives three parameters:
                              (element, index, array)
                            - Example:
                              numbersArr.map((num, idx, arr) => num * num);

                          3. reduce:
                            - Callback function receives four parameters:
                              (accumulator, currentValue, index, array)
                            - Example:
                              numbersArr.reduce((acc, curr, idx, arr) => acc + curr, 0);

                          Summary:
                          - filter/map: (element, index, array)
                          - reduce: (accumulator, currentValue, index, array)
                          */  // Sample array
                          const numbersArr = [1, 2, 3, 4, 5, 6];

                          // filter: keep even numbers
                          const evens = numbersArr.filter(num => num % 2 === 0);
                          console.log("Even numbers:", evens); // [2, 4, 6]

                          // map: square each number
                          const squares = numbersArr.map(num => num * num);
                          console.log("Squares:", squares); // [1, 4, 9, 16, 25, 36]

                          // reduce: sum all numbers
                          const sum = numbersArr.reduce((acc, curr) => acc + curr, 0);
                          console.log("Sum:", sum); // 21

                          // Chaining example: sum of squares of even numbers
                          const sumSquaresEven = numbersArr
                            .filter(num => num % 2 === 0)
                            .map(num => num * num)
                            .reduce((acc, curr) => acc + curr, 0);
                          console.log("Sum of squares of even numbers:", sumSquaresEven); // 56
                          
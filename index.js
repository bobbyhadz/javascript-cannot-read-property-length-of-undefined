// Cannot read properties of undefined (reading 'length') in JS

// EXAMPLE 1 - Use an `if` statement to avoid the error

// ✅ with arrays
const arr = [];

if (arr) {
  console.log(arr.length); // 👉️ 0
}

// // ------------------------------------------

// // ✅ with strings
// const str = 'abc';

// if (str) {
//   console.log(str.length); // 👉️ 3
// }

// ------------------------------------------------------------------

// // EXAMPLE 2 - Provide a fallback value if the value is undefined

// const fromDb = undefined;

// // ✅ with Arrays
// const arr = fromDb || [];
// console.log(arr.length); // 👉️ 0

// // -----------------------------------------------

// // ✅ with Strings
// const str = fromDb || '';
// console.log(str.length); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using the optional chaining operator (?.)

// const arr = undefined;

// const result = arr?.length || 0;
// console.log(result); // 👉️ 0

// console.log(arr?.length); // 👉️ undefined

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if the value is of the correct type before accessing `length`

// const value = undefined;

// // ✅ Check if array before accessing length
// if (Array.isArray(value)) {
//   const result = value.length;
//   console.log(result);
// } else {
//   console.log('The value is NOT an array');
// }

// // ✅ Check if string before accessing length
// if (typeof value === 'string') {
//   const result = value.length;
//   console.log(result);
// } else {
//   console.log('The value is NOT a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Providing a fallback value in place to avoid the error

// const fromDb = undefined;

// const result1 = (fromDb || []).length;
// console.log(result1); // 👉️ 0

// const result2 = (fromDb || '').length;
// console.log(result2); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 6 - Using the ternary operator to avoid the error

// const str = undefined;

// const result = str ? str.length : 0;
// console.log(result); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 7 - Access arrays only at indices that exist (or use optional chaining ?.)

// const arr = ['bobby', 'hadz', 'com'];

// const result = arr[100]?.length;
// console.log(result); // 👉️ undefined

// ------------------------------------------------------------------

// // EXAMPLE 8 - Solve the error when working with classes

// class Person {
//   first = '';

//   getLength() {
//     return this.first.length;
//   }
// }

// const p1 = new Person();
// console.log(p1.getLength()); // 👉️ 0

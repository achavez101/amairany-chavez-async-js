

// Asynchronicity of then()
const resolvedPromise = Promise.resolve(33);
console.log(resolvedPromise);

const thenPromise = resolvedPromise.then((value) => {
    console.log(`this gets called after the end of the main stack, the value received is: ${value}, the value returned is: ${value + 1}`,
    );
    return value + 1;
});
console.log(thenPromise);

setTimeout(() => {
    console.log(thenPromise);
});


// Chaining

// function fetchCurrentData() {
//     // The fetch() API returns a Promise. This function
//     // exposes a similar API, except the fulfillment
//     // value of this function's Promise has had more
//     // work done on it.
//     return fetch("current-data.json").then((response) => {
//       if (response.headers.get("content-type") !== "application/json") {
//         throw new TypeError();
//       }
//       const j = response.json();
//       // maybe do something with j
  
//       // fulfillment value given to user of
//       // fetchCurrentData().then()
//       return j;
//     });
//   }

// returned value being fulfilled / rejected if onFulfilled returns a promise
// function resolveLater(resolve, reject) {
//     setTimeout(() => {
//         resolve(10);
//     }, 1000);
// }
// function rejectLater(resolve, reject) {
//     setTimeout(() => {
//         reject(new Error("Error"));
//     }, 1000);
// }
// const p1 = Promise.resolve("word");
// const p2 = p1.then(() => {
//     // return promise that will be resolved to 10 after 1 second
//     return new Promise(resolveLater);
// });
// p2.then(
//     (v) => {
//         console.log("resolved", v); // "resolved", 10
//     }, 
//     (e) => {
//         // not called
//         console.error("rejected", e);
//     },
// );
// const p3 = p1.then(() => {
//     // return promise here, that will be rejected with 'Error' after 1 second
//     return new Promise(rejectLater);
// });
// p3.then(
//     (v) => {
//         // not called
//         console.log("resolved", v);
//     }, 
//     (e) => {
//         console.error("rejected", e); // "rejected", 'Error'
//     },
// );

// resolving a rejection
// Promise.reject()
//     .then(
//         () => 99,
//         () => 42, 
//     ) // onRejected returns 42 which is wrapped in a fulfilled Promise
//     .then((solution) => console.log(`Resolved with ${solution}`)); // Fulfilled with 42


// Promise.resolve()
//     .then(() => {
//         // makes .then() return a rejected promise
//         throw new Error("Wrong!");
//     })
//     .then(
//         () => {
//             console.log("Not called.");
//         }, 
//         (error) => {
//             console.error(`onRejected function called: ${error.message}`);
//         },
//     );

// const p2 = new Promise((resolve, reject) => {
//     resolve(1);
// });
// p2.then((value) => {
//     console.log(value); // prints 1
//     return value + 1;
// }).then(value) => {
//     console.log(value, "-A synchronous value works"); // 2 - A synchronous value works
// };
// p2.then((value) => {
//     console.log(value); // 1
// });





// Promise.resolve("word")
// // receive "word", concatenate "search" to it, and resolve that to the next then
// .then(
//     (string) =>
//         new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 string += "search";
//                 resolve(string);
//             }, 1);
//         }),
// )
// // receive "wordsearch", register a callback function to work on that string
// // and print it to the console, but not before returning the unworked on
// // string to the next then
// .then((string) => {
//     setTimeout(() => {
//         string += "ing";
//         console.log(string); // wordsearching
//     }, 1);
//     return string;
// })
// // print helpful messages about how the code section will run
// // before the string is processed by the mocked asynchronous code in the block
// .then((string) => {
//     console.log("Last then: oops...didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising", );
//     // the `string` will not have the 'ing' bit in it at this point
//     // this will happen because of setTimeout function
//     // print string if it works
//     console.log(string);
// });
// logs
// Last then: oops...didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// ex-practice-promises.js:31 wordsearch
// ex-practice-promises.js:20 wordsearching


// Non-function as either parameter
// promise that if there is a resolve, then it will print out a 1
// Promise.resolve(1).then(console.log);
// promise that if there is a reject, then it will print out the respective message
// Promise.reject(1).then(2, 2).then(console.log, console.log);

// Using the then() method
// creating a new promise
// const p1 = new Promise((resolve, reject) => {
//     resolve("Success!");
// });
// // using the then() method to pass in promise
// p1.then(
//     // passing in value
//     (value) => {
//         console.log(value); // Success!
//     },
//     // passing in reason 
//     (reason) => {
//         console.error(reason); // Error!
//     },
// );

// Promise.prototype.then()

// then(onFulfilled)
// then(onFulfilled, onRejected)

// const promise1 = new Promise((resolve, reject) => {
//     resolve('Success!');
// });

// promise1.then((value) => {
//     console.log(value);
//     // Expected output: "Success!"
// });




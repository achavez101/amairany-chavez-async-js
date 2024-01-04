
// Callbacks another method
// step1 for callback 
function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
}
// step2 for callback
function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
}
// step3 for callback 
function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
}
// will perform the additions calling them one after another 
// this is a difficult method to debug
function doOperation() {
    doStep1(0, (result1) => {
        //print result 1
        console.log(`result: ${result1}`);
        doStep2(result1, (result2) => {
            // print result 2
            console.log(`result: ${result2}`);
            doStep3(result2, (result3) => {
                // print result 3
                console.log(`result: ${result3}`);
            });
        });
    });
}
// call the function
doOperation();


// Callbacks
// function to perform an initialization for a plus 1
// function doStep1(init){
//     return init + 1;
// }
// // function to perform an initialization for a plus 2
// function doStep2(init) {
//     return init + 2;
// }
// // function to perform an initialization for a plus 3
// function doStep3(init) {
//     return init + 3;
// }
// // function to perform all steps and add them to a result
// function doOperation() {
//     let result = 0;
//     result = doStep1(result);
//     result = doStep2(result);
//     result = doStep3(result);
//     // logging result to the console
//     console.log(`result: ${result}`);
// }
// // calling the operation function to begin
// // added values together
// doOperation();


// Event Handlers

// logging to event log from html
// const log = document.querySelector(".event-log");
// // targeting xhr id so that when button is clicked, the log and text content are generated
// document.querySelector("#xhr").addEventListener("click", () => {
//     log.textContent = "";

// // creating a new xhr id to request access through browser
// const xhr = new XMLHttpRequest();

// // event listener to loadend xhr new value
// xhr.addEventListener("loadend", () => {
//     log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
// });

// // calling xhr function to open through xhr
// xhr.open(
//     "GET",
//     "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
// );
// // calling send function to send through xhr
//     xhr.send();
//     log.textContent =  `${log.textContent}Started XHR request\n`;
// });
// // selecting reload from html and once it is clicked, information will be logged through textContent
// // information will reload 
// document.querySelector("#reload").addEventListener("click", () => {
//     log.textContent = "";
//     document.location.reload();
// })

// A long-running synchronous function

// testing out portions for synchronous running
// const MAX_PRIME = 1000000;

// function isPrime(n) {
//   // check for prime number
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return n > 1;
// }
// //checks if the number is prime and returns boolean true or false 
// // console.log(isPrime(5));

// // generates a random maximum value
// const random = (max) => Math.floor(Math.random() * max);


// function generatePrimes(quota) {
//   const primes = [];
//   while (primes.length < quota) {
//     // max prime number
//     const candidate = random(MAX_PRIME);
//     if (isPrime(candidate)) {
//       primes.push(candidate);
//       console.log(primes.push(candidate));
//     }
//   }
//   return primes;
// }
// // generates prime values
// // console.log(generatePrimes(3));

// const quota = document.querySelector("#quota");
// const output = document.querySelector("#output");

// document.querySelector("#generate").addEventListener("click", () => {
//   const primes = generatePrimes(quota.value);
//   output.textContent = `Finished generating ${quota.value} primes!`;
// });
// // generates prime value
// // console.log(generatePrimes(4));

// document.querySelector("#reload").addEventListener("click", () => {
//   document.location.reload();
// });



// Synchronous programming

// function createGreeting(instrument) {
//     return  `My favorite instrument is ${instrument}!`;
// }
// const instrument = "piano";
// const greeting = createGreeting(instrument);
// console.log(greeting);


// Synchronous programming

// const name = "Miriam";
// const greeting = `Hello, my name is ${name}!`;
// console.log(greeting);
// "Hello, my name is Miriam!"




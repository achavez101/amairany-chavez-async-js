// Promise Based API



// setTimeout() function
// alarm will be set for 1000 milliseconds from now

const outputs = document.querySelector("#outputs");
const button1 = document.querySelector("#set-alarm");

// // function that sets a timeout and says Wake up when time is over
function makeAlarm() {
    setTimeout(() => {
        outputs.textContent = "Wake up!";
    }, 1000);
}
button1.addEventListener("click", makeAlarm);


// Promise () constructor
// check that delay is not negative 
// throw error if delay is negative
// call setTimeout when the timer expires
// the callback will be resolved if no error was found
// function alarm(person, delay) {
//     return new Promise((resolve, reject) => {
//         if(delay < 0) {
//             throw new Error("Alarm delay must be positive");
//         }
//         setTimeout(() => {
//             resolve(`Wake up, ${person}!`);
//         }, delay);
//     });
// }

// Using the alarm() API
// const name = document.querySelector("#name");
// const delay = document.querySelector("#delay");
// const button = document.querySelector("#make-alarm");
// const output = document.querySelector("#output");

// function alarm(person, delay) {
//     return new Promise((resolve, reject) => {
//         if(delay < 0) {
//             throw new Error("Alarm delay must be positive");
//         }
//         setTimeout(() => {
//             resolve(`Wake up, ${person}!`);
//         }, delay);
//     });
// }
// button.addEventListener("click", () => {
//     alarm(name.value, delay.value)
//         .then((message) => (output.textContent = message))
//         .catch((error) => (output.textContent = `No alarm set: ${error}`));
// });
// needed to hardcode name because it wouldn't work

// Async and await with the alarm() API
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#make-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if(delay < 0) {
            throw new Error("Alarm must be positive");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}
button.addEventListener("click", async() => {
    try{
        const message = await alarm(name.value, delay.value);
        output.textContent = message;
    } catch (error) {
        output.textContent = `Failed attempt: ${error}`;
    }
});



const named = document.querySelector("#named");
const delayed = document.querySelector("#delayed");
const button2 = document.querySelector("#make-alarmed");
const outputting = document.querySelector("#outputting");

function alarm(person2, delayed) {
    return new Promise((resolve, reject) => {
        if(delayed < 0) {
            throw new Error("Alarm must be positive");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person2}!`);
        }, delay);
    });
}
button2.addEventListener("click", async() => {
    try{
        const message = await alarm(named.value, delayed.value);
        outputting.textContent = message;
    } catch (error) {
        outputting.textContent = `Failed attempt: ${error}`;
    }
});
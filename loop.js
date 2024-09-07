
// for (initialization; condition; increment/decrement) {
//     // Code to be executed
// }

// for (let i = 0; i < 10; i++) {
//     console.log("Loop No: " + i);
// }

// for of loop
// const fruits = ["Apple", "Banana", " pepper", " orange", ]

// for (const fruit of fruits) {
//     console.log(fruit);
// }


// for (let x = 1; x < 10; x++) {
//     console.log("Tomar serial: " + x);
// }


// while (condition) {
//     // Code to be executed
// }

// let i=1;

// while (i <= 10) {
//     console.log("i);
//     i++;
// }




// Even Number by for loop
// for (let i = 1; i <= 100; i++) {
//     if (i%2 ===0) {
//         console.log(i);
//     }
// }

// Odd Number by for loop
// for (let i = 1; i <= 100; i++) {
//     if (i%2 ===1) {
//         console.log(i);
//     }
// }

// print any message multiple times
// for (let i = 1; i <= 60; i++) {
//     console.log("I will invest at least 6 hrs every single day for next 60 days!");
// }

for (let i = 1; i <= 60; i++) {
    console.log(i + ". I will invest at least 6 hrs every single day for the next 60 days!");
}

// print any message multiple times while loop
// let i = 1;
// while (i <= 60) {
//     console.log(i + ". I will invest at least 6 hrs every single day for the next 60 days!");
//     i++;
// }

function toRoman(num) {
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = '';

    for (let i = 0; i < roman.length; i++) {
        while (num >= value[i]) {
            result += roman[i];
            num -= value[i];
        }
    }

    return result;
}

let i = 1;
while (i <= 60) {
    console.log(toRoman(i) + ". I will invest at least 6 hrs every single day for the next 60 days!");
    i++;
}

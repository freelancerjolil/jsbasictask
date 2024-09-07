// function inchToFeet(inch){
// const feet = inch / 12;
// return feet
// }

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchesRemaining = inch % 12; 
    const result = feetNumber + ' feet ' + inchesRemaining + ' inches. '
    return result;


}

const myHeight = inchToFeet2(75);
// console.log(myHeight);
console.log(myHeight);

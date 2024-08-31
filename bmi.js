// BMI Calculator and Health Category

let weight = 40;  // weight in kilograms
let height = 1.75; // height in meters
let calculateBMI = (weight/height**2);
let result = calculateBMI

if (calculateBMI < 18.5) {
    console.log("Underweight");
} else if (calculateBMI >= 18.5 && calculateBMI <= 24.9) {
        console.log("Normal");
    } 
    else if (calculateBMI >= 25 && calculateBMI <= 29.9) {
            console.log("Overweight");
        } 
        else {
            console.log("Obese");
        }
    


//     else if ((bmi >= 25) && (=<29.9)) {
//         console.log("You are overweight")
//     }
//  else {
// console.log ("you are obese")
//  }
 
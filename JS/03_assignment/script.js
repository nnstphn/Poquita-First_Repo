// Task 1: Grading System
let score = 80;

if (score >= 90){
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}

// Task 2: Weather Advisor
let temperature = 10;

if (temperature < 0) {
    console.log("It's freezing outside! Bundle up!");
} else if (temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
} else if (temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
} else {
    console.log("It's hot outside. Stay hydrated!");
}

//Task 3: Eligibility Checker
let age = 22;

if (age < 13) {
    console.log("You are too young for this activity.");
} else if (age <= 17){
    console.log("You need parental permission.");
} else {
    console.log("You are eligible for this activity.");
}

//Task 4: Ticket Price Calculator
let age_num = 12;
let isMember = true;

if (age_num < 12){
    console.log("The ticket is free.");
} else if (isMember){
    console.log("The ticket costs $10.");
} else {
    console.log("The ticket costs $15.");
}

//Task 5: Challenge Task (optional): Leap Year Calendar
function isLeapYear(year) {
    if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2001));
console.log(isLeapYear(2002));
console.log(isLeapYear(2003));
console.log(isLeapYear(2004));
console.log(isLeapYear(2005));







// Task 1

let age = Number(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid Age");
}

// // Task 2

let salary = Number(prompt("Enter salary:"));
let newSalary;

if (salary < 20000) {
    newSalary = salary + (salary * 20 / 100);
} else if (salary <= 50000) {
    newSalary = salary + (salary * 10 / 100);
} else {
    newSalary = salary + (salary * 5 / 100);
}

console.log("Old Salary:", salary);
console.log("New Salary:", newSalary);


// Task 3

let units = Number(prompt("Enter units consumed:"));
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}

console.log("Total Bill: ₹" + bill);


// Task 4

let balance = 10000;
let withdraw = Number(prompt("Enter withdrawal amount:"));

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ₹" + balance);
} else {
    console.log("Insufficient Funds");
}


// Task 5

let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}


// Task 6

let recharge = Number(prompt("Enter recharge amount:"));

if (recharge >= 499) {
    console.log("Netflix Offer");
} else if (recharge >= 299) {
    console.log("2GB Extra Data");
} else {
    console.log("No Offer");
}


// Task 7

let color = prompt("Enter signal color:").toLowerCase();

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}


// Task 8

let workingDays = Number(prompt("Enter total working days:"));
let presentDays = Number(prompt("Enter present days:"));

let attendance = (presentDays / workingDays) * 100;

console.log("Attendance:", attendance + "%");

if (attendance >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// Task 9

let ticketPrice = 500;
let tickets = Number(prompt("Enter number of tickets:"));

let total = ticketPrice * tickets;
let gst = total * 0.05;
let finalAmount = total + gst;

console.log("Total Amount: ₹" + total);
console.log("GST: ₹" + gst);
console.log("Final Amount: ₹" + finalAmount);


// Task 10

let foodCost = Number(prompt("Enter food cost:"));
let finalBill;

if (foodCost > 2000) {
    finalBill = foodCost - (foodCost * 10 / 100);
} else {
    finalBill = foodCost;
}

console.log("Final Bill: ₹" + finalBill);


// Task 11

let age = Number(prompt("Enter age:"));
let height = Number(prompt("Enter height (cm):"));
let weight = Number(prompt("Enter weight (kg):"));

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Selected");
        } else {
            console.log("Rejected: Weight less than 55 kg");
        }
    } else {
        console.log("Rejected: Height less than 160 cm");
    }
} else {
    console.log("Rejected: Age less than 18");
}


// Task 12

let s1 = Number(prompt("Enter Subject 1 marks:"));
let s2 = Number(prompt("Enter Subject 2 marks:"));
let s3 = Number(prompt("Enter Subject 3 marks:"));
let s4 = Number(prompt("Enter Subject 4 marks:"));
let s5 = Number(prompt("Enter Subject 5 marks:"));

let total = s1 + s2 + s3 + s4 + s5;
let percentage = total / 5;

console.log("Total:", total);
console.log("Percentage:", percentage + "%");

if (percentage >= 90) {
    console.log("Grade: A+");
} else if (percentage >= 80) {
    console.log("Grade: A");
} else if (percentage >= 70) {
    console.log("Grade: B");
} else if (percentage >= 60) {
    console.log("Grade: C");
} else {
    console.log("Fail");
}


// Task 13

let time = Number(prompt("Enter hour (0-23):"));

if (time >= 6 && time < 14) {
    console.log("Morning Shift");
} else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
} else {
    console.log("Night Shift");
}


// Task 14

let age = Number(prompt("Enter age:"));
let salary = Number(prompt("Enter salary:"));
let experience = Number(prompt("Enter experience in years:"));

if (age >= 21 && salary >= 25000 && experience >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// Task 15

let distance = Number(prompt("Enter distance in KM:"));
let fare;

if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Total Fare: ₹" + fare);


// Task 16

let num = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}



// Task 17

let password = prompt("Enter password:");

if (password.length < 6) {
    console.log("Weak");
} else if (password.length <= 10) {
    console.log("Medium");
} else {
    console.log("Strong");
}



// Task 18

let experience = Number(prompt("Enter experience in years:"));
let salary = Number(prompt("Enter salary:"));

let bonus;

if (experience <= 2) {
    bonus = salary * 0.05;
} else if (experience <= 5) {
    bonus = salary * 0.10;
} else {
    bonus = salary * 0.20;
}

console.log("Bonus: ₹" + bonus);



// Task 19

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

console.log("Happy New Year");


// Task 20

let degree = prompt("Degree Completed? (yes/no):").toLowerCase();
let communication = prompt("Communication Skill (good/poor):").toLowerCase();
let technicalScore = Number(prompt("Enter technical score:"));

if (degree === "yes") {
    if (communication === "good") {
        if (technicalScore >= 70) {
            console.log("Selected");
        } else {
            console.log("Rejected: Technical score below 70");
        }
    } else {
        console.log("Rejected: Communication skills not good");
    }
} else {
    console.log("Rejected: Degree not completed");
}

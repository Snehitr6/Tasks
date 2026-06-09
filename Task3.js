// Task 1
// let basicSalary = 25000;

// let hra = basicSalary * 0.20;
// let bonus = basicSalary * 0.10;

// let totalSalary = basicSalary + hra + bonus;
// let tax = totalSalary * 0.05;

// let finalSalary = totalSalary - tax;

// console.log("Basic Salary :", basicSalary);
// console.log("HRA :", hra);
// console.log("Bonus :", bonus);
// console.log("Tax :", tax);
// console.log("Final Salary :", finalSalary);

// Task 2 

let marks = 70;

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
}
else if (marks >= 80) {
    console.log("Grade: A");
}
else if (marks >= 70) {
    console.log("Grade: B");
}
else if (marks >= 60) {
    console.log("Grade: C");
}
else {
    console.log("Fail");
}

// Task 3

let username = "admin";
let password = "12345";

if (username === "admin") {
    if (password === "12345") {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }
} else {
    console.log("Invalid Username");
}

// Task 4

let balance = 5000;
let withdrawAmount = 2000;

if (withdrawAmount > balance) {
    console.log("Insufficient Balance");
}
else {
    balance = balance - withdrawAmount;
    console.log("Withdrawal Success");
    console.log("Remaining Balance :", balance);
}

// Task 5

let purchaseAmount = 7000;
let discount = 0;

if (purchaseAmount >= 10000) {
    discount = purchaseAmount * 0.20;
}
else if (purchaseAmount >= 5000) {
    discount = purchaseAmount * 0.10;
}
else if (purchaseAmount >= 2000) {
    discount = purchaseAmount * 0.05;
}

let finalAmount = purchaseAmount - discount;

console.log("Original Amount :", purchaseAmount);
console.log("Discount :", discount);
console.log("Final Amount :", finalAmount);

// Task 6

let helmet = "No";
let license = "No";

if (helmet === "No" && license === "No") {
    console.log("Fine: ₹3000");
}
else if (helmet === "No") {
    console.log("Fine: ₹1000");
}
else if (license === "No") {
    console.log("Fine: ₹2000");
}
else {
    console.log("No Fine");
}

// Task 7

let attendance = ["P", "P", "A", "P", "A", "P", "P"];

let present = 0;
let absent = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        present++;
    } else {
        absent++;
    }
}

console.log("Present Days :", present);
console.log("Absent Days :", absent);

// Task 8

let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    console.log(key + " : " + product[key]);
}

// Task 9

let distance = 12;
let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
}
else if (distance <= 10) {
    fare = (5 * 20) + ((distance - 5) * 15);
}
else {
    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}

console.log("Total Fare : ₹" + fare);

// Task 10

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kiran", salary: 30000 },
    { id: 3, name: "Navi", salary: 40000 }
];

console.log("All Employees:");

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}

let highest = employees[0];
let lowest = employees[0];
let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {

    if (employees[i].salary > highest.salary) {
        highest = employees[i];
    }

    if (employees[i].salary < lowest.salary) {
        lowest = employees[i];
    }

    totalSalary += employees[i].salary;
}

console.log("Highest Salary Employee :", highest);
console.log("Lowest Salary Employee :", lowest);
console.log("Total Employees :", employees.length);
console.log("Total Salary Expenditure :", totalSalary);
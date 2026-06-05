// Task 1
let marks = 75;

let result = marks >= 35 ? "Pass" : "Fail";
let grade;

if (marks >= 90) {
    grade = "Grade A";
} else if (marks >= 75) {
    grade = "Grade B";
} else if (marks >= 60) {
    grade = "Grade C";
} else {
    grade = "No Grade";
}

console.log("Result:", result);
console.log("Grade:", grade);

// Task 2 
// let salary = 25000;

// let bonus = salary * 0.10;
// let finalSalary = salary + bonus;

// console.log("Original Salary:", salary);
// console.log("Bonus:", bonus);
// console.log("Final Salary:", finalSalary);

// Task 3
let email = "admin@gmail.com";
let password = "12345";

if (email === "admin@gmail.com" && password === "12345") {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}

// Task 4
// let price = 2000;

// let finalAmount = price > 1000 ? price - (price * 0.20) : price;

// console.log("Original Price:", price);
// console.log("Final Amount:", finalAmount);

// Task 5
let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];
console.log("First Product:", products[0]);
console.log("Last Product:", products[products.length - 1]);
console.log("Total Products:", products.length);

// Task 6
// let employee = {
//     name: "Naveen",
//     department: "Development",
//     salary: 30000
// };

// console.log(employee);
// console.log("Employee Name:", employee.name);
// console.log("Salary:", employee.salary);

// Task 7
let shirt = 500;
let pant = 1000;
let shoe = 1500;

let totalBill = shirt + pant + shoe;
let discount = totalBill * 0.10;
let finalAmount = totalBill - discount;

console.log("Total Bill:", totalBill);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);

// Task 8 
let age = 19;

if (age >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible");
}

// Task 9
let a = 10;

a++;
console.log("After a++ :", a);

++a;
console.log("After ++a :", a);

a--;
console.log("After a-- :", a);

--a;
console.log("After --a :", a);

// Task 10
let isPresent = true;
let completedTask = true;

if (isPresent && completedTask) {
    console.log("Eligible for Salary");
} else {
    console.log("Not Eligible");
}

// Task 
let employee = {
    id: 101,
    name: "John",
    department: "Development",
    salary: 35000,
    experience: 2
};

console.log("Employee ID:", employee.id);
console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("Salary:", employee.salary);
console.log("Experience:", employee.experience, "Years");

let bonus = employee.salary * 0.10;
let finalSalary = employee.salary + bonus;

console.log("Bonus:", bonus);
console.log("Final Salary:", finalSalary);

let performance = employee.experience >= 2 ? "Good" : "Average";

console.log("Performance Status:", performance);
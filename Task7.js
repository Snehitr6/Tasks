// Task 1

let signal = "Red";

switch (signal.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}

// Task 2

for (let i = 1; i <= 30; i++) {
    console.log(`Employee ${i} Present`);
}

// Task 3

let balance = 10000;

while (balance > 0) {
    balance -= 500;
    console.log(`Remaining Balance: ₹${balance}`);
}

// Task 4

let age = 18;
let percentage = 75;
let examPassed = true;

if (age >= 18) {
    if (percentage >= 70) {
        if (examPassed) {
            console.log("Admission Approved");
        } else {
            console.log("Rejected: Entrance Exam Not Passed");
        }
    } else {
        console.log("Rejected: Percentage below 70%");
    }
} else {
    console.log("Rejected: Age below 18");
}

// Task 5

function deliveryStatus(customerName, foodItem, deliveryAddress) {
    console.log(`${foodItem} has been delivered to ${customerName} at ${deliveryAddress}.`);
}

deliveryStatus("Rahul", "Pizza", "Bangalore");

// Task 6

// function calculateSalary(basicSalary) {
//     return basicSalary;
// }

// function calculateBonus(salary) {
//     return salary + salary * 0.10;
// }

// let salary = calculateSalary(50000);
// let finalSalary = calculateBonus(salary);

// console.log("Final Salary:", finalSalary);

// Task 7

function applyDiscount(amount, callback) {
    let discountedAmount = amount - amount * 0.10;
    callback(discountedAmount);
}

function generateInvoice(finalAmount) {
    console.log(`Invoice Generated. Amount: ₹${finalAmount}`);
}

applyDiscount(10000, generateInvoice);

// Task 8

function* offersGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offers = offersGenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

// Task 9

let scienceStudents = ["Rahul", "Priya", "Karan"];
let commerceStudents = ["Anjali", "Ravi", "Sneha"];

let allStudents = [...scienceStudents, ...commerceStudents];

console.log(allStudents);

// Task 10

function calculateTotal(studentName, ...marks) {
    let total = marks.reduce((sum, mark) => sum + mark, 0);

    console.log(`Student: ${studentName}`);
    console.log(`Total Marks: ${total}`);
}

calculateTotal("Rahul", 85, 90, 78, 88);

// Task 11

let employee = {
    name: "Rahul",
    department: "IT",
    salary: 60000,
    experience: 5
};

let { name, department, salary, experience } = employee;

console.log(name);
console.log(department);
console.log(salary);
console.log(experience);

// Task 12

let products = [
    { name: "Laptop", price: 60000, category: "Electronics" },
    { name: "Mouse", price: 1000, category: "Electronics" },
    { name: "Phone", price: 25000, category: "Electronics" },
    { name: "Keyboard", price: 3000, category: "Electronics" }
];

let expensiveProducts = products.filter(product => product.price > 5000);

console.log(expensiveProducts);

// Task 13

let customers = [
    { name: "Rahul", purchase: 30000 },
    { name: "Priya", purchase: 55000 },
    { name: "Ravi", purchase: 70000 }
];

let premiumCustomer = customers.find(customer => customer.purchase > 50000);

console.log(premiumCustomer);

// Task 14

let expenses = [25000, 18000, 32000, 15000];

let totalExpense = expenses.reduce((total, expense) => total + expense, 0);

console.log("Total Expenses:", totalExpense);

// Task 15

let players = [
    { name: "Player1", age: 20 },
    { name: "Player2", age: 22 },
    { name: "Player3", age: 19 }
];

let allAdults = players.every(player => player.age > 18);

console.log(allAdults);

// Task 16

let candidates = [
    { name: "Rahul", skills: ["JavaScript", "React"] },
    { name: "Priya", skills: ["Python", "Java"] },
    { name: "Ravi", skills: ["Node.js"] }
];

let knowsReact = candidates.some(candidate =>
    candidate.skills.includes("React")
);

console.log(knowsReact);


// Task 17

let mobile = "9876543210";

if (
    mobile.length === 10 &&
    (mobile.startsWith("6") ||
     mobile.startsWith("7") ||
     mobile.startsWith("8") ||
     mobile.startsWith("9"))
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}

// Task 18

let title = "Learn JavaScript Complete Course";

let slug = title.toLowerCase().split(" ").join("-");

console.log(slug);


// Task 19

let employees = [
    { name: "Rahul", salary: 50000 },
    { name: "Priya", salary: 70000 },
    { name: "Ravi", salary: 45000 }
];

employees.sort((a, b) => b.salary - a.salary);
console.log(employees);

employees.sort((a, b) => a.salary - b.salary);
console.log(employees);


// Task 20

let movies = ["Leo", "Jawan", "Kalki", "Pushpa"];

let bookingIds = movies.map((movie, index) => {
    return {
        movieName: movie,
        bookingId: `BOOK${index + 1}`
    };
});

console.log(bookingIds);
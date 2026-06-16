// Task 1

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 50000 },
    { id: 3, name: "John", salary: 75000 }
];

let highSalaryEmployees = employees.filter(emp => emp.salary > 40000);
console.log("Employees with salary above ₹40,000:", highSalaryEmployees);

let firstEmployee = employees.find(emp => emp.salary > 60000);
console.log("First employee with salary above ₹60,000:", firstEmployee);

let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Company Salary Expense:", totalSalary);

let employeeNames = employees.map(emp => emp.name);
console.log("Employee Names:", employeeNames);


// Task 2

function checkAdmission(name, age, percentage) {
    let status;

    if (age >= 18 && percentage >= 60) {
        status = "Admission Approved";
    } else {
        status = "Admission Rejected";
    }

    return {
        name,
        age,
        percentage,
        status
    };
}

console.log(checkAdmission("Rahul", 19, 75));

// Task 3

let cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];

let totalBill = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log("Total Bill:", totalBill);

let expensiveProduct = cart.reduce((max, item) =>
    item.price > max.price ? item : max
);
console.log("Most Expensive Product:", expensiveProduct);

let productNames = cart.map(item => item.product);
console.log("Product Names:", productNames);

// Task 4

let signal = "red";
let fine = 0;

switch (signal) {
    case "red":
        console.log("Stop");
        fine = 1000;
        break;
    case "yellow":
        console.log("Get Ready");
        fine = 500;
        break;
    case "green":
        console.log("Go");
        fine = 0;
        break;
    default:
        console.log("Invalid Signal");
}

console.log("Fine Amount: ₹" + fine);


// Task 5

let students = [
    { name: "A", mark: 95 },
    { name: "B", mark: 45 },
    { name: "C", mark: 80 },
    { name: "D", mark: 30 }
];

let passedStudents = students.filter(student => student.mark >= 50);
console.log("Passed Students:", passedStudents);

let failedStudents = students.filter(student => student.mark < 50);
console.log("Failed Students:", failedStudents);

let grades = students.map(student => {
    let grade;

    if (student.mark >= 90) grade = "A";
    else if (student.mark >= 75) grade = "B";
    else if (student.mark >= 50) grade = "C";
    else grade = "Fail";

    return { name: student.name, grade };
});

console.log("Grade List:", grades);


// Task 6: Online Food Delivery

function placeOrder(customerName, ...items) {
    console.log("Customer Name:", customerName);
    console.log("Ordered Items:", items);
    console.log("Item Count:", items.length);
}

placeOrder("Rahul", "Pizza", "Burger", "Coke");


// Task 7: Bank Account System

let balance = 10000;

function deposit(amount) {
    balance += amount;
    return balance;
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
    } else {
        console.log("Insufficient Balance");
    }
    return balance;
}

function checkBalance() {
    return balance;
}

console.log("After Deposit:", deposit(5000));
console.log("After Withdrawal:", withdraw(3000));
console.log("Current Balance:", checkBalance());

// Task 8: Movie Ticket Booking

let bookedSeats = [];

function bookSeat(seatNo) {
    if (bookedSeats.includes(seatNo)) {
        console.log(seatNo + " is already booked");
    } else {
        bookedSeats.push(seatNo);
        console.log(seatNo + " booked successfully");
    }
}

bookSeat("A1");
bookSeat("A2");
bookSeat("A1");

console.log("Booked Seats:");
for (let seat of bookedSeats) {
    console.log(seat);
}


// Task 9

let username = "Rahul123";
let password = "password123";
let email = "rahul@gmail.com";

if (!username.includes(" ")) {
    console.log("Username is valid");
} else {
    console.log("Username should not contain spaces");
}

if (password.length >= 8) {
    console.log("Password is valid");
} else {
    console.log("Password should be at least 8 characters");
}

if (email.includes("@")) {
    console.log("Email is valid");
} else {
    console.log("Invalid Email");
}


// Task 10

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        console.log("Product Titles:");
        products.forEach(product => {
            console.log(product.title);
        });

        let expensiveProducts = products.filter(
            product => product.price * 85 > 1000
        );

        console.log("Products above ₹1000:", expensiveProducts);

        console.log("Total Products:", products.length);
    })
    .catch(error => console.log(error));

// Task 11

let dob = new Date("2002-05-15");

let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

console.log("Day:", dob.getDate());
console.log("Month:", dob.getMonth() + 1);
console.log("Year:", dob.getFullYear());
console.log("Weekday:", weekdays[dob.getDay()]);



// Task 12

let plan = "Premium";

let benefits =
    plan === "Mobile"
        ? "Watch on 1 mobile device"
        : plan === "Basic"
        ? "Watch on 1 screen in HD"
        : plan === "Standard"
        ? "Watch on 2 screens in Full HD"
        : plan === "Premium"
        ? "Watch on 4 screens in Ultra HD"
        : "Invalid Plan";

console.log("Plan:", plan);
console.log("Benefits:", benefits);


// Task 13

let patients = [
    { id: 1, name: "Ravi", critical: true },
    { id: 2, name: "Kiran", critical: false },
    { id: 3, name: "John", critical: true }
];

let criticalPatients = patients.filter(
    patient => patient.critical
);
console.log("Critical Patients:", criticalPatients);

let patient = patients.find(patient => patient.id === 2);
console.log("Patient Found:", patient);

console.log("Total Patients:", patients.length);


// Task 14

let inventory1 = [
    { name: "Laptop", price: 50000 }
];

let inventory2 = [
    { name: "Mobile", price: 20000 }
];

let mergedInventory = [...inventory1, ...inventory2];
console.log("Merged Inventory:", mergedInventory);

let { name, price } = mergedInventory[0];
console.log("Product Name:", name);
console.log("Product Price:", price);

let updatedInventory = [
    ...mergedInventory,
    { name: "Tablet", price: 15000 }
];

console.log("Updated Inventory:", updatedInventory);

// Task 15

let groupMembers = ["Rahul", "Kavin", "John"];

groupMembers.push("Arun");
console.log("After Push:", groupMembers);

groupMembers.pop();
console.log("After Pop:", groupMembers);

groupMembers.shift();
console.log("After Shift:", groupMembers);

groupMembers.unshift("David");
console.log("After Unshift:", groupMembers);

groupMembers.splice(1, 0, "Sam");
console.log("Final Group List:", groupMembers);

let students = [
    { id: 1, name: "Rahul", department: "CSE", mark: 92 },
    { id: 2, name: "Priya", department: "ECE", mark: 78 },
    { id: 3, name: "Arjun", department: "MECH", mark: 45 },
    { id: 4, name: "Sneha", department: "CIVIL", mark: 85 },
    { id: 5, name: "Kiran", department: "EEE", mark: 67 }
];

console.log("Student Names:");
for (let student of students) {
    console.log(student.name);
}

// Calculate total marks
let totalMarks = 0;
for (let student of students) {
    totalMarks += student.mark;
}
console.log("Total Marks:", totalMarks);

console.log("Students scoring above 80:");
for (let student of students) {
    if (student.mark > 80) {
        console.log(student.name);
    }
}

console.log("Grades:");
for (let student of students) {
    let grade;

    if (student.mark >= 90) {
        grade = "A";
    } else if (student.mark >= 75) {
        grade = "B";
    } else if (student.mark >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    console.log(student.name + " : " + grade);
}

function printStudentDetails(student) {
    console.log(
        `ID: ${student.id}, Name: ${student.name}, Department: ${student.department}, Mark: ${student.mark}`
    );
}

for (let student of students) {
    printStudentDetails(student);
}


// Task 2
let employees = [
    { id: 1, name: "Ravi", salary: 45000, department: "HR" },
    { id: 2, name: "Meena", salary: 28000, department: "IT" },
    { id: 3, name: "Ajay", salary: 55000, department: "Finance" },
    { id: 4, name: "Divya", salary: 32000, department: "Sales" },
    { id: 5, name: "Vikram", salary: 25000, department: "IT" }
];

console.log("Employee Names:");
for (let emp of employees) {
    console.log(emp.name);
}

let totalSalary = 0;
for (let emp of employees) {
    totalSalary += emp.salary;
}
console.log("Total Salary Expense:", totalSalary);

console.log("Employees earning above ₹30,000:");
for (let emp of employees) {
    if (emp.salary > 30000) {
        console.log(emp.name);
    }
}

for (let emp of employees) {
    switch (emp.department) {
        case "HR":
            console.log(emp.name + ": Human Resources");
            break;
        case "IT":
            console.log(emp.name + ": Information Technology");
            break;
        case "Finance":
            console.log(emp.name + ": Finance Department");
            break;
        case "Sales":
            console.log(emp.name + ": Sales Department");
            break;
        default:
            console.log(emp.name + ": Other Department");
    }
}

function generatePayroll(employee, callback) {
    callback(employee);
}

function payrollReport(employee) {
    console.log(
        `${employee.name} receives ₹${employee.salary}`
    );
}

for (let emp of employees) {
    generatePayroll(emp, payrollReport);
}


let foods = [
    { id: 1, foodName: "Biryani", price: 250, category: "Main Course" },
    { id: 2, foodName: "Pizza", price: 350, category: "Fast Food" },
    { id: 3, foodName: "Juice", price: 120, category: "Beverage" },
    { id: 4, foodName: "Burger", price: 180, category: "Fast Food" },
    { id: 5, foodName: "Ice Cream", price: 220, category: "Dessert" }
];

console.log("Food Names:");
for (let food of foods) {
    console.log(food.foodName);
}

let totalValue = 0;
for (let food of foods) {
    totalValue += food.price;
}
console.log("Total Menu Value:", totalValue);

// Foods above ₹200
console.log("Foods above ₹200:");
for (let food of foods) {
    if (food.price > 200) {
        console.log(food.foodName);
    }
}

// Task 3
for (let food of foods) {
    switch (food.category) {
        case "Main Course":
            console.log(food.foodName + ": Main Dish");
            break;
        case "Fast Food":
            console.log(food.foodName + ": Quick Snack");
            break;
        case "Beverage":
            console.log(food.foodName + ": Drink");
            break;
        case "Dessert":
            console.log(food.foodName + ": Sweet Dish");
            break;
        default:
            console.log(food.foodName + ": Other");
    }
}

function placeOrder(food, callback) {
    callback(food);
}

function confirmOrder(food) {
    console.log(`Order confirmed for ${food.foodName}`);
}

placeOrder(foods[0], confirmOrder);

// Task 4

let movies = [
    { movieName: "Leo", ticketPrice: 200, availableSeats: 50, language: "Tamil" },
    { movieName: "Kalki", ticketPrice: 250, availableSeats: 0, language: "Telugu" },
    { movieName: "KGF", ticketPrice: 180, availableSeats: 30, language: "Kannada" },
    { movieName: "Jawan", ticketPrice: 220, availableSeats: 20, language: "Hindi" }
];

console.log("Movie Names:");
for (let movie of movies) {
    console.log(movie.movieName);
}

let totalSeats = 0;
for (let movie of movies) {
    totalSeats += movie.availableSeats;
}
console.log("Total Available Seats:", totalSeats);

for (let movie of movies) {
    if (movie.availableSeats > 0) {
        console.log(movie.movieName + ": Booking Available");
    } else {
        console.log(movie.movieName + ": House Full");
    }
}

for (let movie of movies) {
    switch (movie.language) {
        case "Tamil":
            console.log(movie.movieName + ": Tamil Movie");
            break;
        case "Telugu":
            console.log(movie.movieName + ": Telugu Movie");
            break;
        case "Kannada":
            console.log(movie.movieName + ": Kannada Movie");
            break;
        case "Hindi":
            console.log(movie.movieName + ": Hindi Movie");
            break;
        default:
            console.log(movie.movieName + ": Other Language");
    }
}

function bookTicket(movie, callback) {
    callback(movie);
}

function bookingConfirmation(movie) {
    console.log(`Ticket booked for ${movie.movieName}`);
}

bookTicket(movies[0], bookingConfirmation);


// Task 5
let patients = [
    { patientId: 1, patientName: "Ramesh", age: 65, disease: "Cardiology" },
    { patientId: 2, patientName: "Sita", age: 45, disease: "Neurology" },
    { patientId: 3, patientName: "Manoj", age: 72, disease: "Orthopedics" },
    { patientId: 4, patientName: "Anita", age: 30, disease: "Dermatology" },
    { patientId: 5, patientName: "Kumar", age: 68, disease: "Cardiology" }
];

console.log("Patient Names:");
for (let patient of patients) {
    console.log(patient.patientName);
}

console.log("Total Patients:", patients.length);

console.log("Patients above 60 years:");
for (let patient of patients) {
    if (patient.age > 60) {
        console.log(patient.patientName);
    }
}

for (let patient of patients) {
    switch (patient.disease) {
        case "Cardiology":
            console.log(patient.patientName + ": Heart Department");
            break;
        case "Neurology":
            console.log(patient.patientName + ": Brain and Nerves Department");
            break;
        case "Orthopedics":
            console.log(patient.patientName + ": Bone Department");
            break;
        case "Dermatology":
            console.log(patient.patientName + ": Skin Department");
            break;
        default:
            console.log(patient.patientName + ": General Department");
    }
}

function bookAppointment(patient, callback) {
    callback(patient);
}

function appointmentConfirmation(patient) {
    console.log(
        `Appointment confirmed for ${patient.patientName}`
    );
}

bookAppointment(patients[0], appointmentConfirmation);

// Task 6
let books = [
    { bookId: 1, bookName: "The Alchemist", author: "Paulo Coelho", price: 350, category: "Fiction" },
    { bookId: 2, bookName: "JavaScript Basics", author: "John Doe", price: 650, category: "Programming" },
    { bookId: 3, bookName: "Atomic Habits", author: "James Clear", price: 550, category: "Self Help" },
    { bookId: 4, bookName: "Wings of Fire", author: "A.P.J Abdul Kalam", price: 450, category: "Biography" },
    { bookId: 5, bookName: "Data Structures", author: "Mark Allen", price: 750, category: "Education" }
];

console.log("Book Names:");
for (let book of books) {
    console.log(book.bookName);
}

let totalBookValue = 0;

for (let book of books) {
    totalBookValue += book.price;
}

console.log("Total Book Value: ₹" + totalBookValue);

console.log("Books above ₹500:");

for (let book of books) {
    if (book.price > 500) {
        console.log(book.bookName);
    }
}

for (let book of books) {
    switch (book.category) {
        case "Fiction":
            console.log(book.bookName + " - Fiction Book");
            break;

        case "Programming":
            console.log(book.bookName + " - Programming Book");
            break;

        case "Self Help":
            console.log(book.bookName + " - Self Improvement Book");
            break;

        case "Biography":
            console.log(book.bookName + " - Biography Book");
            break;

        default:
            console.log(book.bookName + " - Educational Book");
    }
}

function issueBook(bookName) {
    console.log(bookName + " has been issued successfully.");
}

issueBook("Atomic Habits");


// Task 7
let products = [
    { productId: 1, productName: "Laptop", price: 50000, stock: 8 },
    { productId: 2, productName: "Mouse", price: 500, stock: 50 },
    { productId: 3, productName: "Keyboard", price: 1500, stock: 15 },
    { productId: 4, productName: "Monitor", price: 12000, stock: 5 },
    { productId: 5, productName: "Headphones", price: 2500, stock: 20 }
];

console.log("Products:");

for (let product of products) {
    console.log(product.productName);
}

let inventoryValue = 0;

for (let product of products) {
    inventoryValue += product.price * product.stock;
}

console.log("Total Inventory Value: ₹" + inventoryValue);

console.log("Products with stock less than 10:");

for (let product of products) {
    if (product.stock < 10) {
        console.log(product.productName);
    }
}

for (let product of products) {
    if (product.stock === 0) {
        console.log(product.productName + " - Out of Stock");
    } else if (product.stock < 10) {
        console.log(product.productName + " - Low Stock");
    } else {
        console.log(product.productName + " - In Stock");
    }
}


function generateReport(product, callback) {
    callback(product);
}

function productReport(product) {
    console.log(
        `${product.productName} | Price: ₹${product.price} | Stock: ${product.stock}`
    );
}

for (let product of products) {
    generateReport(product, productReport);
}

// Task 8
let applicants = [
    { name: "Rahul", age: 18, percentage: 82, department: "CSE" },
    { name: "Priya", age: 17, percentage: 78, department: "ECE" },
    { name: "Arjun", age: 20, percentage: 55, department: "MECH" },
    { name: "Sneha", age: 19, percentage: 92, department: "CIVIL" },
    { name: "Kiran", age: 21, percentage: 68, department: "EEE" }
];

console.log("Applicants:");

for (let applicant of applicants) {
    console.log(applicant.name);
}

let eligibleCount = 0;

for (let applicant of applicants) {
    if (applicant.age >= 18 && applicant.percentage >= 60) {
        console.log(applicant.name + " is Eligible");
        eligibleCount++;
    } else {
        console.log(applicant.name + " is Not Eligible");
    }
}

console.log("Total Eligible Students:", eligibleCount);

for (let applicant of applicants) {
    switch (applicant.department) {
        case "CSE":
            console.log(applicant.name + " - Computer Science");
            break;

        case "ECE":
            console.log(applicant.name + " - Electronics");
            break;

        case "MECH":
            console.log(applicant.name + " - Mechanical");
            break;

        case "CIVIL":
            console.log(applicant.name + " - Civil Engineering");
            break;

        case "EEE":
            console.log(applicant.name + " - Electrical Engineering");
            break;

        default:
            console.log(applicant.name + " - Other Department");
    }
}

function admissionResult(applicant, callback) {
    callback(applicant);
}

function resultMessage(applicant) {
    if (applicant.age >= 18 && applicant.percentage >= 60) {
        console.log("Congratulations " + applicant.name + "! Admission Approved.");
    } else {
        console.log("Sorry " + applicant.name + ", Admission Rejected.");
    }
}

for (let applicant of applicants) {
    admissionResult(applicant, resultMessage);
}



// Task 9

let passengers = [
    { passengerId: 1, name: "Amit", seatNumber: 5, ticketPrice: 500, busType: "AC" },
    { passengerId: 2, name: "Riya", seatNumber: 10, ticketPrice: 500, busType: "AC" },
    { passengerId: 3, name: "Karan", seatNumber: 15, ticketPrice: 350, busType: "Non-AC" },
    { passengerId: 4, name: "Neha", seatNumber: 20, ticketPrice: 350, busType: "Sleeper" },
    { passengerId: 5, name: "Vijay", seatNumber: 25, ticketPrice: 600, busType: "Volvo" }
];

console.log("Passenger Names:");

for (let passenger of passengers) {
    console.log(passenger.name);
}

let totalCollection = 0;

for (let passenger of passengers) {
    totalCollection += passenger.ticketPrice;
}

console.log("Total Collection: ₹" + totalCollection);

console.log("Occupied Seats:");

for (let passenger of passengers) {
    console.log("Seat No: " + passenger.seatNumber);
}

for (let passenger of passengers) {
    switch (passenger.busType) {
        case "AC":
            console.log(passenger.name + " - AC Bus");
            break;

        case "Non-AC":
            console.log(passenger.name + " - Non-AC Bus");
            break;

        case "Sleeper":
            console.log(passenger.name + " - Sleeper Bus");
            break;

        case "Volvo":
            console.log(passenger.name + " - Volvo Luxury Bus");
            break;

        default:
            console.log(passenger.name + " - Regular Bus");
    }
}

function generateTicket(passenger, callback) {
    callback(passenger);
}

function ticketConfirmation(passenger) {
    console.log(
        `Ticket Confirmed: ${passenger.name}, Seat No: ${passenger.seatNumber}`
    );
}

for (let passenger of passengers) {
    generateTicket(passenger, ticketConfirmation);
}



// Task 10

let mobiles = [
    { brand: "Samsung", model: "Galaxy S24", price: 75000, stock: 5 },
    { brand: "Apple", model: "iPhone 15", price: 85000, stock: 3 },
    { brand: "OnePlus", model: "OnePlus 12", price: 65000, stock: 8 },
    { brand: "Xiaomi", model: "Redmi Note 13", price: 18000, stock: 20 },
    { brand: "Realme", model: "Realme GT", price: 25000, stock: 12 }
];

console.log("Mobile Models:");

for (let mobile of mobiles) {
    console.log(mobile.brand + " " + mobile.model);
}


let totalStockValue = 0;

for (let mobile of mobiles) {
    totalStockValue += mobile.price * mobile.stock;
}

console.log("Total Stock Value: ₹" + totalStockValue);

console.log("Mobiles above ₹20,000:");

for (let mobile of mobiles) {
    if (mobile.price > 20000) {
        console.log(mobile.brand + " " + mobile.model);
    }
}

for (let mobile of mobiles) {
    switch (mobile.brand) {
        case "Samsung":
            console.log(mobile.model + " - Android Premium");
            break;

        case "Apple":
            console.log(mobile.model + " - iOS Device");
            break;

        case "OnePlus":
            console.log(mobile.model + " - Flagship Android");
            break;

        case "Xiaomi":
            console.log(mobile.model + " - Budget Android");
            break;

        case "Realme":
            console.log(mobile.model + " - Mid-range Android");
            break;

        default:
            console.log(mobile.model + " - Other Brand");
    }
}

function generateSalesReport(mobile, callback) {
    callback(mobile);
}

function salesReport(mobile) {
    console.log(
        `${mobile.brand} ${mobile.model} | Price: ₹${mobile.price} | Stock: ${mobile.stock}`
    );
}

for (let mobile of mobiles) {
    generateSalesReport(mobile, salesReport);
}

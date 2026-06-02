
   //    Task 7

// 1. E-Commerce Product Filter   

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    products
      .filter(product =>
        product.price > 100 &&
        product.category === "electronics"
      )
      .forEach(product => {
        console.log(product.title);
        console.log(product.price);
      });
  });

// 2. Online Shopping Cart Total  

let cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 }
];

let total = cart.reduce((sum, item) => {
  return sum + item.price * item.qty;
}, 0);

console.log(total); // Output: 8500

// 3. Employee Salary Dashboard

let employees = [
  { name: "John", salary: 25000 },
  { name: "Sam", salary: 50000 },
  { name: "Ravi", salary: 45000 },
  { name: "Kumar", salary: 30000 }
];

let result = employees
  .filter(emp => emp.salary > 40000)
  .map(emp => emp.name);

console.log(result); // Output: ["Sam", "Ravi"] 

// 4. Food Delivery App

let hotels = [
  { hotel: "A2B", rating: 4.1 },
  { hotel: "KFC", rating: 4.7 },
  { hotel: "Dominos", rating: 4.3 }
];

let hotel = hotels.find(h => h.rating > 4.5);

console.log(hotel); // Output: { hotel: "KFC", rating: 4.7 } 

// 5. Student Pass/Fail System

let marks = [45, 67, 89, 90, 34];

let allPassed = marks.every(mark => mark >= 35);

console.log(allPassed); // Output: false (because 34 is less than 35) 

// 6. OTP Verification System

let otpList = [1234, 4567, 7890, 9876];

let enteredOtp = 4567;

console.log(otpList.includes(enteredOtp)); // Output: true (because 4567 is in the otpList)

// 7. Movie Booking Timer

let count = 10;

let timer = setInterval(() => {
  console.log(count);

  if (count === 0) {
    clearInterval(timer);
    console.log("Booking Closed");
  }

  count--;
}, 1000);

// 8. Instagram Like Counter

let likes = 0;

let interval = setInterval(() => {
  likes++;
  console.log("Likes :", likes);

  if (likes === 10) {
    clearInterval(interval);
  }
}, 1000);

// 9. Login Authentication 

let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
  console.log("Login Success");
} else {
  console.log("Invalid Credentials");
}

// 10. Weather App Simulation

let internet = true;

let weatherPromise = new Promise((resolve, reject) => {
  if (internet) {
    resolve("Weather Data");
  } else {
    reject("No Internet");
  }
});

weatherPromise
  .then(data => console.log(data))
  .catch(error => console.log(error));

  // 11.  Amazon Product Search

  let products = [
  "shirt",
  "tshirt",
  "jeans",
  "formal shirt",
  "watch"
];

let result = products.filter(product =>
  product.includes("shirt")
);

console.log(result); // Output: ["shirt", "tshirt", "formal shirt"] 

// 12. YouTube Video Duration

let videos = [10, 20, 30, 40];

let totalTime = videos.reduce((sum, time) => {
  return sum + time;
}, 0);

console.log(totalTime); // Output: 100 (total duration of all videos)

// 13. Swiggy Order Status

let status = "Preparing";

switch (status) {
  case "Placed":
    console.log("Order Placed");
    break;

  case "Preparing":
    console.log("Food is being prepared");
    break;

  case "Out for Delivery":
    console.log("Order on the way");
    break;

  case "Delivered":
    console.log("Order Delivered");
    break;

  default:
    console.log("Invalid Status");
}

// 14. WhatsApp Chat Analyzer

      //   Using length

      let chats = ["hi", "hello", "where", "ok", "bye"];

console.log(chats.length);

      // Using loop

      let count = 0;

for (let chat of chats) {
  count++;
}

console.log(count);

// 15. Netflix Age Restriction

let age = 20;

let result =
  age >= 18
    ? "Watch Movie"
    : "Access Denied";

console.log(result);

// 16. Flipkart Product Sorting

let prices = [1200, 450, 9999, 2500, 700];

prices.sort((a, b) => a - b);

console.log(prices);  // Output: [450, 700, 1200, 2500, 9999] (sorted in ascending order)

// 17. Employee Attendance

let attendance = [
  "present",
  "absent",
  "present"
];

let result = attendance.reduce((acc, status) => {
  acc[status] = (acc[status] || 0) + 1;
  return acc;
}, {});

console.log(result); // Output: { present: 2, absent: 1 } (count of present and absent days)  

// 18. Banking System

let balance = 5000;

function deposit(amount) {
  balance += amount;
  console.log("Deposited:", amount);
}

function withdraw(amount) {
  if (amount <= balance) {
    balance -= amount;
    console.log("Withdrawn:", amount);
  } else {
    console.log("Insufficient Balance");
  }
}

function checkBalance() {
  console.log("Balance:", balance);
}

deposit(1000);
withdraw(2000);
checkBalance();

// 19. Zomato Rating Checker

let ratings = [4.5, 4.2, 2.8, 4.9];

let lowRating = ratings.some(
  rating => rating < 3
);

console.log(lowRating); // Output: true (because 2.8 is less than 3)

// 20. Real API Product Table

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {

    document.getElementById("products").innerHTML =
      data.map(product => `
        <div class="card">
          <img src="${product.image}" width="150">
          <h3>${product.title}</h3>
          <p>₹${product.price}</p>
        </div>
      `).join("");

  });

// 21. Challenge Task – Small E-Commerce Logic

let cart = [];

async function getProducts() {
  let response = await fetch(
    "https://fakestoreapi.com/products"
  );

  let products = await response.json();

  return products;
}

function filterCategory(products, category) {
  return products.filter(
    p => p.category === category
  );
}

function sortByPrice(products) {
  return products.sort(
    (a, b) => a.price - b.price
  );
}

function searchProduct(products, keyword) {
  return products.filter(product =>
    product.title
      .toLowerCase()
      .includes(keyword.toLowerCase())
  );
}

function addToCart(product) {
  cart.push(product);
}

function calculateTotal() {
  return cart.reduce(
    (sum, item) => sum + item.price,
    0
  );
}

(async () => {
  let products = await getProducts();

  let electronics =
    filterCategory(products, "electronics");

  let sorted =
    sortByPrice(electronics);

  let searched =
    searchProduct(sorted, "ssd");

  console.log(searched);

  if (searched.length > 0) {
    addToCart(searched[0]);
  }

  console.log("Total:", calculateTotal());
})();

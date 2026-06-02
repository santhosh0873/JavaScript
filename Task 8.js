
      // TASK 8

    fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {

    // Write Task Logic Here

  })
  .catch(err => console.log(err));

    //  1: Print All Products
    
    products.forEach(product => {
  console.log("Title :", product.title);
  console.log("Price :", product.price);
});


    //  2: Print Only Product Titles

    products.forEach(product => {
  console.log(product.title);
});

   or 

   products.map(product => console.log(product.title));

   
    //  3: Print Total Products

    console.log("Total Products :", products.length);


    //  4: Print All Categories

    let categories = [...new Set(products.map(p => p.category))];

categories.forEach(cat => console.log(cat));
    
    //  5: Products Above $50

    products
  .filter(product => product.price > 50)
  .forEach(product => {
    console.log(product.title, "-", product.price);
  });
    

    //  6: Products Below $50

    products
  .filter(product => product.price < 50)
  .forEach(product => {
    console.log(product.title, "-", product.price);
  });
  

    //  7: First Product Above $100

    let product = products.find(product => product.price > 100);

console.log(product);
    

    //  8: Search Product
   
    let searchText = "shirt";

let result = products.filter(product =>
  product.title.toLowerCase().includes(searchText.toLowerCase())
);

console.log(result);

    //  9: Count Electronics Products

    let count = products.filter(
  product => product.category === "electronics"
).length;

console.log("Electronics Count :", count);
  

    //  10: Highest Price Product
    
    let highest = products.reduce((a, b) =>
  a.price > b.price ? a : b
);

console.log(highest);

    // 11: Lowest Price Product

    let lowest = products.reduce((a, b) =>
  a.price < b.price ? a : b
);

console.log(lowest);
  
    //  12: Total Price of All Products

    let total = products.reduce(
  (sum, product) => sum + product.price,
  0
);

console.log("Total Price :", total);
    

    //  13: Average Product Price

    let total = products.reduce(
  (sum, product) => sum + product.price,
  0
);

let average = total / products.length;

console.log("Average Price :", average);
    

    //  14: Highest Rating Product

    let best = products.reduce((a, b) =>
  a.rating.rate > b.rating.rate ? a : b
);

console.log(best.title);
console.log(best.rating.rate);
   

    //  15: Lowest Rating Product

    let worst = products.reduce((a, b) =>
  a.rating.rate < b.rating.rate ? a : b
);

console.log(worst.title);
console.log(worst.rating.rate);


    //  16: Category Wise Product Count

    let counts = products.reduce((acc, product) => {

  acc[product.category] =
    (acc[product.category] || 0) + 1;

  return acc;

}, {});

console.log(counts);
    

    //  17: Discounted Products (10%)

    let discounted = products.map(product => ({
  title: product.title,
  oldPrice: product.price,
  newPrice: product.price * 0.9
}));

console.log(discounted);

    //  18: Sort Low To High

    products.sort((a, b) => a.price - b.price);

console.log(products);
   

    //  19: Sort High To Low

    products.sort((a, b) => b.price - a.price);

console.log(products);


    //  20: Any Product Above $500

    let result = products.some(
  product => product.price > 500
);

console.log(result);
    

    //  21: All Products Above Rating 3

    let result = products.every(
  product => product.rating.rate > 3
);

console.log(result);


    //  22: Top 5 Costliest Products

    products
  .sort((a, b) => b.price - a.price)
  .slice(0, 5)
  .forEach(product => {
    console.log(product.title);
  });
 

    //  23: Top 5 Rated Products

    products
  .sort((a, b) => b.rating.rate - a.rating.rate)
  .slice(0, 5)
  .forEach(product => {
    console.log(product.title);
  });
   

    //  24: Group Products By Category

    let grouped = products.reduce((acc, product) => {

  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category].push(product);

  return acc;

}, {});

console.log(grouped);
  

    //  25: Convert Price To INR

    products.forEach(product => {

  console.log(
    product.title,
    "₹",
    product.price * 85
  );

});
    
    //  26: Amazon Product Filter

    let result = products.filter(product =>
  product.price < 500 &&
  product.rating.rate > 4 &&
  product.category === "electronics"
);

console.log(result);


    //  27: Best Seller Product
   
    let bestSeller = products.reduce((a, b) =>
  a.rating.rate > b.rating.rate ? a : b
);

console.log(bestSeller);

    //  28: Product Analytics Dashboard

    console.log("Total Products :", products.length);

console.log(
  "Total Categories :",
  [...new Set(products.map(p => p.category))].length
);

console.log(
  "Highest Price Product :",
  products.reduce((a,b)=>
    a.price>b.price?a:b
  ).title
);
   
    //  29: Inventory Report

    console.log(
  "Expensive Products :",
  products.filter(p => p.price > 100).length
);

console.log(
  "Affordable Products :",
  products.filter(p => p.price <= 100).length
);
   
    //  30: Complete Admin Dashboard

    console.log("TOTAL PRODUCTS :", products.length);

console.log(
  "TOTAL PRICE :",
  products.reduce(
    (sum,p)=>sum+p.price,
    0
  )
);

console.log(
  "AVERAGE PRICE :",
  products.reduce(
    (sum,p)=>sum+p.price,
    0
  ) / products.length
);

console.log(
  "PRODUCTS ABOVE 100 :",
  products.filter(
    p => p.price > 100
  ).length
);

console.log(
  "PRODUCTS BELOW 50 :",
  products.filter(
    p => p.price < 50
  ).length
);



// Declare a variable in global scope called customerName using the var keyword.
var customerName;

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

// Write a function that declares a global variable called bestCustomer and assigns it to 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a function that changes the bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = 'new best customer';
}

// Declare a constant in global scope called leastFavoriteCustomer.
const leastFavoriteCustomer = 'someone';

// Attempt to change the constant using a function.
function changeLeastFavoriteCustomer() {
  // This will result in an error because you cannot reassign a constant.
  leastFavoriteCustomer = 'someone else';
}

// Testing the code
customerName = 'john';
console.log(customerName); // Output: "john"
upperCaseCustomerName();
console.log(customerName); // Output: "JOHN"
setBestCustomer();
console.log(bestCustomer); // Output: "not bob"
overwriteBestCustomer();
console.log(bestCustomer); // Output: "new best customer"
changeLeastFavoriteCustomer(); // This will throw an error
console.log(leastFavoriteCustomer); // Output: "someone" (unchanged)
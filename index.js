//Function to calculate a 10% tax from a given amount 
function calculateTax(amount){
    let tax = (10 * amount)/100;
    return tax;
}
//Call 
let tax = calculateTax(10000);
console.log(tax);

//Function to convert a string to uppercase
function convertToUpperCase(text){
    let toUpperCase = text.toUpperCase();
    return toUpperCase;
}
//Call
let toUpperCase = convertToUpperCase("hello");
console.log(toUpperCase);

//Function to find the maximum number
function findMaximum(num1, num2){
    if (num1>num2){
        return num1;
    }
    else if (num2>num1){
        return num2;
    }
    else {
        return "They are equal";
    }
}
//Call
let maximum = findMaximum(40, 86);
console.log(maximum);

//Function to check if string is palindrome
function isPalindrome(word){
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}
//Call
let reversed = isPalindrome("madam");
console.log(reversed);

//Function to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage){
    if (discountPercentage < 0 || discountPercentage > 100){
        console.error("Invalid discount percentage");
    }
    let discount = (discountPercentage * originalPrice)/100;
    let discountedPrice = originalPrice - discount;
    return discountedPrice;
}
//Call
let discountedPrice = calculateDiscountedPrice(10000, 10);
console.log(discountedPrice);



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
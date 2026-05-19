// Currying is a technique where a function is broken into multiple functions, 
// each taking one argument.

function createTaxCalculator(taxRate){
    return function(price){
        return price + (price * taxRate);
    }
}

const addGST = createTaxCalculator(0.18);

console.log(addGST(1000));
console.log(addGST(500));
console.log(addGST(2000));

// Bonus
const addFivePercentTax = createTaxCalculator(0.05);

console.log(addFivePercentTax(1000));
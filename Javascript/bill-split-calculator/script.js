let billAmount = parseFloat(inp[0]); // Don't change this line
let tipPercentage = parseFloat(inp[1]); // Don't change this line
let numPeople = parseInt(inp[2]); // Don't change this line

console.log("Bill Split Calculator");

let tipAmount = (tipPercentage / 100) * billAmount;
let totalWithTip = billAmount + tipAmount;

let perPerson = totalWithTip / numPeople;

console.log("Total (including tip): $" + totalWithTip);
console.log("Each person pays: $" + perPerson);
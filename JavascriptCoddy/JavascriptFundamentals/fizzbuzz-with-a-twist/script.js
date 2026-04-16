let num = parseInt(inp); // Don't change this line

console.log("Welcome to FizzBuzz!");

const fizzbuzz = (n) => {
  if (n % 3 === 0 && n % 7 === 0) {
    return "FizzBuzz";
  } else if (n % 3 === 0) {
    return "Fizz";
  } else if (n % 7 === 0) {
    return "Buzz";
  } else if (n.toString().includes("3")) {
    return "Almost Fizz";
  } else {
    return n.toString();
  }
};

for (let i = 1; i <= num; i++) {
  console.log(fizzbuzz(i));
}
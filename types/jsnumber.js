const num1 = 2**3
console.log(num1)

const a = 2 / 0;
console.log(a); // Infinity

let aa = -2 / 0;
console.log(a); // -Infinity

// BigInt value
const value = 900719925124740998n;

// Adding two big integers
const value1 = value + 1n;
console.log(value1); // returns "900719925124740999n"
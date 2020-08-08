
let bonus = 20; 


function sum(num1, num2) {
    let result = num1 + num2 + bonus;
    return result;
}

let output = sum(3,7);

console.log(output);

// out of scope 
// console.log(result); 
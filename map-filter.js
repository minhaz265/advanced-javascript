const numbers = [3,4,5,6,7,8];

// const result = numbers.map(function (params) {
//     return params * params;
    
// })

// console.log(result);



// const result2 = numbers.map(x => x * x);
// console.log(result2);


const bigger = numbers.filter(x => x > 5);
console.log(bigger);


const myNumber = numbers.find(x => x < 5);
console.log(myNumber);


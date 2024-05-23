 let arr = [1,2,3,4,5];

 console.log(arr.length);

 // push adciona elemento no final do array

 arr.push(6);
 arr.push("qual quer coisa");

 console.log(arr);

 //pop tira o elemento no final do array
 arr.pop();

 console.log(arr);

//ushift adicionar no começo do array

arr.unshift(0);

console.log(arr);

//shift remove o elemento no inicio do array

arr.shift();

console.log(arr);

// Acessar o último elemento

console.log(arr[arr.length -1]);

// isArray

console.log(Array.isArray(5));

console.log(Array.isArray(arr));
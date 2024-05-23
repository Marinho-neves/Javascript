//splice
let arr = [1,2,3,4,5];

// parametros de 2 coresponde ao indice
// O correspode que nenhum elemento vai ser removido
// 999 vai ser adicionado ao array
arr.splice(2, 0, 999);

console.log(arr);
//Removendo um elemento com indice 4 no array

arr.splice(4, 1);

console.log(arr);

// indexOf
// indentifica o indice de um elemento em um array
console.log(arr.indexOf(5));

// join

let arr2 = ["O","rato","roeu","a","roupa"];
//tranformando o array em uma string 
console.log(arr2.join(","));

// reverse
//inveter os elementos do array
console.log(arr2.reverse());